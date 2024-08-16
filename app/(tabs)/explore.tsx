import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; 

const TabTwoScreen: React.FC = () => {
  const { nombre } = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
      <Text style={styles.saludo}>Hola {nombre}!</Text> 
      <Text style={styles.introduccion}>
        Somos una veterinaria destinada al rescate de perros callejeros.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    backgroundColor: '#f5f5f5', 
  },
  saludo: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#007AFF', 
    marginBottom: 10, 
  },
  introduccion: {
    fontSize: 18, 
    color: '#555', 
    textAlign: 'center', 
    lineHeight: 24, 
  },
});

export default TabTwoScreen;
