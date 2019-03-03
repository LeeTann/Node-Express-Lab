import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      posts: []
    }
  }

  getData = () => {
    axios.get('http://localhost:9001/api/posts')
    .then(res => {
      console.log(res)
      this.setState(() => ({posts: res.data}))
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getData()
  }
   
  render() {
    console.log(this.state)
    return (
      <div className="App">  
        <h1>Labs Post</h1>
        {this.state.posts.map(item => {
          return (
            <p key={item.id}>{item.title}<br/>{item.contents}</p>
          )
        })}  
      </div>
    );
  }
}

export default App;
