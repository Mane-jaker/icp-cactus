import { Search } from "@mui/icons-material"
import { Box, TextField } from "@mui/material"
import { InputAdornment } from "@mui/material"


function BoxSearch() {
    return (
        <Box sx={{
            display: 'flex', // Utiliza flexbox
            alignItems: 'center', // Centra los elementos verticalmente
            justifyContent: 'center', // Centra los elementos horizontalmente
            height: '15vh',
            width: '100%',
            background: '#221741'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TextField
                    variant="outlined"
                    sx={{
                        width: '35ch',
                        borderRadius: '50px', // Hace que el TextField sea redondeado
                        '& fieldset': {
                            borderRadius: '50px', // Hace que el borde del TextField sea redondeado
                        },
                        '& input': { // Cambia el color del texto
                            color: '#ABE76F',
                        },
                    }}
                    InputProps={{
                        endAdornment: ( // Mueve el icono a la derecha
                            <InputAdornment position="end">
                                <Search sx={{ color: '#ABE76F' }} /> {/* Cambia el color del icono */}
                            </InputAdornment>
                        ),
                    }}
                    InputLabelProps={{
                        sx: { color: '#ABE76F' }, // Cambia el color del label
                    }}
                    label='Search'
                />
            </Box>
        </Box>
    )
}

export default BoxSearch