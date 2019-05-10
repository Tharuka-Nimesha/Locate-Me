import React from "react";
import { StyleSheet, View, ImageBackground, Button, Text } from "react-native";
import { config } from "./firebaseConfig";

import firebase from "firebase";
import SwitchToggle from "react-native-switch-toggle";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switch: false,
      lat: 0,
      lng: 0,
      timer: 0,
      text: "Start Sharing"
    };

    firebase.initializeApp(config);
  }

  onStart() {
    this.setState({
      text: "Stop Sharing"
    });
    this.state.timer = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        position => {
          firebase
            .database()
            .ref("bus-locations/Trip_247")
            .update({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          console.log("Latitude : " + this.state.lat);
          console.log("Longitude : " + this.state.lng);
        },
        error => alert(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 1
        }
      );
    }, 5000);
  }

  onStop() {
    this.setState({
      text: "Start Sharing"
    });
    clearInterval(this.state.timer);
  }

  onPress() {
    this.setState({ switch: !this.state.switch });
    if (!this.state.switch) this.onStart();
    else this.onStop();
  }

  render() {
    return (
      <ImageBackground
        source={require("./assets/background.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View>
            <View style={styles.header}>
              <View style={styles.center}>
                <Text style={styles.title}>Track of Truck</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.center}>
            <Text style={styles.bottomText}>{this.state.text}</Text>
          </View>
          <View style={styles.center}>
            <View style={styles.bottom}>
              <View style={styles.button}>
                <SwitchToggle
                  containerStyle={styles.togContainer}
                  circleStyle={styles.togCircle}
                  switchOn={this.state.switch}
                  onPress={() => this.onPress()}
                  circleColorOff="white"
                  circleColorOn="red"
                  duration={500}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  header: {
    height: 90,
    backgroundColor: "#3a823c"
  },
  title: {
    fontSize: 32,
    color: "white"
    // fontFamily: "Raleway"
  },
  center: {
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null
  },

  //styles of the toggle button
  togContainer: {
    marginTop: 16,
    width: 108,
    height: 48,
    borderRadius: 25,
    backgroundColor: "#ccc",
    padding: 5
  },
  togCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "white" // rgb(102,134,205)
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 300,
    marginRight: 110
  },
  button: {
    position: "absolute",
    bottom: 0
  },
  bottomText: {
    marginBottom: 250,
    fontSize: 20,
    color: "black"
  }
});
