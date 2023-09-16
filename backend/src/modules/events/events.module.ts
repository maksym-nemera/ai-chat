import { Module } from '@nestjs/common';
import { EventsGateway } from 'src/gateways/events.gateway';
import { AnswerModule } from '../answer/answer.module';
import { MessageModule } from '../message/message.module';
import { OpenAIModule } from '../openai/openai.module';

@Module({
  imports: [AnswerModule, MessageModule, OpenAIModule],
  providers: [EventsGateway],
})
export class EventsModule {}
