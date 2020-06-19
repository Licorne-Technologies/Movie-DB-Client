import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieCard from './MovieCard'

class PopularMovies extends Component {




    render() {
        const { movies } = this.props;

        return (
            <>

                {
                    movies.map((movie, index) =>
                        <MovieCard movie={movie} key={movie.id} canDelete={false} onWatchlist={false} />
                    )
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isInitialLoading: state.popularMovies.isInitialLoading,
    error: state.popularMovies.error,
    movies: state.popularMovies.movies
});

export default connect(mapStateToProps, {})(PopularMovies)

