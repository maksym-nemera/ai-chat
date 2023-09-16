import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ChatAnswer } from 'src/models/chatAnswers.model';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(ChatAnswer)
    private readonly answerModel: typeof ChatAnswer,
  ) {}

  async getAllAnswers() {
    return await this.answerModel.findAll();
  }

  async createAnswer(text: string) {
    return await this.answerModel.create({ text });
  }
}
