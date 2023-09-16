import {
  Box,
  Button,
  SvgIcon,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ChangeEvent, FC, KeyboardEvent } from 'react';
import { SendIcon } from '../icons/SendIcon';
import { useAppSelector } from '../../app/hooks';

interface TextFormProps {
  isFocused: boolean;
  message: string;
  addMessage: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleSendMessage: () => void;
}

export const TextForm: FC<TextFormProps> = ({
  isFocused,
  message,
  addMessage,
  handleFocus,
  handleBlur,
  handleSendMessage,
}) => {
  const { loading } = useAppSelector((state) => state.chat);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.ctrlKey) {
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        right: isMobile ? '20px' : 0,
        left: isMobile ? '80px' : '20px',
        bottom: '70px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        margin: '0 auto',
        maxWidth: '680px',
      }}>
      {loading && (
        <Box
          sx={{
            height: '25px',
            width: '155px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '15px',
            right: '30px',
          }}>
          <Typography variant='h4' sx={{ textAlign: 'left', fontSize: '10px' }}>
            AgileGPT writing..
          </Typography>
        </Box>
      )}

      <Box
        component='form'
        noValidate
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          borderRadius: '20px',
        }}>
        <TextField
          label={
            isFocused ? (
              ''
            ) : (
              <Typography
                variant='h5'
                sx={{
                  lineHeight: 'normal',
                }}>
                {'Ask me anything that I can help you or your team...'}
              </Typography>
            )
          }
          variant='outlined'
          multiline
          fullWidth
          value={message}
          onChange={addMessage}
          size='small'
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            minWidth: '140px',
            backgroundColor: 'white',
          }}
        />

        <Box>
          <Button onClick={handleSendMessage}>
            <SvgIcon component={SendIcon} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
