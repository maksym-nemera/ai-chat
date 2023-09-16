import { Box, Typography, useMediaQuery } from '@mui/material';
import { FC, memo, useState, ChangeEvent, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as chatAction } from '../../features/chat/chatSlice';
import { TextForm } from '../TextForm';
import { Polygon } from '../icons/Polygon';
import { Socket, io } from 'socket.io-client';
import { combineAndSortMessagesAndAnswers } from '../../utils/utils';

export const Chat: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { messages, answers, loading } = useAppSelector((state) => state.chat);

  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io('ws://localhost:80/', {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
    });

    socketInstance.on('connect', () => {
      // eslint-disable-next-line no-console
      console.log('Connected to the server');
    });

    socketInstance.on('error', (error) => {
      // eslint-disable-next-line no-console
      console.error('Socket error:', error);
    });

    socketInstance.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log('Disconnected from the server');
    });

    setSocket(socketInstance);

    // eslint-disable-next-line consistent-return
    return () => {
      socketInstance.disconnect();
    };
  }, [loading]);

  useEffect(() => {
    if (!socket) return;

    socket.emit('allMessages');
    socket.on('allMessages', (messages) => {
      dispatch(chatAction.setMessages(messages));
    });

    socket.emit('allAnswers');
    socket.on('allAnswers', (answers) => {
      dispatch(chatAction.setAnswers(answers));
    });

    // eslint-disable-next-line consistent-return
    return () => {
      socket.off('allMessages');
      socket.off('allAnswers');
    };
  }, [dispatch, socket, loading]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkAnswer = async () => {
    if (!socket) return;
    socket.emit('allAnswers');
    socket.on('allAnswers', (answers) => {
      dispatch(chatAction.setAnswers(answers));
    });
    socket.on('loading', (loading) => {
      dispatch(chatAction.setLoading(loading));
    });
  };

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    const intervalId = setInterval(checkAnswer, 5000);
    return () => clearInterval(intervalId);
  }, [checkAnswer, loading]);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    if (!socket) return;

    dispatch(chatAction.setLoading(true));

    Promise.all([
      socket.emit('message', { text: message }),
      socket.emit('answers', { text: message }),
      socket.emit('allAnswers'),
      socket.on('allAnswers', (answers) => {
        dispatch(chatAction.setAnswers(answers));
      }),
      socket.emit('allMessages'),
      socket.on('allMessages', (messages) => {
        dispatch(chatAction.setMessages(messages));
      }),
      socket.on('loading', (loading) => {
        dispatch(chatAction.setLoading(loading));
      }),
    ]);

    setMessage('');

    dispatch(chatAction.setLoading(false));
  };

  const addMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (message.trim() === '') {
      setMessage('');
    }

    setIsFocused(false);
  };

  const combinedArray = useMemo(
    () => combineAndSortMessagesAndAnswers(messages, answers),
    [answers, messages],
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '42px 0 42px 0',
        position: isMobile ? 'static' : 'relative',
      }}>
      <Box
        className={'chat-container'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: 'white',
          borderRadius: '40px 0px 0px 40px',
          padding: isMobile ? '20px 15px 0 15px' : '20px 64px 0 64px',
          overflowY: 'scroll',
        }}>
        {combinedArray.map(({ id, text, category }, index) => (
          <Typography
            key={id}
            variant='h5'
            sx={{
              marginBottom:
                index === combinedArray.length - 1 ? '190px' : '28px',
              padding: isMobile ? '10px 20px 15px 20px' : '25px 43px 25px 44px',
              borderRadius: '40px',
              background: category === 'user' ? '#FEE2C5' : '#C4DDFF',
              textAlign: category === 'user' ? 'end' : 'start',
              lineHeight: 'normal',
              alignSelf: category === 'user' ? 'flex-end' : 'flex-start',
              position: 'relative',
            }}>
            <Polygon
              style={{
                position: 'absolute',
                bottom: 0,
                left: category === 'user' ? 'auto' : '-18px',
                transform: category === 'user' ? 'none' : 'scaleX(-1)',
                right: category === 'user' ? '-18px' : 'auto',
              }}
              fill={category === 'user' ? '#FEE2C5' : '#C4DDFF'}
            />

            {text}
          </Typography>
        ))}
      </Box>

      <TextForm
        addMessage={addMessage}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        handleSendMessage={handleSendMessage}
        isFocused={isFocused}
        message={message}
      />
    </Box>
  );
});
