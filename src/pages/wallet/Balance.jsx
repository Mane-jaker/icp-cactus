import Box from '@mui/system/Box';
import PropTypes from 'prop-types';

function Balance({ amount }) {
    // Si amount es undefined, asigna un valor predeterminado de 100
    const saldo = amount || 100;

    return (
        <Box
            sx={{
                color: 'white',
                fontSize: '100%',
                width: '200px',
                height: '600',
                mt: '-1420px',
                paddingLeft: '50px',
                fontFamily: 'Roboto',
            }}
        >
            <h1>{`$${saldo.toFixed(2)} MXN`}</h1>
        </Box>
    );
}

Balance.propTypes = {
    amount: PropTypes.number, // Ahora, amount no es requerido
};

export default Balance;
