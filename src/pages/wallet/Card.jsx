import Box from '@mui/system/Box';

function Card2() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                minHeight: '100vh',
                width: '100%',
                backgroundColor: '#221741',
                color: 'white',
                mt: '10px', // Ajusta el marginTop según sea necesario
                fontFamily:"Roboto"
            }}
        >
            <Box sx={{ pr: '300px' }}>
                <img src="../src/pages/wallet/icp.png" alt="Not Found" />
            </Box>
            <Box sx={{ pr: '185px', mt: '-70px' }}>
                <h3>ICP </h3>
            </Box>
            <Box sx={{ pr: '120px', mt: '-30px' }}>
                <h3>0.00000  ICP </h3>
            </Box>
            <Box sx={{ pl: '300px', mt: '-90px', fontSize: '13px' }}>
                <h1>$0.00</h1>
            </Box>
            <Box sx={{ pl: '310px', mt: '-30px', fontSize: '10px', color: '#ABE76F' }}>
                <h1>3.34%</h1>
            </Box>
        </Box>
    );
}

export default Card2;
