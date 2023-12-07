import Box from '@mui/system/Box';
import Search from './pages/search/Search';



function App() {

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
      <Search />
    </Box>
  )
}

export default App
