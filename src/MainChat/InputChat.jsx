import React from 'react';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { blue, pink, red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

export default function InputChat (){  
  return(
    <div className="inputChat">
      <FormControl sx={{ width: '75%' , p:2 }}
      
      >
          <OutlinedInput placeholder="Type Something..." sx={{color: 'GrayText'
          , fontSize:16 }}
         
          />
          </FormControl>
          
          <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 , mr:9 }}
      >
          <div className="send" >
            <input type='file' style={{display:"none"}} id='file' />
            <label htmlFor='file' class='AddPhoto'>
            <AddPhotoAlternateIcon sx={{color: blue[200], 
                fontSize: 60 , mt: 2 ,mr:1 
            }} />
            </label>

            <Button sx={{ fontSize:20 , mr:1 , mt:-3 , mb: 3}} 
            
            variant="contained" endIcon={<SendIcon />}>
                  Send
          </Button>

            
          </div>
          </Stack>

          

        
    </div>
  )
}