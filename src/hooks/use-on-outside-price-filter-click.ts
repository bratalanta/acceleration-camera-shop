import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnOutsidePriceFilterClick = <T extends HTMLElement = HTMLElement>(
  minPriceInputRef: RefObject<T>,
  maxPriceInputRef: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const handleMinPriceOutsideClick = (event: Event) => {
      const el = minPriceInputRef?.current;
      if (!el || el.contains((event?.target as Node) || null) || event?.target === maxPriceInputRef.current) {
        return;
      }

      handler(event);
    };

    const handleMaxPriceOutsideClick = (event: Event) => {
      const el = maxPriceInputRef?.current;

      if (!el || el.contains((event?.target as Node) || null) || event?.target === minPriceInputRef.current) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', handleMinPriceOutsideClick);
    document.addEventListener('touchstart', handleMinPriceOutsideClick);

    document.addEventListener('mousedown', handleMaxPriceOutsideClick);
    document.addEventListener('touchstart', handleMaxPriceOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleMinPriceOutsideClick);
      document.removeEventListener('touchstart', handleMinPriceOutsideClick);

      document.removeEventListener('mousedown', handleMaxPriceOutsideClick);
      document.removeEventListener('touchstart', handleMaxPriceOutsideClick);
    };
  }, [handler, maxPriceInputRef, minPriceInputRef]);
};

export default useOnOutsidePriceFilterClick;
