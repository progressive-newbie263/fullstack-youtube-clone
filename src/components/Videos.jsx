import React from 'react';
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

const Videos = ({ videos }) => {
  //console.log(videos); //worked, 50 obj
  //THÊM TRƯỜNG HỢP NÀY VÀO (IF !VIDEOS). KTRA XEM CÓ NULL KO ?
  if (!videos) {
    return <div>No videos found</div>;
  }

  return (
    <Stack direction="row" flexWrap="wrap" alignItems="start" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        //check nếu item có id và id trỏ tới video id thì nó là video
        //nếu ko thì nó là channel/ user.
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos