import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useParking } from '../context/ParkingContext';

const ReportScreen = () => {
  const { vehicles, history } = useParking();

  const totalEntered = vehicles.length + history.length;
  const totalExited = history.length;

  const averageTimeMinutes = history.length
    ? Math.floor(
        history.reduce((acc, v) => acc + (v.endTime - v.startTime), 0) /
        history.length /
        60000
      )
    : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Estacionamento</Text>
      <Text style={styles.item}>🚗 Carros que entraram: {totalEntered}</Text>
      <Text style={styles.item}>🏁 Carros que saíram: {totalExited}</Text>
      <Text style={styles.item}>⏱ Tempo médio estacionado: {averageTimeMinutes} minutos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ReportScreen;
