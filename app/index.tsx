import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { CharacterListItem } from '../types';

export default function CharacterListScreen() {
  const [characters, setCharacters] = useState<CharacterListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.demonslayer-api.com/api/v1/characters?limit=45')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Escolha seu personagem abaixo</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/details/${item.id}`} asChild>
            <Pressable style={styles.itemContainer}>
              <Image source={{ uri: item.img }} style={styles.itemImage} />
              <Text style={styles.itemText}>{item.name}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    logo: { width: 200, height: 100, resizeMode: 'contain', alignSelf: 'center', marginTop: 20, marginBottom: 20 },
    title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
    itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 15, marginVertical: 8, marginHorizontal: 16, elevation: 3 },
    itemImage: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
    itemText: { fontSize: 16, fontWeight: '600', color: '#333' }
});