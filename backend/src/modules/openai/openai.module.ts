import { Module } from '@nestjs/common';
import { OpenAIService } from 'src/services/openai/openai.service';
import { AnswerModule } from '../answer/answer.module';

@Module({
  imports: [AnswerModule],
  controllers: [],
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class OpenAIModule {}
