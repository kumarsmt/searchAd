import React, { useEffect, useState } from 'react';
import {Button, Grid, TextField} from '@mui/material';
export const Search = () => {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState(null);
    const handleSubmit = async() => {

        const res = await fetch(`https://sum-search.onrender.com/${keyword}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'get'
        });
        const resData = await res.json();
        setData(resData);
    }
    const handleAll = async() => {

        const res = await fetch(`https://sum-search.onrender.com/`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'get'
        });
        const resData = await res.json();
        setData(resData);
    }

    useEffect(()=>{
        if(keyword) {
            handleSubmit();
        }
    },[keyword])

    return (
        <>
        <Grid style={{margin: "20px"}} >{console.log(process.env)}
            <TextField placeholder="acne, netflix, small, for" variant="outlined" onChange={(e)=>setKeyword(e.target.value)}></TextField>
            <Button style={{margin: "10px 20px"}} variant="contained" onClick={handleAll}>Show all</Button>
        </Grid>
        <Grid container style={{alignItems: 'center', justifyContent: 'center'}}>
            {data.map(({url, imageUrl, _id})=>(<Grid item key={_id} margin="10px">
                <a href={`https://www.${url}`}><img height="700px" width="700px" src={imageUrl} /></a>
            </Grid>))}
        </Grid>
        </>
    )
}