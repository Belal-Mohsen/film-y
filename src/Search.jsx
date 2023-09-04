import React, {useState} from "react";
import searchIcon from './search.svg';


const Search = ({searchMovie}) =>{
    const [searchTerm, setSearchTerm] = useState('');
    return(
        <div className='search'>
            <input 
            value= {searchTerm} 
            placeholder='Search for movies'
            onChange={(e) => {setSearchTerm(e.target.value)}}/>
            <img 
            src={searchIcon}
            alt = 'search'
            onClick={()=> {searchMovie(searchTerm)}}/>
            </div>
    );

}

export default Search;