import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const selectReviews = (state: State) => state[NameSpace.Reviews].reviews;
export const selectPostingStatus = (state: State) => state[NameSpace.Reviews].postingStatus;

// export const getLimitedSortedReviews = createSelector(
//   [selectReviews],
//   (reviews) => ({
//     limitedSortedReviews: [...reviews].sort(sortReviewsByDate).slice(0, REVIEWS_LIMIT)
//   }));

// export const getPostingStatus = createSelector(
//   [selectPostingStatus],
//   (status) => ({
//     isPostingStatusFulfilled: status === LoadingStatus.Fulfilled,
//     isPostingStatusPending: status === LoadingStatus.Pending,
//     isPostingStatusRejected: status === LoadingStatus.Rejected,
//   }));
