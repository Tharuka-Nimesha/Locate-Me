import React from 'react';
import { Button } from 'react-native';

const FetchLocation = props => {
    return (
      <Button title="Start" onPress={props.onGetLocation} />
    );
}

export default FetchLocation;