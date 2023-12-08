import Box from '@mui/system/Box';
import Search from './pages/search/Search';
import { ConnectButton } from "@connect2ic/react";
import { ConnectDialog } from "@connect2ic/react"
import { useCanister } from "@connect2ic/react"
import { Button } from '@mui/material';

function App() {
  const [cat_backend, { loading, error }] = useCanister("cat_backend", {
    mode: "auto"
  });

  return (
    <Box
      sx={{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        bgcolor: 'rgba(22, 10, 53, 1)', 
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
}

export default App
