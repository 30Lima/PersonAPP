import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { CharacterDetails } from '../../types/index';

const API_BASE_URL = 'https://www.demonslayer-api.com/api/v1/characters';

const humanBackground = require('../../assets/images/background-human.png');
const demonBackground = require('../../assets/images/background-demon.png');

export default function CharacterDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [character, setCharacter] = useState<CharacterDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCharacter = async () => {
      try {
        console.log("Buscando personagem com ID:", id);

        const response = await fetch(`${API_BASE_URL}?id=${id}`, {
          headers: { 'Origin': 'x-requested-with' },
        });

        console.log("Status da resposta:", response.status);

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);

        if (data && data.length > 0) {
          setCharacter(data[0]);
        } else {
          setError('Personagem não encontrado.');
        }
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError('Erro ao buscar dados. Verifique sua conexão ou tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Personagem não encontrado.</Text>
      </View>
    );
  }

  const backgroundImage = character.race === 'Demon' ? demonBackground : humanBackground;

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {character.img ? (
          <Image source={{ uri: character.img }} style={styles.characterImage} />
        ) : (
          <Text style={styles.errorText}>Imagem não disponível</Text>
        )}
        <View style={styles.detailsCard}>
          <Text style={styles.name}>{character?.name ?? 'Sem nome'}</Text>
          <View style={styles.statsContainer}>
            <Text style={styles.statText}>Idade: {character?.age ?? 'Desconhecida'}</Text>
            <Text style={styles.statText}>Raça: {character?.race ?? 'Desconhecida'}</Text>
            <Text style={styles.statText}>Gênero: {character?.gender ?? 'Desconhecido'}</Text>
          </View>
          <Text style={styles.description}>
            {character?.description ?? 'Sem descrição disponível'}
          </Text>
        </View>
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            {character?.quote ? `"${character.quote}"` : 'Sem frase famosa'}
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  scrollContainer: { padding: 20, alignItems: 'center' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a' },
  errorText: { color: '#fff', fontSize: 18, textAlign: 'center' },
  characterImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 20
  },
  detailsCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  name: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#000' },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10
  },
  statText: { fontSize: 14, color: '#333' },
  description: { fontSize: 16, textAlign: 'center', color: '#555' },
  quoteCard: { backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 10, padding: 15, width: '100%' },
  quoteText: { fontSize: 16, fontStyle: 'italic', textAlign: 'center', color: '#fff' }
});
