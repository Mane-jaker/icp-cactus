import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Wallet from './pages/wallet/Wallet';
import Search from './pages/search/Search';
<<<<<<< HEAD
import { ConnectButton } from "@connect2ic/react";
import { ConnectDialog } from "@connect2ic/react"
import { useCanister } from "@connect2ic/react"
import { Button } from '@mui/material';

function App() {
  const [cat_backend, { loading, error }] = useCanister("cat_backend", {
    mode: "auto"
  });

=======
import Register from './pages/register/Register'
import SimpleBottomNavigation from './components/GlobalComponent/NavBar';
import { Box } from '@mui/system';

function App() {
>>>>>>> 22ccf3592d5d3b29a9a17b7cb62ac11e349a24a0
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
<<<<<<< HEAD
      }}
    >
      <Search/>
      <ConnectButton
      dark={false}
      onConnect={ async () => {
        const result = await cat_backend.whaomi();
        console.log(cat_backend);
        console.log(result);
      }}
      onDisconnect={async () => {
        const result = await cat_backend.whaomi();
        console.log(result);
      }}
    />
    <ConnectDialog dark={false} />
    <Button onClick={async () => {
      const result = await cat_backend.whaomi();
      console.log(result);
    }}>papoi</Button>
    </Box>
  )
=======
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
>>>>>>> 22ccf3592d5d3b29a9a17b7cb62ac11e349a24a0
}

export default App;

