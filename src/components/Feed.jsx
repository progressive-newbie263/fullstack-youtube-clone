import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

/*
  - nhiệm vụ: feed gồm thanh sidebar (trái) + area video feed
  - Tag Stack như 1 div chứa các div con bên trong nó
  - Tag Box 
  - Tag Typography. Nó có vai trò để xử lí các thẻ p hoặc header hoặc div...
  (những cái liên quan đến nhập xuất dữ liệu chữ.)
*/
const Feed = () => {
  const [selectedCat, setSelectedCat] = useState("New");
  const [videos, setVideos] = useState([]); //video goc la 1 chuoi trong / empty array

  useEffect(() => {
    setVideos(null);
     
    fetchFromAPI(`search?part=snippet&q=${selectedCat}`).then((data) => setVideos(data.items));
  }, [selectedCat]); //selectedCat đặt trong này để khi reload page (tức khi đổi trang), nó tự động chuyển hoá.

  //thanh sidebar cho size small -> display theo hang. 
  //thanh sidebar cho size medium tro l -> display theo cot.
  return (
    <Stack sx={{ flexDirection: {
      sx: 'column',
      md: 'row'
    }}}>
      <Box sx={{
        height: { sx: 'auto', md: '92vh'},
        borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 2}
      }}>
        <Sidebar 
          selectedCat={selectedCat}
          setSelectedCat={setSelectedCat}
        />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
          Copyright 2024 JackFrost
        </Typography>
      </Box>

      {/* video feed */}
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          {selectedCat} <span style={{ color: '#fc0000' }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed