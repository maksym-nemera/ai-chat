import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  SvgIcon,
  Toolbar,
  Typography,
  Drawer,
} from '@mui/material';
import { FC, memo } from 'react';
import { HeartHandshakeIcon } from '../icons/HeartHandshakeIcon';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 180;

export const DrawerComponent: FC = memo(() => {
  const location = useLocation();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: (theme) => theme.palette.primary.main,
          position: 'fixed',
          top: 0,
          outline: 0,
          left: '45px',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
      variant='permanent'
      anchor='left'>
      <Typography
        variant='h2'
        sx={{
          textAlign: 'center',
          marginTop: '54px',
        }}>
        Agile
      </Typography>

      <Toolbar />

      <Divider />

      <List>
        {['AI Agile Coach'].map((text, index) => {
          const isActive =
            location.pathname === `/${text.replaceAll(' ', '-').toLowerCase()}`;
          const path = `/${text.replaceAll(' ', '-').toLowerCase()}`;

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                selected={isActive}
                to={path}
                sx={{
                  gap: '12px',
                  padding: '7px',
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                  }}>
                  <SvgIcon component={HeartHandshakeIcon} />
                </ListItemIcon>

                <Typography
                  variant='h4'
                  sx={{
                    lineHeight: 'normal',
                  }}>
                  {text}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
});
