import ReactFocusLock from 'react-focus-lock';
import { TCamera } from '../../types/camera';
import ProductCard from '../product-card/product-card';
import ProductModals from './product-modals/product-modals';

type ProductCardListProps = {
  cameras: TCamera[];
}

function ProductCardList({cameras}: ProductCardListProps) {
  return (
    <>
      {cameras.map((camera) => (
        <ProductCard key={camera.id} product={camera} />
      ))}
      <ReactFocusLock>
        <ProductModals />
      </ReactFocusLock>
    </>
  );
}

export default ProductCardList;
