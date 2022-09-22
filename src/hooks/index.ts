import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, State } from '../types/state';

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export {
  useAppDispatch,
  useAppSelector
};
