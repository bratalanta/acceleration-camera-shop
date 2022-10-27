import { screen } from '@testing-library/react';
import { BasketModal, NameSpace } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../tests/mocks/mocks';
import BasketResponseModal from './basket-response-modal';

const mockCamera = {
  ...makeFakeCamera(),
  category: 'Видеокамера'
};

describe('Component: BasketResponseModal', () => {
  it('should render correctly when success', () => {
    renderTestApp(<BasketResponseModal/>, {
      initialState: {
        [NameSpace.App]: {
          basketActiveModal: {
            activeModal: BasketModal.Sucess,
            productDetails: mockCamera
          },
          currentCatalogPath: {
            currentPage: 1
          }
        }
      }
    });

    expect(screen.getByText('Спасибо за покупку')).toBeInTheDocument();
  });

  it('should render correctly when fail', () => {
    renderTestApp(<BasketResponseModal/>, {
      initialState: {
        [NameSpace.App]: {
          basketActiveModal: {
            activeModal: BasketModal.Fail,
            productDetails: mockCamera
          },
          currentCatalogPath: {
            currentPage: 1
          }
        }
      }
    });

    expect(screen.getByText('Не удалось купить товар')).toBeInTheDocument();
  });
});
