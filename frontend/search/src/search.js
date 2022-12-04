import React, { useEffect, useState } from 'react';
import {Button, Grid, TextField} from '@mui/material';
export const Search = () => {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState(null);
    const baseUrl = process.env.NODE_ENV === "production" ? process.env.BASEURL : 'http://localhost:9000'
    const handleSubmit = async() => {

        const res = await fetch(`${baseUrl}/${keyword}`, {
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

        const res = await fetch(`${baseUrl}/`, {
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
        <Grid style={{margin: "20px"}} >
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