import { Box, Button, Modal, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const AddToDoForm = ({ open, handleClose, saveTodo }) => {
  const [text, setText] = useState('');

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const deleteStyle = {
    color: '#202020',
    borderColor: '#202020',
    '&:hover': {
      borderColor: '#202020',
    },
  };
  const saveStyle = {
    bgcolor: '#F8F0A2',
    color: '#202020',
    '&:hover': {
      bgcolor: '#F8F0A2',
    },
  };

  const save = () => {
    if (text !== '' && text) saveTodo(text);
    handleClose();
    setText('');
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <TextField
          id='outlined-multiline-flexible'
          label='Nota'
          multiline
          fullWidth
          maxRows={6}
          onChange={(e) => setText(e.target.value)}
        />
        <Stack
          justifyContent={'right'}
          marginTop={'1rem'}
          direction='row'
          spacing={2}
        >
          <Button
            sx={deleteStyle}
            variant='outlined'
            startIcon={<DeleteIcon />}
            onClick={() => {
              handleClose();
              setText('');
            }}
          >
            Delete
          </Button>
          <Button
            sx={saveStyle}
            variant='contained'
            endIcon={<SendIcon />}
            onClick={save}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default AddToDoForm;
