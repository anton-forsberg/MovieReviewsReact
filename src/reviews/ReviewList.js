import React from 'react';
import ReviewListItem from './ReviewListItem';

/**
 * Component for listing reviews
 */
function ReviewList(props) {
    const { reviews } = props;
    return (
        <ul className="review-list">
           {
               reviews.map((review, i) => {
                   return (
                       <li key={i}>
                            <ReviewListItem review={review}/>
                       </li>
                   )
               })
           }
        </ul>
    );
}

export default ReviewList;