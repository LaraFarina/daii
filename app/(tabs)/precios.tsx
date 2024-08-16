import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 

const TabTwoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.introduccion}>Los precios son:</Text>
      <Text style={styles.precios}>$10000 pesos por consulta</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  precios: {
    fontSize: 18,
    color: '#000',
  },
  introduccion: {
    fontSize: 16,
    color: '#333',
  },
});

export default TabTwoScreen;
