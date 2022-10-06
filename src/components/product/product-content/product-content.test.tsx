import { screen } from '@testing-library/react';
import 'react-intersection-observer/test-utils';
import { NameSpace } from '../../../const';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../tests/mocks/mocks';
import ProductContent from './product-content';


const mockState = {
  [NameSpace.Cameras]: {
    similarCameras: [],
    camera: makeFakeCamera()
  }
};

const scrollToTop = jest.fn();

describe('Component: ProductContent', () => {
  it('should render correctly', () => {
    renderTestApp(<ProductContent />, {
      initialState: mockState
    });

    scrollToTop('smooth');

    expect(scrollToTop).toBeCalledTimes(1);
    expect(screen.queryByTestId('similar')).not.toBeInTheDocument();
  });
});
