import React, { PureComponent } from 'react';

/**
 * Component used to perform searches
 */
class ReviewSearch extends PureComponent {
    /**
     * Debounce the search input to prevent api flooding
     */
    debounceSearch = query => {
        if (this.timeout) 
            clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.handleSearch(query);
            this.timeout = undefined;
        }, 300);
    }

    render(){
        return (
            <input type="text" placeholder="Search reviews..." onChange={e => this.debounceSearch(e.target.value)} />
        );
    }
}

export default ReviewSearch;