import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';

function Header() {
    return (
        <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start', // Centra el contenido verticalmente
                minHeight: '100vh', // Asegura que el contenedor ocupe toda la altura de la vista
                padding: 1,
                width:'100%'
            }}>               
<h1>Wallet</h1>
<Box sx={{alignItems:'left',paddingLeft:'20rem',marginTop:'-53px'}}><InfoIcon/>
</Box>
</Box> 
        </>
    );
}

export default Header;