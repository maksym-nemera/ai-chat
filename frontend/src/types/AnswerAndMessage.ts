export interface MessegeAndAnswers {
  id: number;
  text: string;
  category: 'user' | 'ai';
  createdAt: Date;
  updatedAt: Date;
}
