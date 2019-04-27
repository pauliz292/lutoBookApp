/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import { NativeRouter, Route} from 'react-router-native';
import Stack from 'react-router-native-stack';
import Home from './src/components/home/home';
import Login from './src/components/login/login';
import Register from './src/components/login/register';
import LocationPage from './src/components/locationService/marketLocation';
import Recipes from './src/components/recipes/recipes';
import Mealplanner from './src/components/mealplanner/mealplanner';
import Admin from './src/components/admin/admin';
import RecipeDetails from './src/components/mealplanner/recipeDetails';
import MarketList from './src/components/locationService/marketList';
import MapLocation from './src/components/locationService/map';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Stack>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Admin} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/location" component={LocationPage} />
            <Route path="/marketlist" component={MarketList} />
            <Route path="/map" component={MapLocation} />
            <Route path="/mealplanner" component={Mealplanner} />
            <Route path="/recipedetails" component={RecipeDetails} />
        </Stack>
      </NativeRouter>
    );
  }
}
