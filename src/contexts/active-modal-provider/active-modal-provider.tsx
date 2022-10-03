import { createContext, ReactNode, useContext, useState } from 'react';
import { Modal } from '../../const';

type ActiveModalState = [
  activeModal: Modal | null,
  setActiveModal: (modal: Modal | null) => void
];

const ActiveModalContext = createContext({} as ActiveModalState);

type ActiveModalProviderProps = {
  children: ReactNode
}

export default function ActiveModalProvider({children}: ActiveModalProviderProps): JSX.Element {
  const [activeModal, setActiveModal] = useState<Modal | null>(null);

  return (
    <ActiveModalContext.Provider value={[activeModal, setActiveModal]}>
      {children}
    </ActiveModalContext.Provider>
  );
}

export const useActiveModal = () => {
  const context = useContext(ActiveModalContext);

  if (!context) {
    throw new Error('useActiveModal should work with ActiveModalContext');
  }

  return context;
};
