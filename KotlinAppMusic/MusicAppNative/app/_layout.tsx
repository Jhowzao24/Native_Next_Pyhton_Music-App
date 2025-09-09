/*import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';


import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const handlePress = () => {
    const url = 'http://localhost:3000/'; // Coloque a URL do seu projeto aqui
    Linking.openURL(url);
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
      <Button title="Acessar Projeto Web" onPress={handlePress} />
    </View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

*/

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ImageBackground } from 'react-native';

const Layout = () => {
  const handlePress = () => {
    Linking.openURL('http://192.168.1.234:3000'); // Substitua pelo URL do seu site
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/fotos-gratis/a-vista-frontal-do-violino-no-azul_155003-10290.jpg?size=338&ext=jpg' }}
      style={styles.container}>
      <Text style={styles.header}>🎵 A trilha sonora da sua jornada começa aqui. 🎧</Text>

      {/* Área inferior com botão */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Acessar Meu Projeto</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ABAB5'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top: 40,
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Leve transparência para destaque
    padding: 10,
  },
  image: {
    width: '70%',
    height: '52%',
    borderRadius: 70
  },
  footer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#0ABAB5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#004080',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'cyan',
    fontSize: 24,
    fontWeight: 'ultralight',
    width: 150,
    height: 150,
    alignContent: 'center',
  },
});


export default Layout;