import { createSelector } from 'reselect';
import { LoadingStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectReviews = (state: State) => state[NameSpace.Reviews].reviews;
const selectReviewsTotalCount = (state: State) => state[NameSpace.Reviews].reviewsTotalCount;
const selectReviewsLoadingStatus = (state: State) => state[NameSpace.Reviews].reviewsLoadingStatus;


const selectReviewPostingStatus = (state: State) => state[NameSpace.Reviews].reviewPostingStatus;

const reviewPostingStatusSelector = createSelector([
  selectReviewPostingStatus
], (status) => ({
  isReviewPostingStatusFulfilled: status === LoadingStatus.Fulfilled,
  isReviewPostingStatusPending: status === LoadingStatus.Pending,
  isReviewPostingStatusRejected: status === LoadingStatus.Rejected,
}));

const reviewsLoadingStatusSelector = createSelector([
  selectReviewsLoadingStatus
], (status) => ({
  isReviewsLoadingStatusFulfilled: status === LoadingStatus.Fulfilled,
  isReviewsLoadingStatusPending: status === LoadingStatus.Pending,
  isReviewsLoadingStatusRejected: status === LoadingStatus.Rejected,
}));

export {
  selectReviews,
  selectReviewsTotalCount,
  reviewPostingStatusSelector,
  reviewsLoadingStatusSelector
};
