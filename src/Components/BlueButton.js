import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const BlueButton = styled(Button)({
  margin: 5,
  backgroundColor: '#B7B7B7',
  color: '#E8E8E8',
  '&:hover': {
    backgroundColor: '#8C8C8C',
  },
  '&:disabled': {
    backgroundColor: 'gray',
    color: 'white',
  },
});
export default BlueButton;
