import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Player from './src/player';

import Localization from './src/localization';

const Stack = StackNavigator({
  LocalizationScreen: { screen: Localization },   
  VideoScreen: Player,
},
  {
    initialRouteName: 'LocalizationScreen',
  });

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Stack />
    );
  }

}


