import { getYearsSince } from '@/utils/getYearsSince';
import { BIRTHDAY, START_WORK } from '@/const/const';

export const data: string[] = [
  '😊 Alena Stovpets',
  `🎂 ${getYearsSince(BIRTHDAY)} years old`,
  '💙️ Frontend',
  '👩‍🏫 B.Sc. in Software Engineering',
  `👩‍💻 ${getYearsSince(START_WORK)} years of experience`,
];
