import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useParking } from '../context/ParkingContext';

const SearchScreen = () => {
  const [plate, setPlate] = useState('');
  const [result, setResult] = useState<string>('');
  const { findVehicle } = useParking();

  const handleSearch = () => {
    const vehicle = findVehicle(plate);
    if (vehicle) {
      const elapsedMs = Date.now() - vehicle.startTime;
      const elapsedMin = Math.floor(elapsedMs / (1000 * 60));
      setResult(`Placa ${vehicle.plate} está na vaga ${vehicle.slot}, há ${elapsedMin} min.`);
    } else {
      setResult('Veículo não encontrado.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite a placa"
        value={plate}
        onChangeText={text => setPlate(text.toUpperCase())}
        autoCapitalize="characters"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <Text style={{ marginTop: 20 }}>{result}</Text>
    </View>
  );
};

export default SearchScreen;
