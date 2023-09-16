import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class ChatMessage extends Model<ChatMessage> {
  @Column({
    type: DataType.TEXT,
  })
  text: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'user',
  })
  category: string;
}
