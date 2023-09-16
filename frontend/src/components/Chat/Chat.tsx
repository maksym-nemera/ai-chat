import { Box, Typography, useMediaQuery } from '@mui/material';
import { FC, memo, useState, ChangeEvent, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions as chatAction } from '../../features/chat/chatSlice';
import { TextForm } from '../TextForm';
import { Polygon } from '../icons/Polygon';
import { combineAndSortMessagesAndAnswers } from '../../utils/utils';
import { socket } from '../../utils/socket';
import { MessegeAndAnswers } from '../../types/AnswerAndMessage';

export const Chat: FC = memo(() => {
  const dispatch = useAppDispatch();
  const { messages, answers, loading } = useAppSelector((state) => state.chat);

  const [message, setMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    const onConnect = () => {
      // eslint-disable-next-line no-console
      console.log('Connected to the server');
      setIsConnected(true);
    };

    const onDisconnect = () => {
      // eslint-disable-next-line no-console
      console.log('Disconnected from the server');
      setIsConnected(false);
    };

    const getAllMessages = (messages: MessegeAndAnswers[]) => {
      dispatch(chatAction.setMessages(messages));
    };

    const getAllAnswers = (answers: MessegeAndAnswers[]) => {
      dispatch(chatAction.setAnswers(answers));
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.emit('allMessages');
    socket.on('allMessages', getAllMessages);
    socket.emit('allAnswers');
    socket.on('allAnswers', getAllAnswers);

    // eslint-disable-next-line consistent-return
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('allMessages', getAllMessages);
      socket.off('allAnswers', getAllAnswers);
    };
  }, [dispatch, isConnected, loading]);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    dispatch(chatAction.setLoading(true));

    socket.emit('message', { text: message });
    // eslint-disable-next-line no-magic-numbers
    socket.timeout(1).emit('answers', { text: message }, () => {
      socket.on('isLoad', (isLoad) => {
        dispatch(chatAction.setLoading(!isLoad));
      });
    });

    setMessage('');
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
        {combinedArray.map(({ id, text, category, createdAt }, index) => {
          const date = new Date(createdAt);
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const formattedTime = `${hours}:${minutes}`;

          return (
            <Typography
              key={id}
              variant='h5'
              sx={{
                marginBottom:
                  index === combinedArray.length - 1 ? '190px' : '28px',
                padding: isMobile
                  ? '10px 20px 15px 20px'
                  : '25px 43px 25px 44px',
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

              <Box
                sx={{
                  position: 'relative',
                  top: '10px',
                  display: 'flex',
                  justifyContent:
                    category === 'user' ? 'flex-start' : 'flex-end',
                  color: '#ACADAD',
                }}>
                {formattedTime}
              </Box>
            </Typography>
          );
        })}
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
