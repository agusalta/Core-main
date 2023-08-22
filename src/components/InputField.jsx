import { TextField } from '@material-ui/core'
import React from 'react'
import { Box, Grid } from '@mui/material'

function InputField({onChange, value, sm, type, id, variant, label}) {
  return (
    <>
      <Box
      component='div' 
      maxWidth='sx'
      sx={{
        display: 'flex', 
        justifyContent:'center', 
        flexDirection:'column'
      }}
      >
        <TextField
        sm={sm}
        type={type} 
        id={id} 
        variant={variant}
        onChange={onChange}
        value={value} 
        label={label}
        fullWidth
        />
      </Box>

    </>
  )
}

export default InputField