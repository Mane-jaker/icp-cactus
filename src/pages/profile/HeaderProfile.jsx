import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

function HeaderProfile() {
    return (  
        <>
            <Box sx={{
                display: 'flex',
                backgroundColor: '#221741',
                borderRadius: '10px',
                width: '107.8%',
                height: '120px',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
            }}>
                <Typography variant="h5" sx={{color: '#E6E0E9', fontWeight: 'bold'}}>
                    Profile
                </Typography>
            </Box>
        </>
    );
}

export default HeaderProfile;