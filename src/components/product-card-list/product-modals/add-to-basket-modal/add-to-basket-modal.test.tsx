import { screen } from '@testing-library/react';
import { NameSpace, ProductModal } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../tests/mocks/mocks';
import AddToBasketModal from './add-to-basket-modal';

const closeModal = jest.fn();
const mockCamera = {
  ...makeFakeCamera(),
  category: 'Видеокамера'
};

describe('Component: AddToBasketModal', () => {
  it('should render correctly', async () => {
    renderTestApp(<AddToBasketModal isModalActive closeModal={closeModal}/>, {
      initialState: {
        [NameSpace.App]: {
          productActiveModal: {
            activeModal: ProductModal.Add,
            productDetails: mockCamera
          }
        }
      }
    });

    expect(screen.getByTestId('add')).toBeInTheDocument();
  });
});
