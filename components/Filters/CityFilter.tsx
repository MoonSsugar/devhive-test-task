"use client";
import { useState } from "react";

interface CityFilterProps {
  cities: string[];
  setCityFilter: (city: string) => void;
}

export default function CityFilter({ cities, setCityFilter }: CityFilterProps) {
  const [selectedCity, setSelectedCity] = useState("");

  const onSelectCity = (city: string) => {
    setSelectedCity(city);
    setCityFilter(city);
  };

  return (
    <select
      value={selectedCity}
      onChange={(event) => onSelectCity(event.target.value)}
      className="border border-gray-400 px-2 py-1 rounded-full hover:bg-gray-100"
    >
      <option value="">All cities</option>
      {cities.map((city: string) => {
        if (city) {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        }
      })}
    </select>
  );
}
