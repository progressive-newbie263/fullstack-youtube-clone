import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
  SearchFeed,
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail
} from './components';


/*
 design:
  + Thanh Navbar tren cung 
  + Duoi thanh navbar, phan noi dung/ main thi se chia thanh cac component trong:
*/
const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App