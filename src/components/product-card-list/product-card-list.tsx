import { cameras } from '../../mocks';
import ProductCard from '../product-card/product-card';

export default function ProductCardList() {
  const mockCameras = cameras;

  return (
    <>
      {mockCameras.map((camera) => (
        <ProductCard key={camera.id} product={camera}/>
      ))}
    </>
  );
}
