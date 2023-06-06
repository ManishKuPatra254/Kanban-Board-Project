import { Fragment, useState } from 'react';
import style from './MiddleAddSection.module.css';
import { Grid, Button, IconButton, TextField } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { StyledColumn } from './StyleList';
import { addList } from '../../Store/Slice';
import { useDispatch } from 'react-redux';




export function Addsection() {

  const [newList, setNewList] = useState('');
  const [displayaddList, setDisplayAddList] = useState();

  function handleChangeValue(event) {
    // console.log(event.target.value);
    setNewList(event.target.value)
  }

  return (
    <Fragment>
      <div className={style.main_container}>
        <Grid container spacing={3} className={style.main}>
          {displayaddList ? (
            <Grid sx={{ width: '400px' }}>
              <StyledColumn>
                <div className={style.input_text}>
                  <TextField placeholder='Enter list title...' value={newList} sx={{ width: '100%' }}
                    onChange={handleChangeValue} size='small' />
                </div>
                <Button sx={{
                  marginTop: '20px',
                  backgroundColor: 'black',
                  color: 'whitesmoke',
                  textTransform: 'unset',
                  "&:hover": { backgroundColor: 'black' }

                }} variant='contained' startIcon={<AddIcon />}
                >
                  Add a list</Button>
                <IconButton sx={{ marginTop: '20px' }} size='small'
                  onClick={() => setDisplayAddList(false)}>
                  <CloseIcon />
                </IconButton>
              </StyledColumn>
            </Grid>) : (
            <Grid sx={{ width: '300px' }}>
              <StyledColumn>
                <div >
                  <Button sx={{
                    textTransform: 'unset',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
                    variant='text'
                    startIcon={<AddIcon />}
                    onClick={() => setDisplayAddList(true)}>Add list
                  </Button>
                </div>
              </StyledColumn>
            </Grid>
          )}
        </Grid>
      </div>
    </Fragment>
  )
}