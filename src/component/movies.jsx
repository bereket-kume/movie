import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'
import Liked from './common/like';
import Pagination from './common/pagination';
import { Paginate } from './utils/paginate';
import Genre from './utils/Genre';
import { genres } from '../services/fakeGenreService';


class Movies extends Component {
    state =  {
        movies: getMovies(),
        currentPage:1,
        pageSize: 4
     } 
     handleDelte = movie =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies })
     }
     handleLike = movie =>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index]={...movies[index]};
        movies[index].liked= !movies[index].liked;
        this.setState({ movies });
    }
    handlePagechange= page =>{
        this.setState({currentPage: page})
    }

    render() { 
        const { length: count } = this.state.movies;
        const {pageSize, currentPage,movies:allMovie} = this.state;
        const movies = Paginate(allMovie,currentPage,pageSize);
    
        if(count === 0) 
            return <h1>there is no movies int the database</h1>
       else{
        return (
            <div className='row'>
                <div className="col-2 mt-5">
                <Genre items={genres} />
                </div>
                <div className="col">
                    
              <table className='table'>
                 <thead>
                     <tr>
                         <th>Title</th>
                         <th>Genre</th>
                         <th>Stock</th>
                         <th>Rate</th>
                         <th></th>
                         <th></th>
                     </tr>
                 </thead>
             <tbody>
                 {movies.map(movie =>(
                     <tr key={movie._id}>
                         <td>{movie.title}</td>
                         <td>{movie.genre.name}</td>
                         <td>{movie.numberInStock}</td>
                         <td>{movie.dailyRentalRate}</td>
                         <th>
                            <Liked liked = {movie.liked} onClick={() => this.handleLike(movie)}/>
                         </th>
                         <td><button onClick={() =>this.handleDelte(movie)} type="button" class="btn btn-danger">Delete</button>
     </td>
                     </tr>
                 ))}
             </tbody>
             </table>
             <Pagination 
             itemCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePagechange} />
                </div>
            
            </div>)
         }
       }
}
 
export default  Movies;