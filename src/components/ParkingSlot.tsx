import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getSlotColor } from '../utils/timeUtils';

interface Props {
  slot: number;
  vehicle?: { plate: string; startTime: number };
  onRemove?: () => void;
}

export const ParkingSlot: React.FC<Props> = ({ slot, vehicle, onRemove }) => {
  const color = vehicle ? getSlotColor(vehicle.startTime) : 'green';

  return (
    <View style={[styles.slot, { backgroundColor: color }]}>
      <Text>Vaga {slot}</Text>
      {vehicle && (
        <>
          <Text>Placa: {vehicle.plate}</Text>
          <Button title="Remover" onPress={onRemove} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slot: {
    margin: 8,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    width: 140,
  },
});
