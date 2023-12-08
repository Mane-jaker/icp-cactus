import Box from '@mui/system/Box';
import ButtonNavigator from './ButtonNavigator';
import HeaderProfile from './HeaderProfile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

function Profile() {
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
            <Box sx={{ marginBottom: '20px', marginTop: '120px'}}/>
            <ButtonNavigator IconComponent={AccountCircleIcon} text="Account" />
            <Box sx={{ marginBottom: '20px'}}/>
            <ButtonNavigator IconComponent={NotificationsIcon} text="Notifications" />
            <Box sx={{ marginBottom: '20px'}}/>
            <ButtonNavigator IconComponent={HelpIcon} text="Support" />
        </Box>
    );
}

export default Profile;