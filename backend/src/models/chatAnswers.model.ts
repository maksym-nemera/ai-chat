import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class ChatAnswer extends Model<ChatAnswer> {
  @Column({
    type: DataType.TEXT,
  })
  text: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'ai',
  })
  category: string;
}
