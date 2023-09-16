import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatMessage } from './models/chatMessage.model';
import { MessageModule } from './modules/message/message.module';
import { EventsModule } from './modules/events/events.module';
import { AnswerModule } from './modules/answer/answer.module';
import { OpenAIModule } from './modules/openai/openai.module';
import { ChatAnswer } from './models/chatAnswers.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [ChatMessage, ChatAnswer],
      autoLoadModels: true,
      synchronize: true,
    }),
    MessageModule,
    AnswerModule,
    EventsModule,
    OpenAIModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
