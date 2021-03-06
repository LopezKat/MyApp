import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Localization extends Component {

    state={
        latitude: null,
        longitude: null,
        error: null
    }

    componentDidMount(){
    //Ubicación estatica del usuario
        navigator.geolocation.getCurrentPosition((position)=>{
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        },
        (error)=>{
                this.setState({
                    error: error.message
                });
            },
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            });
    }

    watchPosition (){
        //Usuario en movimiento
        this.watchId=navigator.geolocation.watchPosition((position)=>{
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        },
        (error)=>{
                this.setState({
                    error: error.message
                });
            },
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            });
    }

    componentWillMount(){
        navigator.geolocation.clearWatch(this.watchId)
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> Latitude:{this.state.latitude} </Text>
        <Text> Longitude:{this.state.longitude} </Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text>: null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Localization;
