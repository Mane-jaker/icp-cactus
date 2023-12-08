import Box from '@mui/system/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Balance() {
    return (
        <>        <Box
            sx={{
                display:"flex",
                color:"white",
                fontSize:"100%",
                    width:"160px",
                    height:"50px",
                    marginTop:"-1410px",
                    paddingLeft:"50px",
                    borderRadius: "15px",
                    background: "#160A35",
                    paddingRight:"10px",
                    alignItems:"center",
                    justifyContent:"center"
                                        
                }}

>
<Box ><AccountCircleIcon sx={{fontSize:"35px" , marginRight:"20px",}} /></Box>
<Box sx={{ marginRight:"50px",}}><h1>ManeBau</h1></Box>

        </Box>
        </>

    );
}

export default Balance;