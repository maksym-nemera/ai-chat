import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { AnswersService } from 'src/services/answers/answers.service';
import { MessagesService } from 'src/services/messages/messages.service';
import { OpenAIService } from 'src/services/openai/openai.service';

@WebSocketGateway(80, { transports: ['websocket'] })
export class EventsGateway {
  @WebSocketServer() server: Server;

  constructor(
    private readonly answerService: AnswersService,
    private readonly messageService: MessagesService,
    private readonly openaiService: OpenAIService,
  ) {}

  @SubscribeMessage('allMessages')
  async sendAllMessages() {
    const messages = await this.messageService.getAllMessages();
    this.server.emit('allMessages', messages);

    return;
  }

  @SubscribeMessage('allAnswers')
  async sendAllAnswers() {
    const answers = await this.answerService.getAllAnswers();
    this.server.emit('allAnswers', answers);

    return;
  }

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() messageData: { text: string }) {
    const { text } = messageData;

    const newMessage = await this.messageService.createMessage(text);

    this.server.emit('newMessage', newMessage);

    return { text: `Server received and saved: ${text}` };
  }

  @SubscribeMessage('answers')
  async handleAnswer(@MessageBody() answerData: { text: string }) {
    const { text } = answerData;
    const prompt = `
    You are an Agile Coach, an innovative intelligent agent to improve the management of Agile projects and teams. As an Agile Coach, you can provide clear guidance and practical advice on how to optimize task allocation, sprint planning, risk identification, and productivity. For you, questions such as:
    1. "How to optimize task distribution in an Agile team?"
    2. "How do I determine the ideal sprint duration for my project?"
    3. "What are the steps to manage risks in an Agile project?"
    4. "How to increase productivity in Agile?"
    These shouldn't be a concern at all, because you are a master in my work and can provide recommendations for any question.
    
    Provide individualized advice and recommendations for success in Agile projects.
    `;

    this.server.emit('isLoad', false);

    const generatedText = await this.openaiService.createCompletion(
      prompt,
      text,
    );

    this.server.emit('newAnswer', generatedText);

    this.server.emit('isLoad', true);

    return { text: `AI received and saved: ${generatedText}` };
  }
}
