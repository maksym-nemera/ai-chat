import { Box, Button, Drawer, IconButton, useMediaQuery } from '@mui/material';
import { FC, memo, useState } from 'react';
import { DrawerComponent } from '../DrawerComponent';
import { HeartHandshakeIcon } from '../icons/HeartHandshakeIcon';

export const Sidebar: FC = memo(() => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      sx={{
        marginRight: isMobile ? '' : '45px',
        marginLeft: isMobile ? '' : '45px',
      }}>
      {isMobile ? (
        <>
          <Button
            onClick={toggleSidebar}
            sx={{
              position: 'relative',
              top: '60px',
            }}>
            <IconButton>
              <HeartHandshakeIcon />
            </IconButton>
          </Button>

          <Drawer
            anchor='left'
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: (theme) => theme.palette.primary.main,
              },
            }}>
            <DrawerComponent />
          </Drawer>
        </>
      ) : (
        <DrawerComponent />
      )}
    </Box>
  );
});
