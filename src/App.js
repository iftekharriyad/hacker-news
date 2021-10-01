import React,{useState, useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import NewsList from './components/NewsList'
import Progress from './components/Progress'
import Copyright from './components/Copyright'
import Error from './components/Error'
import './App.css';

function App() {
  const [topNewsArrived,setTopNewsArrived] = useState(false);
  const [topNews,setTopNews] = useState([]);
  const [showError, setShowError] = useState(false)
  const apiUrl =  "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  useEffect(()=>{
    async function fetchData(){
      try{
        let response = await fetch(apiUrl)
        let data = await response.json();
        data = await data.slice(0,50)
        Promise.all(data.map(id=>{
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response=>response.json())
        })).then(d=>{
          setTopNews(d);
          setTopNewsArrived(true)
        }).catch(e=>{
          console.error(e)
          setShowError(true)
        })
      }catch(e){
        console.error(e)
        setShowError(true);
      }
    }
    fetchData();
  },[])

  return (
    <>
    <CssBaseline/>
    <Container maxWidth='lg'style={{margin:"50px auto"}}>
      <Typography variant='h4' component='h1' textAlign="center" gutterBottom>
          Hacker News
      </Typography>
      {
        showError?(
          <Error/>
        ):(
          topNewsArrived ?(
            <NewsList newsType="Top News" news={topNews} handleArrived={setTopNewsArrived}/>
          ):(
            <Progress/>
          )
        )
          
      }
      <Copyright/>
    </Container>
    </>
  );
}

export default App;
