import { Search } from "@mui/icons-material"
import { Box, Button, TextField } from "@mui/material"
import { InputAdornment } from "@mui/material"



function BoxSearch() {
    return (
        <>
            <Box sx={{
                display: 'flex', // Utiliza flexbox
                alignItems: 'center', // Centra los elementos verticalmente
                justifyContent: 'center', // Centra los elementos horizontalmente
                height: '8vh',
                width: '107%',
                background: '#221741',
                paddingTop: '40px'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:'100%'}}>
                    <TextField
                        variant="outlined"
                        sx={{
                            backgroundColor:'#160A35',
                            width: '85%',
                            height: '60px',
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
            <Box
                sx={{
                    width: '107%',
                    height: '8vh',
                    background: '#221741',
                    borderBottomLeftRadius: '35px', // Redondea el borde inferior izquierdo
                    borderBottomRightRadius: '35px',
                    display: 'flex', // Habilita Flexbox
                    justifyContent: 'center', // Alinea los elementos con un espacio alrededor
                    alignItems: 'center', // Centra los elementos verticalmente
                    marginBottom: '20px',
                    paddingBottom: '20px',
                }}
            >
                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        borderRadius: '20px',
                        background: '#3E2B7B',
                        width: '10%'
                    }}
                >
                    All
                </Button>

                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        width: '25%',
                        borderRadius: '20px',
                        background: '#3E2B7B',
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}
                >
                    Persons

                </Button>

                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        width: '25%',
                        borderRadius: '20px',
                        background: '#3E2B7B',
                    }}
                >
                    Business

                </Button>

            </Box>
        </>
    )
}

export default BoxSearch