import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ChatMessage } from 'src/models/chatMessage.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(ChatMessage)
    private readonly messageModel: typeof ChatMessage,
  ) {}

  async getAllMessages() {
    return await this.messageModel.findAll();
  }

  async createMessage(text: string) {
    return await this.messageModel.create({ text });
  }
}
