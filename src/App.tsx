import React, { Component } from 'react';
import './App.css';
import Catigory from './components/category/category';
import Products from './components/products/products';

export default class App extends Component<{}, {}> {

  render() {
   

		return (
      <>
      <div className="app">
       < Catigory/>
       < Products/>
      </div>
      </>
		);
	}
}

