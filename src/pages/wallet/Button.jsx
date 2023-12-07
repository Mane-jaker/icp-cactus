import Box from '@mui/system/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material-next/Button';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
function Button2() {
    return (
        <>        
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '10vh', // Asegura que el contenedor ocupe toda la altura de la vista
            width: '100px', // Asegura que el contenedor ocupe todo el ancho de la vista
            color:'white',
            paddingRight:'180px',
}}>

<Button variant="contained" sx={{color: '#ABE76F',marginTop: '-700px',paddingRight: '80px',width:'1px',height:'6px'}}><AddCircleIcon sx={{fontSize:'5rem'}}/>

</Button>




<Button variant="contained" sx={{borderRadius: '50%',background:'#ABE76F',marginTop: '-43px',width: '68px',
height: '68px',marginLeft:'190px'}}><SendIcon sx={{fontSize:'2.5rem',color: 'black',paddingLeft:'10px'}}/></Button>

<Button variant="contained" sx={{color: '#ABE76F',marginTop: '-43px',paddingLeft: '440px',width:'1px',height:'6px'}}><SwapHorizontalCircleIcon sx={{fontSize:'5rem'}}/></Button>

</Box>



        </>

    );
}

export default Button2;