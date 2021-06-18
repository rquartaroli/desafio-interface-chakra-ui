import React, { useEffect } from 'react';
import { useState, createContext, ReactNode } from 'react';
import { api } from './src/services/api';

type ModelCardInfo = [{
  cityTitle: string,
  countryTitle: string,
  imgCity: string,
  imgFlag: string
}]

interface Continent {
  id: number;
  title: string;
  soonDescription: string;
  description: string;
  imageSlide: string;
  bannerSlug: string;
  country: number;
  language: number;
  city: number;
  cardInfo: ModelCardInfo;
}

type ContinentInput = Omit<Continent, 'id'>;

interface ContinentProviderProps {
  children: ReactNode;
}

interface ContinentContextData {
  continents: Continent[];
  createContinent: (data: ContinentInput) => void;
}

export const ContinentsContext = createContext<ContinentContextData>(
  {} as ContinentContextData
);

export function ContinentsProvider({ children }: ContinentProviderProps) {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get('/continents').then(response => setContinents(response.data.continents))
  }, []);

  function createContinent(continent: ContinentInput) {
    console.log(continent)
    // api.post('/continents', continent)
  }

  // useEffect(() => {
  //     setContinents([{ title: 'América'}]);
  //   }, []);

  return (
    <ContinentsContext.Provider value={{continents, createContinent}}>
      { children }
    </ContinentsContext.Provider>
  )
}
