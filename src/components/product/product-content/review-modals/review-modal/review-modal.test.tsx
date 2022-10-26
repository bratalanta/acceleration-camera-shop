import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import ReviewModal from './review-modal';
import userEvent from '@testing-library/user-event';

const closeModal = jest.fn();

describe('Component: ReviewModal', () => {
  it('should render correctly', async () => {
    renderTestApp(<ReviewModal isModalActive closeModal={closeModal}/>, {});

    expect(screen.getByTestId('review-modal')).toBeInTheDocument();
  });

  it('should close modal when user clicks on cross-btn', async () => {
    renderTestApp(<ReviewModal isModalActive closeModal={closeModal}/>, {});

    await userEvent.click(screen.getByTestId('cross-btn'));
    expect(closeModal).toBeCalledTimes(1);
  });

  it('should close modal when user clicks on overlay', async () => {
    renderTestApp(<ReviewModal isModalActive closeModal={closeModal}/>, {});

    await userEvent.click(screen.getByTestId('overlay'));
    expect(closeModal).toBeCalledTimes(1);
  });
});
