import { useParams } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import {TReviewPost} from '../../../../../../types/review';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { postReviewAction } from '../../../../../../store/api-actions/reviews-api/reviews-api';
import cn from 'classnames';
import ReviewRateBar from './review-rate-bar.tsx/review-rate-bar';
import { COMMENT_MIN_LENGTH } from '../../../../../../const';
import { selectCurrentReviewPage } from '../../../../../../store/slices/app-slice/selectors';

type TReviewPostKey = keyof TReviewPost;

function ReviewForm() {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const currentPage = useAppSelector(selectCurrentReviewPage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TReviewPost>({
    mode: 'all',
    defaultValues: {
      cameraId: Number(id),
    }
  });

  const getFormFieldCn = (inputName: TReviewPostKey, firstClassName?: string) => {
    if (firstClassName) {
      return cn(
        `${firstClassName} form-review__item`,
        {
          'is-invalid': errors[inputName]
        }
      );
    }

    return cn(
      'custom-input form-review__item',
      {
        'is-invalid': errors[inputName]
      }
    );
  };

  const sendData = (data: TReviewPost) => {
    const formData = {
      ...data,
      rating: Number(data.rating),
      currentPage,
    };

    dispatch(postReviewAction(formData));
  };

  return (
    <div className="form-review" data-testid='form'>
      <form onSubmit={handleSubmit(sendData)}>
        <div className="form-review__rate">
          <ReviewRateBar
            getRatingFieldCn={() => getFormFieldCn('rating', 'rate')}
            ratingRegester={
              {...register('rating', {
                required: true,
              })}
            }
          />
          <div className={getFormFieldCn('userName')}>
            <label>
              <span className="custom-input__label">Ваше имя
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <input
                autoFocus
                type="text"
                placeholder="Введите ваше имя"
                {...register('userName', {
                  required: true
                })}
              />
            </label>
            {errors?.userName && <p className="custom-input__error">Нужно указать имя</p>}
          </div>
          <div className={getFormFieldCn('advantage')}>
            <label>
              <span className="custom-input__label">Достоинства
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Основные преимущества товара"
                {...register('advantage', {
                  required: true,
                })}
              />
            </label>
            {errors.advantage && <p className="custom-input__error">Нужно указать достоинства</p>}
          </div>
          <div className={getFormFieldCn('disadvantage')}>
            <label>
              <span className="custom-input__label">Недостатки
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Главные недостатки товара"
                {...register('disadvantage', {
                  required: true
                })}
              />
            </label>
            {errors.disadvantage && <p className="custom-input__error">Нужно указать недостатки</p>}
          </div>
          <div className={getFormFieldCn('review', 'custom-textarea')}>
            <label>
              <span className="custom-textarea__label">Комментарий
                <svg width={9} height={9} aria-hidden="true">
                  <use xlinkHref="#icon-snowflake" />
                </svg>
              </span>
              <textarea
                placeholder="Поделитесь своим опытом покупки"
                defaultValue={''}
                {...register('review', {
                  required: true,
                  minLength: {
                    value: COMMENT_MIN_LENGTH,
                    message: `Не менее ${COMMENT_MIN_LENGTH} символов`
                  }
                })}
              />
            </label>
            {errors.review &&
            <div className="custom-textarea__error">
              {errors.review.message ? errors.review.message : 'Нужно добавить комментарий'}
            </div>}
          </div>
        </div>
        <button data-testid='submit' className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
      </form>
    </div>
  );
}

export default ReviewForm;
