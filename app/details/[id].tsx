import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const humanBackground = require('../../assets/images/background-human.png');
const demonBackground = require('../../assets/images/background-demon.png');

export default function CharacterDetailsScreen() {
  const { characterData } = useLocalSearchParams();


  if (typeof characterData !== 'string') {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Dados do personagem não encontrados.</Text>
      </View>
    );
  }

  const character: any = JSON.parse(characterData);
  
  const backgroundImage = character.race === 'Demon' ? demonBackground : humanBackground;

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Image source={{ uri: character.img }} style={styles.characterImage} />
        
        <View style={styles.detailsCard}>
          <Text style={styles.name}>{character.name}</Text>

          <View style={styles.badgeContainer}>
            {character.age && (
              <View style={[styles.badge, {backgroundColor: '#e0e0e0'}]}>
                <Text style={styles.badgeText}>Idade: {character.age}</Text>
              </View>
            )}
            {character.race && (
              <View style={[styles.badge, {backgroundColor: '#ffeadb'}]}>
                <Text style={[styles.badgeText, {color: '#d96609'}]}>Raça: {character.race}</Text>
              </View>
            )}
            {character.gender && (
              <View style={[styles.badge, {backgroundColor: '#e0e0e0'}]}>
                <Text style={styles.badgeText}>Gênero: {character.gender}</Text>
              </View>
            )}
          </View>
          
          {character.description && <Text style={styles.description}>{character.description}</Text>}
          
          {character.quote && (
            <View style={styles.quoteCard}>
              <Text style={styles.quoteText}>{`"${character.quote}"`}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: { flex: 1 },
    scrollContainer: { paddingBottom: 40 }, 
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a' },
    errorText: { color: '#fff', fontSize: 18 },
 
    characterImage: {
      width: '100%',
      height: 280,
      resizeMode: 'contain',
      marginTop: 20,
    },
   
    detailsCard: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      marginHorizontal: 16,
      marginTop: -40, 
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 16,
    },
  
    badgeContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 16,
    },
    badge: {
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 12,
      marginHorizontal: 4,
    },
    badgeText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#333',
    },
   
    description: {
      fontSize: 16,
      textAlign: 'left',
      color: '#555',
      alignSelf: 'stretch', 
      marginBottom: 16,
    },

     quoteCard: {
      backgroundColor: '#1a1a1a', 
      borderRadius: 10,
      padding: 15,
      width: '100%',
    },
    quoteText: {
      fontSize: 16,
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#fff',
    }
});