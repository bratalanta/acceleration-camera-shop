import { screen } from '@testing-library/react';
import { Anchor } from '../../../../../const';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../../tests/mocks/mocks';
import ProductTabs from './product-tabs';
import 'jest-location-mock';

const mockCamera = makeFakeCamera();
const changeAnchor = jest.fn();

describe('Component: ProductTabs', () => {
  it('should render correctly', () => {
    renderTestApp(<ProductTabs product={mockCamera}/>, {});

    expect(screen.getByTestId('tabs')).toBeInTheDocument();
    expect(screen.getByText(mockCamera.category)).toBeInTheDocument();
  });

  it('should change anchor to features when user clicks on features button', async () => {
    renderTestApp(<ProductTabs product={mockCamera}/>, {});

    changeAnchor(Anchor.Features);
    expect(changeAnchor).toBeCalledTimes(1);
  });

  it('should change anchor to description when user clicks on description button', async () => {
    renderTestApp(<ProductTabs product={mockCamera}/>, {});

    changeAnchor(Anchor.Description);
    expect(changeAnchor).toBeCalledTimes(1);
  });
});
