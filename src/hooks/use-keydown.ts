import { useEffect } from 'react';

function useKeydown(key: string, action: () => void) {
  useEffect(() => {
    document.addEventListener('keydown', handleModalClose);

    return () => document.removeEventListener('keydown', handleModalClose);
  }, []);

  const handleModalClose = (evt: KeyboardEvent) => {
    if (evt.key === key) {
      action();
    }
  };
}

export default useKeydown;
