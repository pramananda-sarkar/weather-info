import React from "react";
import { WiThermometer, WiStrongWind, WiHumidity, WiBarometer } from "react-icons/wi";

type Props = {
  temperature: number;
  wind: number;
  humidity: number;
  pressure: number;
};

const LeftSide = ({ temperature, wind, humidity, pressure }: Props) => {
  return (
    <div className="w-[400px] h-[220px] bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-2xl shadow-lg p-6 transition-all hover:scale-105">
      <h2 className="text-xl font-semibold text-white mb-4 text-center">🌤 Current Weather</h2>
      <div className="grid grid-cols-2 gap-4 text-lg">
        <div className="flex items-center gap-2">
          <WiThermometer size={28} /> 
          <span className="font-medium">Temp:</span> {temperature}°C
        </div>
        <div className="flex items-center gap-2">
          <WiStrongWind size={28} />
          <span className="font-medium">Wind:</span> {wind} km/h
        </div>
        <div className="flex items-center gap-2">
          <WiHumidity size={28} />
          <span className="font-medium">Humidity:</span> {humidity}%
        </div>
        <div className="flex items-center gap-2">
          <WiBarometer size={28} />
          <span className="font-medium">Pressure:</span> {pressure} hPa
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
