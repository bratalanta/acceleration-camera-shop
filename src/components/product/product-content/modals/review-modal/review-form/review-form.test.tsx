import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { COMMENT_MIN_LENGTH } from '../../../../../../const';
import { createAPI } from '../../../../../../services/api';
import { renderTestApp } from '../../../../../../tests/helpers/render-test-app';
import ReviewForm from './review-form';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    renderTestApp(<ReviewForm />, {});

    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByTestId('rate-bar')).toBeInTheDocument();
    expect(screen.getAllByTestId('rate-bar-input')).toHaveLength(5);
  });

  it('should display errors', async () => {
    renderTestApp(<ReviewForm />, {});

    await userEvent.click(screen.getByTestId('submit'));
    await userEvent.type(screen.getByPlaceholderText(/Поделитесь своим опытом покупки/i), 'test');

    expect(screen.getByText(`Не менее ${COMMENT_MIN_LENGTH} символов`)).toBeInTheDocument();
    expect(screen.getByText(/Нужно указать достоинства/i)).toBeInTheDocument();
    expect(screen.getByText(/Нужно указать имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Нужно указать недостатки/i)).toBeInTheDocument();
    expect(screen.getByText(/Нужно оценить товар/i)).toBeInTheDocument();
  });

  it('should not display errors', async () => {
    renderTestApp(<ReviewForm />, {});

    await userEvent.type(screen.getByPlaceholderText(/Введите ваше имя/i), 'test');
    await userEvent.type(screen.getByPlaceholderText(/Главные недостатки товара/i), 'test');
    await userEvent.type(screen.getByPlaceholderText(/Основные преимущества товара/i), 'test');
    await userEvent.type(screen.getByPlaceholderText(/Поделитесь своим опытом покупки/i), 'test1');
    await userEvent.click(screen.getByTestId('submit'));

    expect(screen.queryByText(`Не менее ${COMMENT_MIN_LENGTH} символов`)).not.toBeInTheDocument();
    expect(screen.queryByText(/Нужно указать достоинства/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Нужно указать имя/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Нужно указать недостатки/i)).not.toBeInTheDocument();
  });

  it('should dispatch postReveiwAction', async () => {
    renderTestApp(<ReviewForm />, {
      mockStore: store
    });

    await userEvent.type(screen.getByPlaceholderText(/Введите ваше имя/i), 'test');
    await userEvent.type(screen.getByPlaceholderText(/Главные недостатки товара/i), 'test');
    await userEvent.type(screen.getByPlaceholderText(/Основные преимущества товара/i), 'test');
    await userEvent.type(screen.getByPlaceholderText(/Поделитесь своим опытом покупки/i), 'test1');
    await userEvent.click(screen.getAllByTestId('rate-bar-input')[0]);
    await userEvent.click(screen.getByTestId('submit'));

    const [action] = store.getActions();
    expect(action.type).toBe('reviews/postReview/pending');
  });
});
