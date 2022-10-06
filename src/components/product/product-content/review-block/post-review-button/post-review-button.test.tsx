import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import PostReviewButton from './post-review-button';
import { Modal } from '../../../../../const';

const openModal = jest.fn();

describe('Component: PostReviewButton', () => {
  it('should render correctly', async () => {
    renderTestApp(<PostReviewButton />, {});

    expect(screen.getByTestId('open-modal-btn')).toBeInTheDocument();
  });

  it('should open modal when user click on button', async () => {
    renderTestApp(<PostReviewButton />, {});

    openModal(Modal.Form);
    expect(openModal).toBeCalledTimes(1);
  });
});
