import Box from '@mui/system/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profile() {
    return (
        <Box
            sx={{
                display: "flex",
                color: "white",
                fontSize: "13px",
                width: "160px",
                height: "50px",
                mt: "-50px", // Ajusta el marginTop según sea necesario
                pl: "50px", // Utiliza pl en lugar de paddingLeft
                borderRadius: "15px",
                background: "#160A35",
                color: "#ABE76F",
                pr: "10px", // Utiliza pr en lugar de paddingRight
                alignItems: "center",
                justifyContent: "center",
                fontFamily:"Roboto"            }}
        >
            <Box sx={{ mr: "20px" }}>
                <AccountCircleIcon sx={{ fontSize: "35px" }} />
            </Box>
            <Box sx={{ mr: "50px" }}>
                <h1>ManeBau</h1>
            </Box>
        </Box>
    );
}

export default Profile;
