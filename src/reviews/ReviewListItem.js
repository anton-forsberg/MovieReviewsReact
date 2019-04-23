import React from 'react';

/**
 * Component for displaying a single review
 */
function ReviewListItem(props) {
    const { review } = props;
    return (
        <>
            <div className="row">
                {
                    review.multimedia && 
                    <img alt={review.multimedia.type} src={review.multimedia.src}/>
                }
                <div className="flex">
                    <h2>{review.display_title}</h2>
                    <p><i>Published {review.publication_date}</i></p>
                    <p>{review.summary_short}</p>
                    <p>
                        <a href={review.link.url}>
                            <i class="fas fa-sign-out-alt"></i> Read the full movie review by {review.byline}
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default ReviewListItem;