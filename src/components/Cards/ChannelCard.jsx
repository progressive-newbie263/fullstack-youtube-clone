import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../../utils/constants';

/*
  khi chỉnh sửa thông số cho channelCard thì cả channel pic (bên view channel chi tiết)
  cung bị chỉnh sửa theo. Để đảm bảo khả năng tái sử dụng của component thì làm như sau:

  -truyền thuộc tính độc nhất (Ví dụ, chỉ có 1 bên cần thay đổi màu. Truyền props của màu
  vào component mẹ. Tức là, nếu ko liệt kê props ấy vào thì component sẽ ko có thuộc tính trên)
*/
const ChannelCard = ({ channelDetail, marginTop }) => {

  return (
    <Box sx={{ 
      boxShadow: 'none', 
      borderRadius: '20px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      width: {xs: '356px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop: marginTop, 
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture } 
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid white' }}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ ml: '5px', color: 'gray', fontSize: 14 }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant='subtitle2'>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard