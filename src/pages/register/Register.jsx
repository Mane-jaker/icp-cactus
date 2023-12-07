import Box from '@mui/system/Box';
import HeaderProfile from '../profile/HeaderProfile';
import LaberlsRegister from './LabelsRegister';

function Register() {
    return (  
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start', // Centra el contenido verticalmente
                minHeight: '100vh', // Asegura que el contenedor ocupe toda la altura de la vista
                width: '100%', // Asegura que el contenedor ocupe todo el ancho de la vista
                padding: 2,
                backgroundColor: '#160A35', // Puedes cambiar el color de fondo
                color: 'white', // Puedes cambiar el color del texto
            }}
        >
            <HeaderProfile/>
            <Box sx={{height: '50px'}}/>
            <LaberlsRegister/>

        </Box>
    );
}

export default Register;