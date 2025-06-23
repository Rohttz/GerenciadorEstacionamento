import React, { useState } from 'react';
import { View, ScrollView, Button, TextInput, Alert } from 'react-native';
import { useParking } from '../context/ParkingContext';
import { ParkingSlot } from '../components/ParkingSlot';

const HomeScreen = ({ navigation }: any) => {
  const { vehicles, addVehicle, removeVehicle } = useParking();
  const [slots] = useState([...Array(10).keys()].map(i => i + 1));
  const [plate, setPlate] = useState('');
  const [slotInput, setSlotInput] = useState('');

  const handleAdd = () => {
    const slot = Number(slotInput);
    if (!plate || !slot || isNaN(slot)) {
      Alert.alert('Erro', 'Informe uma placa e número de vaga válido.');
      return;
    }
    if (vehicles.find(v => v.slot === slot)) {
      Alert.alert('Erro', 'Esta vaga já está ocupada.');
      return;
    }
    addVehicle(plate.toUpperCase(), slot);
    setPlate('');
    setSlotInput('');
  };

  return (
    <ScrollView>
      <Button title="Buscar por placa" onPress={() => navigation.navigate('Search')} />
      <Button title="Ver Relatório" onPress={() => navigation.navigate('Report')} />
      <View style={{ padding: 16 }}>
        <TextInput
          placeholder="Placa"
          value={plate}
          onChangeText={text => setPlate(text.toUpperCase())}
          autoCapitalize="characters"
          style={{ borderBottomWidth: 1, marginBottom: 8 }}
        />
        <TextInput
          placeholder="Vaga (número)"
          value={slotInput}
          onChangeText={setSlotInput}
          keyboardType="numeric"
          style={{ borderBottomWidth: 1, marginBottom: 8 }}
        />
        <Button title="Adicionar Veículo" onPress={handleAdd} />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {slots.map(slot => {
          const vehicle = vehicles.find(v => v.slot === slot);
          return (
            <ParkingSlot
              key={slot}
              slot={slot}
              vehicle={vehicle}
              onRemove={() => {
                if (vehicle) removeVehicle(vehicle.plate);
              }}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
