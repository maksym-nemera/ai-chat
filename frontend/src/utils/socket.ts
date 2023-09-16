import { io } from 'socket.io-client';

export const socket = io('ws://localhost:80/', {
  transports: ['websocket'],
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
});
