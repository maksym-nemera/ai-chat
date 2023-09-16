import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { AnswersService } from '../answers/answers.service';

@Injectable()
export class OpenAIService {
  private openai: OpenAIApi;

  constructor(private readonly answersService: AnswersService) {
    const configuration = new Configuration({
      apiKey: process.env.API_AI_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createCompletion(prompt: string, message: string) {
    const promptWithText = `${prompt} ${message}`;

    const response = await this.openai.createCompletion({
      model: 'text-davinci-003',
      prompt: promptWithText,
      max_tokens: 1074,
      temperature: 0.5,
    });

    const generatedText = response.data.choices[0].text;

    await this.answersService.createAnswer(generatedText);

    return generatedText;
  }
}
