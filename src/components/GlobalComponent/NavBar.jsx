import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { Person, Search, WalletOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
  
    return (
      <Box sx={{ width: '108%', position: 'absolute', bottom: -61 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{height: '80px', backgroundColor: '#221741'}}
        >
          <BottomNavigationAction component={Link} to="/wallet" sx={{
              color:'#ABE76F',
              '&.Mui-selected': {
                  color: '#ABE76F',
                  '& .MuiSvgIcon-root': {
                    color: '#ABE76F',
                  },
              }
          }} label="Wallet" icon={<WalletOutlined sx={{color: '#ABE76F'}}/>} />
          <BottomNavigationAction component={Link} to="/search" sx={{
              color:'#ABE76F',
              '&.Mui-selected': {
                  color: '#ABE76F',
                  '& .MuiSvgIcon-root': {
                    color: '#ABE76F',
                  },
              }
          }} label="Search" icon={<Search sx={{color: '#ABE76F'}}/>} />
          <BottomNavigationAction component={Link} to="/profile" sx={{
              color:'#ABE76F',
              '&.Mui-selected': {
                  color: '#ABE76F',
                  '& .MuiSvgIcon-root': {
                    color: '#ABE76F',
                  },
              }
          }} label="Profile" icon={<Person sx={{color: '#ABE76F'}}/>} />
        </BottomNavigation>
      </Box>
    );
  }