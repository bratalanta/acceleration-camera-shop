import { RemoveScroll } from 'react-remove-scroll';
import { ProductModal } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setProductActiveModal } from '../../../store/slices/app-slice/app-slice';
import { selectProductActiveModal } from '../../../store/slices/app-slice/selectors';
import AddSuccessModal from './add-success-modal/add-success-modal';
import AddToBasketModal from './add-to-basket-modal/add-to-basket-modal';

function ProductModals() {
  const dispatch = useAppDispatch();
  const {activeModal} = useAppSelector(selectProductActiveModal);

  return (
    <RemoveScroll enabled={activeModal === ProductModal.Add || activeModal === ProductModal.Success}>
      {activeModal === ProductModal.Add &&
      <AddToBasketModal
        isModalActive={activeModal === ProductModal.Add}
        closeModal={() => dispatch(setProductActiveModal({
          activeModal: null
        }))}
      />}
      {activeModal === ProductModal.Success &&
      <AddSuccessModal
        isModalActive={activeModal === ProductModal.Success}
        closeModal={() => dispatch(setProductActiveModal({
          activeModal: null
        }))}
      />}
    </RemoveScroll>
  );
}

export default ProductModals;
