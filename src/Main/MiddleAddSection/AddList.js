import React from 'react';
import { Addsection } from './MiddleAddSection';
import { useSelector } from 'react-redux';
import {Grid} from '@mui/material';

export function AddList () {

    const listItem = useSelector((store) => store.listSlice.list);
    return(
        <Grid item xs={4}>
            {listItem.length && listItem.map((list) =>
            <div key={list.id}> {list.title} </div>)}

            <Addsection/>
        </Grid>
            
       

    )
}