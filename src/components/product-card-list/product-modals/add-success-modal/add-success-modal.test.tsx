import { screen } from '@testing-library/react';
import { NameSpace } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import AddSuccessModal from './add-success-modal';

const closeModal = jest.fn();

describe('Component: AddSuccessModal', () => {
  it('should render correctly', async () => {
    renderTestApp(<AddSuccessModal isModalActive closeModal={closeModal}/>, {
      initialState: {
        [NameSpace.App]: {
          currentCatalogPath: {
            currentPage: 1,
          }
        }
      }
    });

    expect(screen.getByTestId('success')).toBeInTheDocument();
  });
});
