import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'; //các item để tạo thẻ video
import { CheckCircle } from '@mui/icons-material'; //icon xac nhan.
import { 
  demoThumbnailUrl, 
  demoVideoTitle, 
  demoVideoUrl,
  demoChannelTitle,
  demoChannelUrl 
} from '../../utils/constants';

const VideoCard = ({ video: {id: { videoId }, snippet} }) => {
  //cardMedia sẽ show ảnh thumbnail của các vid từ api.
  //fix: Card md 320px -> 240px, CardMedia 358px -> 240px
  return (
    <Card sx={{ width: { xs:'100%', sm: '358px', md:'320px', lg: '400px', xl:'312px' }, boxShadow: 'none', borderRadius: 0 }}> 
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title} 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: {xs: '100%', sm: '358px', md: '320px', lg: '400px'}, height: 180}} 
        />
      </Link>

      {/* 
        noi dung video (ten video, ten channel, ...) 
        slice de gioi han do dai hien thi cua title cua snippet.
      */}
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color='white'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ ml: '5px', color: 'gray', fontSize: 12 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard