import React from 'react'
import { shallow } from 'enzyme';
import App from './App';
import Typography from '@mui/material/Typography'
import Progress from './components/Progress'
import NewsList from './components/NewsList';

describe('App', ()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<App/>)
  })

  it('should have `Hacker News` title',()=>{
    expect(wrapper.containsMatchingElement(<Typography>Hacker News</Typography>)).toBe(true);
  })

  it('should have a `Progress` element',()=>{
    expect(wrapper.containsMatchingElement(<Progress/>)).toBe(true);
  })

  it('should have a `NewsList` element',()=>{
    setTimeout(()=>{
      expect(wrapper.containsMatchingElement(<NewsList/>)).toBe(true);
    },10000)
    
  })
  
})