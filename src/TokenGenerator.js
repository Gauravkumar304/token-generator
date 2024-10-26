import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';


const TokenGenerator = () => {
    const [blueTokens, setBlueTokens] = useState([]);
    const [redTokens, setRedTokens] = useState([]);
    const [formData, setFormData] = useState({
        numBlue: '',
        prefixBlue: '',
        bluePerRow: '',
        numRed: '',
        prefixRed: '',
        redPerRow: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const generateTokens = () => {
        const { numBlue, prefixBlue, numRed, prefixRed } = formData;

        const newBlueTokens = Array.from({ length: Number(numBlue) }, (_, i) => ({
            label: `${prefixBlue}${i + 1}`,
            color: 'blue',
        }));
        const newRedTokens = Array.from({ length: Number(numRed) }, (_, i) => ({
            label: `${prefixRed}${i + 1}`,
            color: 'red',
        }));

        setBlueTokens(newBlueTokens);
        setRedTokens(newRedTokens);
    };

    const clearTokens = () => {
        setBlueTokens([]);
        setRedTokens([]);
        setFormData({
          numBlue: '',
          prefixBlue: '',
          bluePerRow: '',
          numRed: '',
          prefixRed: '',
          redPerRow: '',
        });
      };
    



    return (
        <div style={{

            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Box sx={{ padding: 5, maxWidth: 500, margin: 'auto', width: '100%' }}>
                <Typography variant="h4" paddingBottom={2} gutterBottom align="center" fontWeight={700} color='#093560' >
                    Token Generator Application
                </Typography>

                {/* Here now Form code */}
                <Box sx={{ display: 'grid', gap: 1, justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#093560' }} >Number of Blue Tokens</Typography>
                        <TextField
                            name="numBlue"
                            type="number"
                            value={formData.numBlue}
                            onChange={handleChange}
                            size='small'
                            sx={{
                                width: '190px',
                                marginLeft: 3,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#E3E9EE',
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#093560' }} >Blue Token Prefix</Typography>
                        <TextField
                            name="prefixBlue"
                            value={formData.prefixBlue}
                            onChange={handleChange}
                            size='small'
                            sx={{
                                width: '190px',
                                marginLeft: 3,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#E3E9EE',
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#093560' }}>Blue Tokens per Row</Typography>
                        <TextField
                            name="bluePerRow"
                            type="number"
                            value={formData.bluePerRow}
                            onChange={handleChange}
                            // fullWidth

                            size='small'
                            sx={{
                                width: '190px',
                                marginLeft: 3,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#E3E9EE',
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#093560' }}>Number of Red Tokens</Typography>
                        <TextField
                            name="numRed"
                            type="number"
                            value={formData.numRed}
                            onChange={handleChange}
                            size='small'
                            sx={{
                                width: '190px',
                                marginLeft: 3,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#E3E9EE',
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#093560' }}>Red Token Prefix</Typography>
                        <TextField
                            name="prefixRed"
                            value={formData.prefixRed}
                            onChange={handleChange}
                            size='small'
                            sx={{
                                width: '190px',
                                marginLeft: 3,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#E3E9EE',
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1rem', fontWeight: '600', color: '#093560' }}>Red Tokens per Row</Typography>
                        <TextField
                            name="redPerRow"
                            type="number"
                            value={formData.redPerRow}
                            onChange={handleChange}
                            size='small'
                            sx={{
                                width: '190px',
                                marginLeft: 3,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#E3E9EE',
                                },
                            }}
                        />
                    </Box>
                </Box>

                {/* Buttons */}
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button variant="contained" color="primary" onClick={generateTokens}>
                    Generate
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={clearTokens}>
                    Clear
                    </Button>
                </Box>






            </Box>
        </div>
    );
};

export default TokenGenerator;
