import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from '../../services/messages/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  async getAllMessages() {
    return await this.messagesService.getAllMessages();
  }

  @Post()
  async createMessage(@Body() messageData: { text: string }) {
    return await this.messagesService.createMessage(messageData.text);
  }
}
