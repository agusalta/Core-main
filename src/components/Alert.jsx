import React from 'react'
import { Alert } from '@mui/material';


function AlertCustom(severity, text) {
  return ( 
        <Alert severity={severity}>{text}</Alert> 
    )
}

export default AlertCustom