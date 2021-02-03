import React from 'react';
import '../containers/App.css';

const SearchBox = ({searchfield,searchChange}) => {
    return (
        <>
            <div className='tc'>
                <input type="text" name="search" 
                className="inputsearch" placeholder="search"
                onChange={searchChange} />
            </div>
        </>)
}

export default SearchBox;