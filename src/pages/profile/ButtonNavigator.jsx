import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material-next/Button';
import Box from '@mui/system/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ButtonNavigator({ IconComponent, text }) {
    const handlePress = () => {
        console.log('Botón presionado!');
    };

    return (
        <Button onClick={handlePress} sx={{
            backgroundColor: '#221741',
            borderRadius: '10px',
            width: '96%',
            height: '80px',
            justifyContent: 'space-between'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center'}}>
                <IconComponent sx={{ fontSize: '42px', marginRight: '20px'}}/>
                <Typography variant="h6" sx={{color: '#E6E0E9',  fontWeight: 'normal'}}>
                    {text}
                </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ fontSize: '20px' }}/>
        </Button>
    );
}

ButtonNavigator.propTypes = {
    IconComponent: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
};

export default ButtonNavigator;
