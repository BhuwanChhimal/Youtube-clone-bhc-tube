import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

// import {logo} from '../utils/constants'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack 
    direction= 'row' 
    alignItems="center" p={2} 
    sx={{position:'sticky', background: '#000' ,top: 0 , justifyContent: 'space-between'}}
  >
    <Link 
      to="/"
      style={{display: 'flex', alignItems: 'center'}}
    >
      <img src={logo} alt="logo" height={45} />
      <Typography color='#fff'
        sx={{
          ml:2,
          fontSize: '25px',
          display: {md: 'block' ,xs: 'none'},
          fontFamily: 'sans-serif'
        }}

      > 
        Bh-c Tube
      </Typography>
    </Link>
    <SearchBar/>
  </Stack>
)
   

  
export default Navbar