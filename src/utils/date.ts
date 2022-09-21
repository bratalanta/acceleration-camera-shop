import dayjs from 'dayjs';
require('dayjs/locale/ru');
dayjs.locale('ru');

const humanizeDate = (date: dayjs.ConfigType, format: string) => dayjs(date).format(format);

export {
  humanizeDate
};
