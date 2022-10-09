import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

const humanizeDate = (date: dayjs.ConfigType, format: string) => dayjs(date).format(format);

const scrollToTop = (behavior: ScrollBehavior = 'auto') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
};

export {
  humanizeDate,
  scrollToTop
};
