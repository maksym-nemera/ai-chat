import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnswersService } from 'src/services/answers/answers.service';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswersService) {}

  @Get()
  async getAllAnswers() {
    return await this.answerService.getAllAnswers();
  }

  @Post()
  async createAnswer(@Body() answerData: { text: string }) {
    return await this.answerService.createAnswer(answerData.text);
  }
}
