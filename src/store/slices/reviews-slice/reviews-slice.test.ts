import { LoadingStatus } from '../../../const';
import { makeFakeReview } from '../../../tests/mocks/mocks';
import { fetchReviewsAction, postReviewAction } from '../../api-actions/reviews-api/reviews-api';
import { reviewsSlice, TReviewsSliceState } from './reviews-slice';

const mockReviews = [makeFakeReview()];
const mockReviewsTotalCount = 10;
const mockReview = makeFakeReview();

describe('Reducer: reviewsSlice', () => {
  let state: TReviewsSliceState;

  beforeEach(() => {
    state = {
      reviews: [mockReview],
      reviewPostingStatus: LoadingStatus.Idle,
      reviewsLoadingStatus: LoadingStatus.Idle,
      reviewsTotalCount: 0
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(reviewsSlice.reducer(state, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchReviewsAction test', () => {
    it('should push reviews with given reviews, set reviewsTotalCount with given dataTotalCount, update reviewsLoadingStatus to fulfilled if fetchReviewsAction is fulfilled',
      () => {
        expect(reviewsSlice.reducer(state, {
          payload: {
            data: mockReviews,
            dataTotalCount: mockReviewsTotalCount
          },
          type: fetchReviewsAction.fulfilled.type
        }))
          .toEqual({
            ...state,
            reviews: [...state.reviews, ...mockReviews],
            reviewsTotalCount: mockReviewsTotalCount,
            reviewsLoadingStatus: LoadingStatus.Fulfilled
          });
      });

    it('should replace reviews with given reviews, set reviewsTotalCount with given dataTotalCount, update reviewsLoadingStatus to fulfilled if fetchReviewsAction is fulfilled',
      () => {
        expect(reviewsSlice.reducer(state, {
          payload: {
            data: mockReviews,
            dataTotalCount: mockReviewsTotalCount,
            replace: true,
          },
          type: fetchReviewsAction.fulfilled.type
        }))
          .toEqual({
            ...state,
            reviews: mockReviews,
            reviewsTotalCount: mockReviewsTotalCount,
            reviewsLoadingStatus: LoadingStatus.Fulfilled
          });
      });

    it('should update reviewsLoadingStatus to pending if fetchReviewsAction is pending',
      () => {
        expect(reviewsSlice.reducer(state, {
          type: fetchReviewsAction.pending.type
        }))
          .toEqual({
            ...state,
            reviewsLoadingStatus: LoadingStatus.Pending
          });
      });

    it('should update reviewsLoadingStatus to rejected if fetchReviewsAction is rejected',
      () => {
        expect(reviewsSlice.reducer(state, {
          type: fetchReviewsAction.rejected.type
        }))
          .toEqual({
            ...state,
            reviewsLoadingStatus: LoadingStatus.Rejected
          });
      });
  });

  describe('postReviewAction test', () => {
    it('should update postingStatus to "pending" if postReviewAction is pending', () => {
      expect(reviewsSlice.reducer(state, {type: postReviewAction.pending.type}))
        .toEqual({
          ...state,
          reviewPostingStatus: LoadingStatus.Pending
        });
    });

    it('should update postingStatus to "rejected" if postReviewAction is rejected', () => {
      expect(reviewsSlice.reducer(state, {type: postReviewAction.rejected.type}))
        .toEqual({
          ...state,
          reviewPostingStatus: LoadingStatus.Rejected
        });
    });

    it('should update postingStatus to "fulfilled" if postReviewAction is fulfilled', () => {
      expect(reviewsSlice.reducer(state, {type: postReviewAction.fulfilled.type}))
        .toEqual({
          ...state,
          reviewPostingStatus: LoadingStatus.Fulfilled
        });
    });
  });
});
