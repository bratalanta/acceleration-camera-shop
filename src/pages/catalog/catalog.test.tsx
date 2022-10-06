import { screen } from '@testing-library/react';
import { NameSpace } from '../../const';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../tests/mocks/mocks';
import Catalog from './catalog';

const mockState = {
  [NameSpace.Cameras]: {
    cameras: [makeFakeCamera()],
    camera: makeFakeCamera(),
    camerasTotalCount: 1
  }
};

describe('Component: Catalog', () => {
  it('should render correctly', async() => {
    renderTestApp(<Catalog />, {
      initialState: mockState
    });

    expect(await screen.findByTestId('catalog')).toBeInTheDocument();
  });
});
