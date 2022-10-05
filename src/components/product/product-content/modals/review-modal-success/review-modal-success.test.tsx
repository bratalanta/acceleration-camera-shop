import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import userEvent from '@testing-library/user-event';
import ReviewModalSuccess from './review-modal-success';

const closeModal = jest.fn();

describe('Component: ReviewModal', () => {
  it('should render correctly', async () => {
    renderTestApp(<ReviewModalSuccess isModalActive closeModal={closeModal}/>, {});

    expect(screen.getByTestId('review-modal-success')).toBeInTheDocument();
  });

  it('should close modal when user clicks on cross-btn', async () => {
    renderTestApp(<ReviewModalSuccess isModalActive closeModal={closeModal}/>, {});

    await userEvent.click(screen.getByTestId('cross-btn'));
    expect(closeModal).toBeCalledTimes(1);
  });

  it('should close modal when user clicks on overlay', async () => {
    renderTestApp(<ReviewModalSuccess isModalActive closeModal={closeModal}/>, {});

    await userEvent.click(screen.getByTestId('overlay'));
    expect(closeModal).toBeCalledTimes(1);
  });

  it('should close modal when user clicks on back-to-shop', async () => {
    renderTestApp(<ReviewModalSuccess isModalActive closeModal={closeModal}/>, {});

    await userEvent.click(screen.getByTestId('back-to-shop'));
    expect(closeModal).toBeCalledTimes(1);
  });
});
