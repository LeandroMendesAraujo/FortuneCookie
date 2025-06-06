import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';

const fortunes = [
  "Hoje será um dia incrível!",
  "A sorte favorece os corajosos.",
  "Grandes mudanças estão a caminho.",
  "Acredite nos seus sonhos!",
  "Você está no caminho certo.",
  "Confie no tempo das coisas.",
  "Uma nova oportunidade surgirá em breve.",
  "Sucesso é a soma de pequenos esforços."
];

export default function App() {
  const [broken, setBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  const breakCookie = () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
    setBroken(true);
  };

  const reset = () => {
    setBroken(false);
    setFortune('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>

      <View style={styles.cookieContainer}>
        <View style={[styles.half, styles.left, broken && styles.openLeft]} />
        <View style={[styles.half, styles.right, broken && styles.openRight]} />
      </View>

      {fortune !== '' && (
        <Text style={styles.fortuneText}>"{fortune}"</Text>
      )}

      <TouchableOpacity
        style={[styles.button, broken && styles.buttonSecondary]}
        onPress={broken ? reset : breakCookie}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {broken ? 'Tentar Novamente' : 'Quebrar o Biscoito'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefaf4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#b3560f',
    marginBottom: 35,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  cookieContainer: {
    position: 'relative',
    width: 130,
    height: 130,
    marginBottom: 35,
  },
  half: {
    width: 65,
    height: 65,
    backgroundColor: '#f4a261',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    position: 'absolute',
    top: 32,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  left: {
    left: 0,
    transform: [{ rotate: '0deg' }],
  },
  right: {
    right: 0,
    transform: [{ rotate: '0deg' }],
  },
  openLeft: {
    transform: [{ rotate: '-40deg' }, { translateX: -25 }],
    zIndex: 0,
  },
  openRight: {
    transform: [{ rotate: '40deg' }, { translateX: 25 }],
    zIndex: 0,
  },
  fortuneText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#6b4226',
    textAlign: 'center',
    marginBottom: 28,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#e76f51',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  buttonSecondary: {
    backgroundColor: '#2a9d8f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
