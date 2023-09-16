import { FC } from 'react';
import { Sidebar } from './components/Sidebar';
import { Chat } from './components/Chat';
import { Box } from '@mui/material';

export const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: (theme) => theme.palette.primary.main,
      }}>
      <Sidebar />

      <Chat />
    </Box>
  );
};
