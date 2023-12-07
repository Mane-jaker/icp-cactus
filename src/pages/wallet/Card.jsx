import Box from '@mui/system/Box';

function Card() {
    return (
        <>        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start', 
                minHeight: '100vh', 
                width: '100%', 
                backgroundColor: '#221741', 
                color:'white'
            }}
        >

<Box sx={{paddingRight:'300px' }}>
<img src="../src/pages/wallet/icp.png" alt="Not Found" />
</Box>
<Box sx={{paddingRight:'185px',marginTop:'-70px' }} ><h3>ICP </h3></Box>
<Box sx={{paddingRight:'120px',marginTop:'-30px'}} ><h3>0.00000 ICP </h3></Box>

<Box sx={{paddingLeft:'300px',marginTop:'-90px',fontSize:'13px'}} ><h1>$0.00</h1></Box>
<Box sx={{paddingLeft:'310px',marginTop:'-30px',fontSize:'10px',color:'#ABE76F'}} ><h1>3.34%</h1></Box>



        </Box>
        </>

    );
}

export default Card;