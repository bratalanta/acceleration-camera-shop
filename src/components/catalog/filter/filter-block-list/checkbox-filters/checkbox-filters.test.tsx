import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterBlock } from '../../../../../const';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import CheckboxFilters from './checkbox-filters';

describe('Component: CheckboxFilters', () => {
  it('should render correctly', () => {
    renderTestApp(<CheckboxFilters />, {});

    expect(screen.getAllByTestId('checkbox-block')).toHaveLength(Object.keys(FilterBlock).length);
  });

  it('should check the box', async () => {
    renderTestApp(<CheckboxFilters />, {});

    await userEvent.click(screen.getAllByTestId('checkbox')[0]);
    expect(screen.getAllByTestId('checkbox')[0]).toBeChecked();
  });
});
