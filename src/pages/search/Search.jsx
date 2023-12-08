import BoxSearch from "./BoxSearch"
import Carousel from "./Carousel"
import { Box } from "@mui/system"
import HeaderProfile from "../profile/HeaderProfile"

function Search() {
    return (
        <>
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
                <HeaderProfile title={'Search'} />
                <Box sx={{height: '80px' }}/>
                <BoxSearch />
                <Carousel/>   
                <Carousel />
            </Box>
        </>
    )
}

export default Search