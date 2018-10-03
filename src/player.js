import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

import Video from 'react-native-video';
import ControlsVideo from './controls-video';
import PlayPause from './play-pause';

class Player extends Component {
    state = {
        paused: true
      }
      render() {
        return (
          <View style={styles.container}>
            <View>
              <View style={styles.videoLayout}>
                <Video
                  source={require('../assets/videos/video.mp4')}
                  onError={this.videoError}
                  onLoad={this.onLoadVideo}
                  style={styles.video}
                  resizeMode="cover"
                  paused={this.state.paused}
                />
              </View>
              <View style={styles.overlayVideo}>
                <ControlsVideo>
                  <PlayPause
                    pause={this.state.paused}
                    onPress={this.playPause}
                  />
                  <Text>progreso</Text>
                  <Text>tiempo</Text>
                </ControlsVideo>
              </View>
            </View>
          </View>
        );
      }
      videoError = (err) => {
        console.log(err);
      }
    
      playPause = () => {
        this.setState({
          paused: !this.state.paused
        });
      }
    
      onLoadVideo = () => {
        this.setState({
          paused: false
        });
      }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1
    },
    videoLayout: {
      borderWidth: 1,
      borderColor: 'red',
      paddingBottom: '56.25%',
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    overlayVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  
  });

  export default Player;
