import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Wallet from './pages/wallet/Wallet';
import Search from './pages/search/Search';
import Register from './pages/register/Register'
import SimpleBottomNavigation from './components/GlobalComponent/NavBar';
import { Box } from '@mui/system';

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        bgcolor: 'rgba(22, 10, 53, 1)', 
      }}>
         <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/wallet" element={<Wallet/>} />
            <Route path="/search" element={<Search/>} />
        </Routes>
        <SimpleBottomNavigation/>
      </Box>
      </BrowserRouter>
    </>
  );
}

export default App;

