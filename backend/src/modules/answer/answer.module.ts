import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChatAnswer } from 'src/models/chatAnswers.model';
import { AnswersService } from 'src/services/answers/answers.service';
import { AnswerController } from 'src/controllers/answers/answers.controller';

@Module({
  imports: [SequelizeModule.forFeature([ChatAnswer])],
  providers: [AnswersService],
  controllers: [AnswerController],
  exports: [AnswersService],
})
export class AnswerModule {}
