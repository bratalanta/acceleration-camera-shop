import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {APIRoute, DEFAULT_PAGE, MAX_REVIEWS_COUNT_PER_PAGE, REVIEWS_SORTING_QUERY} from '../../../const';
import { makeFakeReview, makeFakeReviewPost } from '../../../tests/mocks/mocks';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/state';
import { fetchReviewsAction, postReviewAction } from './reviews-api';
import { TFetchReviewsActionPayload } from '../../../types/review';

const mockReviews = [makeFakeReview(), makeFakeReview(), makeFakeReview()];
const mockReview = makeFakeReview();
const mockReviewPost = makeFakeReviewPost();
const defaultPage = Number(DEFAULT_PAGE);
const mockID = 1;

describe('Reveiws API', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchReviewsAction when GET /cameras/id/reviews', async () => {
    const mockPayload: TFetchReviewsActionPayload = {
      id: mockID,
      limit: MAX_REVIEWS_COUNT_PER_PAGE,
      page: defaultPage
    };

    mockAPI
      .onGet(`${APIRoute.Cameras}/${mockID}${APIRoute.Reviews}?${REVIEWS_SORTING_QUERY}`, {
        params: {
          _limit: MAX_REVIEWS_COUNT_PER_PAGE,
          _page: defaultPage
        }
      })
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(mockPayload));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch postReviewAction  when POST /reviews', async () => {
    mockAPI
      .onPost(APIRoute.Reviews, mockReviewPost)
      .reply(200, mockReview);

    const store = mockStore();

    // await store.dispatch(postReviewAction(mockReviewPost));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type
    ]);
  });
});

