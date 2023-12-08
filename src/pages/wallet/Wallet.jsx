import Box from '@mui/system/Box';
import Header2 from './Header';
import Button from './Button';
import Card from './Card'
import Balance from './Balance';
import Profile from "./Profile"

function Wallet() {
    return (
        <>        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start', // Centra el contenido verticalmente
                minHeight: '100vh', // Asegura que el contenedor ocupe toda la altura de la vista
                width: '108%', // Asegura que el contenedor ocupe todo el ancho de la vista
                backgroundColor: '#221741', // Puedes cambiar el color de fondo
                color:'white',
                overflow: 'hidden', 
                fontFamily:"Roboto"

            }}
        >


    <Header2/>
    <Box sx={{paddingTop:"80px"}} ><Button/></Box>

    <Box sx={{color:'white',fontSize:'30px',marginTop:'-770px',paddingRight:'250px' , fontFamily:"Roboto"}}>< h6 >Deposit</h6></Box>
    <Box sx={{color:'white',fontSize:'30px',marginTop:'-114px',marginLeft:'7px',fontFamily:"Roboto"}}><h6>Send</h6></Box>
    <Box sx={{color:'white',fontSize:'30px',marginTop:'-117px',marginLeft:'240px',fontFamily:"Roboto"}}><h6>Swap</h6></Box>
    <Box sx={{color:'white',fontSize:'13px',marginTop:'20px',paddingRight:'250px',fontFamily:"Roboto"}}><h1>Tokens</h1></Box>
    <Card/>
    <Box sx={{marginTop:'-830px'}}><Card/></Box>
    <Box sx={{marginTop:'-830px'}}><Card/></Box>

<Box sx={{marginTop:"-20px"}}><Balance/></Box>
<Box sx={{marginTop:"-1450px"}}><Profile/></Box>



        </Box>
        </>

    );
}

export default Wallet;