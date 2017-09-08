import React from 'react';
import {
  AppRegistry,
  Text,
  asset,
  View,
  Pano,
  Scene,
} from 'react-vr';

export default class SocialLabirint extends React.Component {
  constructor() {
    super();
    this.state = {textColor: 'white'};
  }
  render() {
    return (
      <Scene
        cursorVisibilitySlop="auto"
      >
        <Pano source={asset('chess-world.jpg')}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{color: this.state.textColor}}
            onEnter={() => this.setState({textColor: 'red'})}
            onExit={() => this.setState({textColor: 'white'})}>
            This text will turn red when you look at it.
          </Text>
        </View>
      </Scene>
    );
  }
};

AppRegistry.registerComponent('SocialLabirint', () => SocialLabirint);
