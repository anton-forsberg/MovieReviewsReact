import React, { Component } from 'react';
import { searchReviews } from './ReviewApi';
import ReviewSearch from './ReviewSearch';
import ReviewList from './ReviewList';
import './Reviews.scss';

/**
 * Reviews feature module component
 */
class Reviews extends Component {
    state = {
        reviews: []
    }

    /**
     * Loads the 20 latest reviews based on the supplied query parameter (disregarded if not set)
     * @param query search term
     */
    getReviews = query => {
        this.page = 0;
        this.query = query;

        searchReviews(query).then(reviews => {
            this.setState({ reviews: reviews });
        });
    }

    /**
     * Load +20 more reviews
     */
    loadMoreReviews = () => {
        searchReviews(this.query, ++this.page).then(reviews => {
            this.setState({ reviews: this.state.reviews.concat(reviews) });
        });
    }

    componentDidMount() {
        this.getReviews();
    }

    render(){
        const { reviews } = this.state;

        return (
            <div class="reviews">
                <header>
                    <ReviewSearch handleSearch={this.getReviews}/>
                </header>
                {
                    reviews.length === 0 &&
                    <p>No reviews found</p>
                }
                {
                    reviews.length > 0 &&
                    <>
                        <h1>Movie Reviews</h1>
                        <ReviewList reviews={reviews}/>
                        {   
                            (this.page + 1) * 20 === reviews.length &&
                            <div className="show-more" onClick={this.loadMoreReviews}><i class="fas fa-angle-down"></i> More</div>
                        }
                    </>
                }
            </div>
        );
    }
}

export default Reviews;