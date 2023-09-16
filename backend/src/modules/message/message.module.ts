import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatMessage } from '../../models/chatMessage.model';
import { MessagesController } from 'src/controllers/messages/messages.controller';
import { MessagesService } from 'src/services/messages/messages.service';

@Module({
  imports: [SequelizeModule.forFeature([ChatMessage])],
  providers: [MessagesService],
  controllers: [MessagesController],
  exports: [MessagesService],
})
export class MessageModule {}
