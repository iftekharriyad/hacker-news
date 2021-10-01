import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  card:{
    margin:"30px auto"
  },
  cardActionArea:{
    display:'flex', 
    flexDirection:'row',
    padding:"1px"
  },  
  cardMedia:{
    maxWidth:"150px",
        flexBasis:"30%",
        flexGrow:"1",
        flexShrink:"1"
    },
  cardContent:{
    flexBasis:"70%",
    flexGrow:"1",
    flexShrink:"1"
  }
})
export default function News(props) {
    const classes = useStyle()
    const [hostName, setHostName] = useState()
    useEffect(()=>{
      if(props.url){
        const domain = new URL(props.url)
        let h = domain.hostname.replace('www.', '');
        setHostName(h)
      }
    },[props.url])
  return (
    <Card className={classes.card} variant="outlined" >
      <CardActionArea className={classes.cardActionArea} href={props.url} target="_blank">
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="div" style={{display:"inline-block"}}>
            {props.title}
            <Typography style={{alignSelf:"center",color:'grey',marginLeft:"5px",display:"inline-block"}} variant="body2" gutterBottom>
              {hostName ?(
                `(${hostName})`
              ):(
                null
              )}
            </Typography>
          </Typography>
          <Typography style={{display:"block"}} variant='caption'>by {props.by}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}