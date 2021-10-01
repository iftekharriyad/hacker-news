import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

import News from './News'

const useStyles= makeStyles({
    container:{
        margin:"50px auto"
    },
    notFoundContainer:{
        margin:"30px 50px 50px 50px",
        padding:'50px'
    }
})
export default function NewsList(props){
    const classes = useStyles()

    return(
        <Container className={classes.container}>
            <Container maxWidth="md">
            {   
                (props.news.length>0)?
                (
                props.news.map((i,index)=>{
                    return(
                        <News title={i.title} key={index} url={i.url} by={i.by}/>
                    )
                })):
                (   <Container className={classes.notFoundContainer}>
                    <Typography variant='h4' gutterBottom>Nothing found!</Typography>
                    <Typography variant='subtitle1'>Try different a keyword i.e "Bitcoin Price".</Typography>
                    </Container>
                )
                }
            </Container>

        </Container> 
    )
}