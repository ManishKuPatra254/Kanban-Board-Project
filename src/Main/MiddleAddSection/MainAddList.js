import React from 'react';
import { Addsection } from './MiddleAddSection';
import { Grid } from '@mui/material';

export function MainAddList (){
    return(
        <Grid item xs={4}>
        <Addsection/>
      </Grid>
    )
}