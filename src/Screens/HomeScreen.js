import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('sk.eyJ1Ijoic2VzbW8iLCJhIjoiY2xhdHBnZ2xiMDJxdjNwcW1zcXc0Nm85bSJ9.o1i-qCA5F3WACjylkdUdOg');

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});