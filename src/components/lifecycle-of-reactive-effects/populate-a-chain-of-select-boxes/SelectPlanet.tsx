'use client';

import { fetchData } from '@/app/lifecycle-of-reactive-effects/populate-a-chain-of-select-boxes/api';
import { useEffect, useState } from 'react';

export type Planet = {
  id: string;
  name: string;
};

export type Place = {
  id: string;
  name: string;
};

export default function SelectPlanet() {
  const [planetList, setPlanetList] = useState<Planet[]>([]);
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState<Place[]>([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then((result) => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (planetId === '') return;

    let ignore = false;
    fetchData('/planets/' + planetId + '/places').then((result) => {
      if (!ignore) {
        console.log('Fetched a list of places on "' + planetId + '".');
        setPlaceList(result);
        setPlaceId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    };
  }, [planetId]);

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <p>
        You are going to: {placeId || '???'} on {planetId || '???'}{' '}
      </p>
    </>
  );
}
