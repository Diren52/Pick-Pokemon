import React, { Component } from 'react';
import './App.css';
import PokeIndex from './PokeIndex';

class ClickBall extends Component{
    constructor(props){
      super(props);
      this.state = {
        num: String(Math.floor((Math.random() * 100) + 1)),
        img: 'https://www.dafont.com/forum/attach/orig/6/4/640741.png?1',
        img2: 'https://www.dafont.com/forum/attach/orig/6/4/640741.png?1',
        name: '',
        done: true
      }
      this.pickNumber = this.pickNumber.bind(this);
    }
    pickNumber(){
      this.setState({done: false});
      this.setState({num: Math.floor((Math.random() * 100) + 1)});//new number
      fetch('/'+this.state.num)/* global fetch*///add proxy at package.json so this refers to :8081/api/todos
      .then(resp => {
          if (!resp.ok){
              if (resp.status >= 400 && resp.status < 500){
                  return resp.json().then(data => {
                      let err = {errorMessage: data.message};
                      throw err;
                  })
              }else {
                  let err = {errorMessage: 'Please try again later. Server is not responding.'};
                  throw err;
              }
      }
      return resp.json()
      }).then(poke => this.setState({img: poke.sprites.front_default, img2: poke.sprites.back_default, name: poke.name.toUpperCase(), done: true}));
    }
    render(){
        return(
            <div>
            <header className="App-header">
              <a href="#" onClick={this.pickNumber}>
              <img src="http://pngimg.com/uploads/pokeball/pokeball_PNG8.png" className="App-logo" alt="logo" />
              </a>
              <h1 className="App-title">Welcome to Pick Poke</h1>
            </header>
            <h5 className="App-intro">
              Click the Pokeball above to meet your Pokemon.
            </h5>
            <PokeIndex
              getImg={this.state.img}
              getName={this.state.name}
              done={this.state.done}
            />
            </div>
        )
    }
}

export default ClickBall;