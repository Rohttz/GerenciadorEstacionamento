import React, { createContext, useState, useContext } from 'react';

interface Vehicle {
  plate: string;
  startTime: number;
  slot: number;
}

interface FinishedVehicle extends Vehicle {
  endTime: number;
}

interface ParkingContextType {
  vehicles: Vehicle[];
  history: FinishedVehicle[];
  addVehicle: (plate: string, slot: number) => void;
  removeVehicle: (plate: string) => void;
  findVehicle: (plate: string) => Vehicle | undefined;
}

const ParkingContext = createContext<ParkingContextType>({} as ParkingContextType);

export const ParkingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [history, setHistory] = useState<FinishedVehicle[]>([]);

  const addVehicle = (plate: string, slot: number) => {
    setVehicles([...vehicles, { plate, slot, startTime: Date.now() }]);
  };

  const removeVehicle = (plate: string) => {
    const vehicle = vehicles.find(v => v.plate === plate);
    if (vehicle) {
      const finishedVehicle: FinishedVehicle = { ...vehicle, endTime: Date.now() };
      setVehicles(vehicles.filter(v => v.plate !== plate));
      setHistory([...history, finishedVehicle]);
    }
  };

  const findVehicle = (plate: string) => vehicles.find(v => v.plate === plate);

  return (
    <ParkingContext.Provider value={{ vehicles, history, addVehicle, removeVehicle, findVehicle }}>
      {children}
    </ParkingContext.Provider>
  );
};

export const useParking = () => useContext(ParkingContext);
