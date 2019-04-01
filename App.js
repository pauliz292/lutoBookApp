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
import Home from './src/components/home/home';
import Login from './src/components/login/login';
import Register from './src/components/login/register';
import LocationPage from './src/components/locationService/marketLocation';
import Recipes from './src/components/recipes/recipes';
import Mealplanner from './src/components/mealplanner/mealplanner';
import Admin from './src/components/admin/admin';
import IngredientsForm from './src/components/admin/ingredientsForm';
import LocationsForm from './src/components/admin/locationsForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Admin} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/location" component={LocationPage} />
          <Route path="/mealplanner" component={Mealplanner} />
          <Route path="/admin/ingredientsform" component={IngredientsForm} />
          <Route path="/admin/locationsform" component={LocationsForm} />
        </View>
      </NativeRouter>
    );
  }
}
