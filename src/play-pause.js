import React from 'react';
import { TouchableHighlight, Text,StyleSheet } from 'react-native';

const PlayPause = props => (
    <TouchableHighlight
        onPress={props.onPress}
    >
        {
            props.pause ? 
                <Text style={styles.textoPlay}>Play</Text>
                :
                <Text style={styles.textoPause}>Pause</Text>
        }
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    textoPlay: {
      backgroundColor: 'white',
    },
    textoPause: {
        backgroundColor: 'red',
      },
});

export default PlayPause;
