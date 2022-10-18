import { useCallback, useEffect } from 'react';

function useKeydown(key: string, action: () => void) {
  const handler = useCallback((evt: KeyboardEvent) => {
    if (evt.key === key) {
      action();
    }
  }, [action, key]);

  useEffect(() => {
    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [handler]);

}

export default useKeydown;
