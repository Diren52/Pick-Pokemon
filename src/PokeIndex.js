import React, { Component } from 'react';
import './App.css';

const PokeIndex =  ({getImg, getName, done}) => (
            <div>
              <div className="imgBoard">
                <img style={{display: done? 'none':'block'}} className="loading" src="https://qzprod.files.wordpress.com/2015/04/loading.gif?w=320"/>
                <img style={{display: done? 'block':'none'}} className="pokeImg-main" src={getImg} />
              </div>
              <h3>The Pokemon you get is</h3>
              <h1>{getName}</h1>
  
            </div>
        );

export default PokeIndex;