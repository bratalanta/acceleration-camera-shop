import { screen } from '@testing-library/react';
import { BasketModal, NameSpace } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../tests/mocks/mocks';
import BasketRemoveProductModal from './basket-remove-product-modal';

const mockCamera = {
  ...makeFakeCamera(),
  category: 'Видеокамера'
};

describe('Component: BasketRemoveProductModal', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketRemoveProductModal/>, {
      initialState: {
        [NameSpace.App]: {
          basketActiveModal: {
            activeModal: BasketModal.Remove,
            productDetails: mockCamera
          }
        }
      }
    });

    expect(screen.getByTestId('b-remove')).toBeInTheDocument();
  });
});
