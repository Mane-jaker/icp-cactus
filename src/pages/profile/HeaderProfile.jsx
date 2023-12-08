import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function HeaderProfile({title}) {
    return (  
        <>
            <Box sx={{
                position: 'absolute', top: 1,
                display: 'flex',
                backgroundColor: '#221741',
                borderRadius: '10px',
                width: '108%',
                height: '120px',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
                borderTopLeftRadius: '0px',
                borderTopRightRadius: '0px',
            }}>
                <Typography variant="h5" sx={{color: '#E6E0E9', fontWeight: 'bold'}}>
                    {title}
                </Typography>
            </Box>
        </>
    );
}

HeaderProfile.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default HeaderProfile;