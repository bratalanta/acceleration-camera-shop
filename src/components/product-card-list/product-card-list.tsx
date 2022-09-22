import { TCamera } from '../../types/camera';
import ProductCard from '../product-card/product-card';

type ProductCardListProps = {
  cameras: TCamera[];
}

function ProductCardList({cameras}: ProductCardListProps) {

  return (
    <>
      {cameras.map((camera) => (
        <ProductCard key={camera.id} product={camera}/>
      ))}
    </>
  );
}

export default ProductCardList;
