import { createSelector } from 'reselect';
import { LoadingStatus, NameSpace } from '../../../const';
import { State } from '../../../types/state';

const selectReviews = (state: State) => state[NameSpace.Reviews].reviews;
const selectReviewsTotalCount = (state: State) => state[NameSpace.Reviews].reviewsTotalCount;

const selectReviewPostingStatus = (state: State) => state[NameSpace.Reviews].reviewPostingStatus;

const reviewPostingStatusSelector = createSelector([
  selectReviewPostingStatus
], (status) => ({
  isReviewPostingStatusFulfilled: status === LoadingStatus.Fulfilled,
  isReviewPostingStatusPending: status === LoadingStatus.Pending,
  isReviewPostingStatusRejected: status === LoadingStatus.Rejected,
}));

export {
  selectReviews,
  selectReviewsTotalCount,
  reviewPostingStatusSelector
};
