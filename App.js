import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDownComp from './Components/CountDownComp';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     error: null,
  //   };
  // }

  // componentDidMount() {
  //   this.watchId = navigator.geolocation.watchPosition(
  //     (position) => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         error: null,
  //       });
  //     },
  //     (error) => this.setState({ error: error.message }),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 0, distanceFilter: 1},
  //   );
  // }

  // componentWillUnmount() {
  //   navigator.geolocation.clearWatch(this.watchId);
  // }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Latitude : {this.state.latitude}</Text>
        <Text style={styles.title}>Longitude : {this.state.longitude}</Text> */}
        <CountDownComp/>
        {/* {this.state.error ? <Text style={styles.title}>Error: {this.state.error}</Text> : null} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize:15,
    margin:20,
  },
});
