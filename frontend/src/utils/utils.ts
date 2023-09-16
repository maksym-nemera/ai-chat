import { MessegeAndAnswers } from '../types/AnswerAndMessage';

export const combineAndSortMessagesAndAnswers = (
  messages: MessegeAndAnswers[],
  answers: MessegeAndAnswers[],
) => {
  const combinedArray: MessegeAndAnswers[] = [...messages, ...answers];

  combinedArray.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
      return dateA.getTime() - dateB.getTime();
    }

    return 0;
  });

  return combinedArray;
};
