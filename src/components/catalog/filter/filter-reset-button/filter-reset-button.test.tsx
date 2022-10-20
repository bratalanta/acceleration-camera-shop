import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import FilterResetButton from './filter-reset-button';

const resetForm = jest.fn();

describe('Component: FilterResetButton', () => {
  it('should render correctly', () => {
    renderTestApp(<FilterResetButton onFormReset={resetForm} />, {
      initialState: {}
    });

    expect(screen.getByText('Сбросить фильтры')).toBeInTheDocument();
  });

  it('should invoke handler when user clicks on button', async () => {
    renderTestApp(<FilterResetButton onFormReset={resetForm} />, {
      initialState: {}
    });

    await userEvent.click(screen.getByTestId('btn-reset'));
    resetForm();

    expect(resetForm).toBeCalledTimes(1);
  });
});
