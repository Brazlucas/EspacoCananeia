import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { open, onClose, handleClose } = props;

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 style={{ textAlign: 'center', fontFamily: 'times'}}>Como chegar</h1></DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            <span style={{ fontSize: '18px'}}>Rua Cananéia, 51, Vila Augusta - Guarulhos, SP</span>
            <br />
          </DialogContentText>
        <a style={{ color: 'green', fontSize: '18px' }} href="https://wa.me/5511998992034">
          <AiOutlineWhatsApp style={{ marginTop: '10px' }} /> (11) 99899-2034
        </a>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}