import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCat, setSelectedCat }) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflowY: 'auto',
        height: {
          sx: 'auto',
          md: '95%'
        },
        flexDirection: {
          md: 'column',
          sm: 'row'
        }
      }}
    >
      {/* trả lại thẳng ngoặc tròn ở đây. 
        Ta chỉ trả về 1 biểu thức đơn. k cần logic 
      */}
      {categories.map((category) => (
        <button 
          className='category-btn'
          onClick={() => setSelectedCat(category.name)}
          style={{ background: category.name === selectedCat && '#fc0000', color: 'white' }}
          key={category.name}
        >
          {/* ICON */}
          <span style={{ color: category.name === selectedCat ? 'white' : 'darkred', marginRight: '15px' }}>
            {category.icon}
          </span>

          {/* Ten cua tab */}
          <span style={{ opacity: category.name === selectedCat ? '1' : '0.6'}}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar