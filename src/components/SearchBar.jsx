//hook useNavigate trong react-router-dom dung de di chuyen giua cac router 
// ma khong can <Link> va <NavLink>
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material'; //icon 'kinh lup'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }, //only display margin-right: 5px on small devices.
        //cursor: 'pointer'
      }}
    >
      <input 
        className='search-bar' 
        placeholder='Search for video...' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton type="submit" sx={{ p: '10px', color: 'red' }} aria-label='search' > 
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar