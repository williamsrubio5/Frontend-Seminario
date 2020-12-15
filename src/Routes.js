import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// View Components
import Home from './core/Home';
import About from './core/aboutUs'
import Signup from './core/Signup'
import Signin from './core/Signin'
import AddVideogame from './core/AddVideogame'
import AddCategory from './core/AddCategory'
import Videogame from './core/Videogame';
import Slide from './core/Slide';


// Functional Components

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/videogame/:videogameId" exact component={Videogame}/>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/addcategory" exact component={AddCategory}/>
        <Route path="/addvideogame" exact component={AddVideogame}/>
        <Route path="/eliminar" exact component={Slide}/>
        <Route path="/aboutus"  component={About}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;