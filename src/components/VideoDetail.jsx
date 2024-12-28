import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos, Loader } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [videos, setVideos] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if(!videoDetails?.snippet) return <Loader />;

  const { 
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount } 
  } = videoDetails; 

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        {/* main video (video phat') */}
        <Box flex={1}>
          <Box sx={{ width: '100%', top: '86px', position: 'sticky' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} classsName="react-player" controls />
            
            <Typography color="white" variant='h5' fontWeight="bold" p={2}>
              {title}
            </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: 'white' }} px={2} py={1}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} sx={{ color: 'white' }}>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>   
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
          
        {/* danh sach cac vids tuong tu */}
        <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail