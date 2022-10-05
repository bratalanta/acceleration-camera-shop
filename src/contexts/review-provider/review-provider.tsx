import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { DEFAULT_PAGE, Modal } from '../../const';

type ReviewContextState = {
  activeModal: Modal | null;
  setActiveModal: (modal: Modal | null) => void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const ReviewContext = createContext({} as ReviewContextState);

type ReviewProviderProps = {
  children: ReactNode
}

export default function ReviewProvider({children}: ReviewProviderProps): JSX.Element {
  const [activeModal, setActiveModal] = useState<Modal | null>(null);
  const [currentPage, setCurrentPage] = useState(Number(DEFAULT_PAGE) + 1);

  return (
    <ReviewContext.Provider value={{activeModal, setActiveModal, currentPage, setCurrentPage}}>
      {children}
    </ReviewContext.Provider>
  );
}

export const useReview = () => {
  const context = useContext(ReviewContext);

  if (!context) {
    throw new Error('useReview should work with ReviewContext');
  }

  return context;
};
