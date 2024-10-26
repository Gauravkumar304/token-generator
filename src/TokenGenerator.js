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


    return (
        <div style={{ 
  
            minHeight: '100vh', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}>

            <Box sx={{ padding: 5, maxWidth: 500,  margin: 'auto', width: '100%'}}>
            <Typography variant="h4" paddingBottom={2} gutterBottom align="center" fontWeight={700} color='#093560' >
                Token Generator Application
            </Typography>

            {/* Here now Form code */}
            



            </Box>
            </div>
        );
    };
    
    export default TokenGenerator;
    