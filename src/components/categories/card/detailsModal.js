import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import MultiActionAreaCard from './details';
import BlueButton from '../../../Components/BlueButton';
function Show_details_modal({ dataUse }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BlueButton
        onClick={handleOpen}
        variant='outlined'
        style={{
          width: '50%',
          marginBottom: '15px',
          fontWeight: 'bold',
          translate: '50%',
        }}
      >
        Show Details
      </BlueButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <MultiActionAreaCard dataUse={dataUse} />
        </Box>
      </Modal>
    </div>
  );
}

export default Show_details_modal;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
