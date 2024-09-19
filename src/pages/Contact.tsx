import React, { useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import apiClient from '../services/api';

interface Characters {
  name: string;
  id: string;
}

const Contact: React.FC = () => {
  const [characters, setCharacters] = useState<Characters[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await apiClient.get('/character');
        const characters = response.data.results;
        setCharacters(characters);
        console.log(characters)
      } catch (error) {
        console.log('Não foi possível buscar os pokemons', error);
        
      }
    };

    getCharacters();
  }, []);

  return (  

    <DefaultLayout>
      <h1>Contato</h1>
      <div>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              NOME: {character.name}, ID: {character.id}
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default Contact;