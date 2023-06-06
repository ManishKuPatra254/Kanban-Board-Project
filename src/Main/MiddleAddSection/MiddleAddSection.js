import {Fragment,useState} from 'react';
import style from './MiddleAddSection.module.css';
import {Grid,TextField,Button,IconButton} from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { StyledColumn } from './StyleList';



export function Addsection (){

    const[newList,setNewList]=useState();
    const[displayaddList,setDisplayAddList]=useState();

    return(
        <Fragment>
            <div className={style.main_container}>
                <Grid container spacing={3} className={style.main}>
                    {displayaddList ? (
                <Grid item xs={4}>
                   <StyledColumn>
                <div className={style.input_text}>
                  {/* <p className={style.heading_list}>To do.</p> */}
                    <TextField placeholder='Enter list title...' value={newList} sx={{width:'90%'}}
                    onChange={(e) => setNewList(e.target.value)} size='small'/>
                </div>
                <Button sx={{marginTop:'20px'}} variant='contained' startIcon={<AddIcon/>}
                 >
                  Add List</Button>
                <IconButton sx={{marginTop:'20px'}} size='small'
                  onClick={() => setDisplayAddList(false)}>
                    <CloseIcon/>
                </IconButton>
                </StyledColumn>
                 </Grid>) : (
                <Grid item xs={4}>
                  <StyledColumn>
                    <div >
                      <Button  className={style.add_button} 
                      variant='contained' 
                      startIcon={<AddIcon/>}
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