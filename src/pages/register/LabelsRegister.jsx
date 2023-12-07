import TextField from '@mui/material/TextField';
import Box from '@mui/system/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material-next/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function LaberlsRegister() {

    const [nickname, setNickname] = useState('');
    const [accountType, setAccountType] = useState('');
    const [description, setDescription] = useState('');

      const handleNicknameChange = (event) => {
            setNickname(event.target.value);
        };

        const handleAccountTypeChange = (event) => {
            setAccountType(event.target.value);
        };

        const handleDescriptionChange = (event) => {
            setDescription(event.target.value);
        };

        const handleSubmit = () => {
            console.log('Nickname:', nickname);
            console.log('Account Type:', accountType);
            console.log('Description:', description);
        };

    return (  
        <>
            <TextField
                required
                id="outlined-required"
                label="NickName"    
                fullWidth
                onChange={handleNicknameChange}
                value={nickname}
                InputProps={{
                    style: {
                        color: "white", // Cambia 'red' al color que quieras para el texto
                        height: '80px',
                        borderRadius: '30px',
                        borderWidth:'5px',
                        backgroundColor:'#221741',
                    },
                }}
                sx={{
                    
                    '& label.Mui-required': {
                        color: '#A0AAB4',
                    },
                    '& label.Mui-focused': {
                        color: '#A0AAB4',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#221741', // Cambia 'green' al color que quieras para el borde
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#221741' , // Cambia 'blue' al color que quieras para el borde cuando el mouse esté encima
                            borderWidth: '2px',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ABE76F', // Cambia 'purple' al color que quieras para el borde cuando el TextField esté enfocado
                            borderWidth: '2px',
                        },
                    },
                }}
            />
            <Box sx={{height: '30px'}}></Box>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{color: '#A0AAB4'}}>Account type *</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={accountType}
                    label="Account type"
                    onChange={handleAccountTypeChange}
                    sx={{
                        borderRadius: '30px', // Cambia '10px' al radio que quieras para el borde
                        color: 'white', // Cambia 'red' al color que quieras para el texto
                        backgroundColor: '#221741', // Cambia 'blue' al color que quieras para el fondo
                        height:'80px',
                        '& .MuiOutlinedInput-notchedOutline': { // Esto es para el borde
                            borderColor: '#221741', // Cambia 'green' al color que quieras para el borde
                            borderWidth: '2px',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': { // Esto es para el borde cuando se pasa el mouse por encima
                            borderColor: '#221741', // Cambia 'green' al color que quieras para el borde
                                borderWidth: '2px',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { // Esto es para el borde cuando está enfocado
                            borderColor: '#ABE76F', // Cambia 'purple' al color que quieras para el borde cuando el TextField esté enfocado
                                borderWidth: '2px',
                        }
                    }}
                >
                    <MenuItem value={'User'}>User</MenuItem>
                    <MenuItem value={'Buiness'}>Buiness</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{height: '30px'}}></Box>
            <TextField
                required
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                fullWidth
                onChange={handleDescriptionChange}
                value={description}
                InputProps={{
                    style: {
                        color: "white", // Cambia 'red' al color que quieras para el texto
                        height: '150px',
                        borderRadius: '30px',
                        borderWidth:'5px',
                        backgroundColor:'#221741',
                    },
                }}
                sx={{
                    
                    '& label.Mui-required': {
                        color: '#A0AAB4',
                    },
                    '& label.Mui-focused': {
                        color: '#A0AAB4',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#221741', // Cambia 'green' al color que quieras para el borde
                            borderWidth: '2px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#221741' , // Cambia 'blue' al color que quieras para el borde cuando el mouse esté encima
                            borderWidth: '2px',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ABE76F', // Cambia 'purple' al color que quieras para el borde cuando el TextField esté enfocado
                            borderWidth: '2px',
                        },
                    },
                }}
            />
            <Box sx={{height: '10vh'}}/>
            <Button 
            onClick={handleSubmit}
            sx={{
            backgroundColor: '#221741',
            borderRadius: '30px',
            width: '100%',
            height: '70px',
            justifyContent: 'center'
            }}>
                 <Typography variant="h6" sx={{color: '#E6E0E9',  fontWeight: 'normal'}}>
                    Continue
                </Typography>
            </Button>
        </>
    );
}

export default LaberlsRegister;

