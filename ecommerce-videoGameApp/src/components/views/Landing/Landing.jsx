import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';


import { StatusBar } from 'react-native';
import { ThemeContext } from '../../utils/theme/ThemeProvider';
import { LanguajeContext } from '../../utils/languaje/languajeProvider';

const Landing = ({ navigation }) => {
  //linea para setear el modo dark
  const { isDarkMode, StringsDark } = useContext(ThemeContext);
  //linea para setear el lenguaje /obtener palabras de lenguaje
  const { StringsLanguaje, locale } = useContext(LanguajeContext);

  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);
  const toggleMenu1 = () => {
    setMenu1Open(!menu1Open);
  };

  const toggleMenu2 = () => {
    setMenu2Open(!menu2Open);
  };

  // Obtener los juegos del estado de Redux
  const videoGames = useSelector((state) => state.videogamesState.videoGames);

  // Filtrar los juegos por mayor rating
  const topRatedGames = videoGames.filter((game) => game.rating >= 9);

  // Ordenar los juegos por fecha de forma descendente
  const sortedGamesByDate = [...videoGames].sort(
    (a, b) => new Date(b.released) - new Date(a.released)
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Welcome}`,
      headerTintColor: StringsDark.Titulo_Screen,
      headerStyle: {
        backgroundColor: StringsDark.Titulo_Screen_fondo,
      },
    });
  }, [isDarkMode, locale]);


  return (
    <View style={[styles.container, { backgroundColor: StringsDark.menuDrawner_c }]}>
      <StatusBar backgroundColor={StringsDark.status_bar} barStyle="light-content" />

      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <View style={[styles.button, { backgroundColor: StringsDark.boton_fondo }]}>
          <Text style={[styles.buttonText, { color: StringsDark.boton_texto }]}>
            Game Stack
          </Text>
        </View>
      </TouchableOpacity>

    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu1}>
          <Text style={styles.menuTitle}>Menú 1</Text>
        </TouchableOpacity>
        {menu1Open && (
          <View style={styles.menuContent}>
            {/* Contenido del Menú 1 */}
            <Text>Elemento 1</Text>
            <Text>Elemento 2</Text>
            <Text>Elemento 3</Text>
          </View>
        )}
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={toggleMenu2}>
          <Text style={styles.menuTitle}>Menú 2</Text>
        </TouchableOpacity>
        {menu2Open && (
          <View style={styles.menuContent}>
            {/* Contenido del Menú 2 */}
            <Text>Elemento A</Text>
            <Text>Elemento B</Text>
            <Text>Elemento C</Text>
          </View>
        )}
      </View>

      {/* Resto del código... */}
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  menuContainer: {
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuContent: {
    backgroundColor: '#E5E5E5',
    padding: 10,
  },

  titulo: {
    justifyContent: 'center',
    alignItems: 'center',

    fontWeight: 'bold',
    fontSize: 30,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    height: '100%',
    padding: 30,
  },
  imgContainer: {
    alignItems: 'center',
    margin: 60,
    width: '100%',
    height: '10%',
    // backgroundColor: 'red',
  },
  buttonContainer: {
    margin: 50,
  },
  button: {
    marginBottom: 30,
    width: '100%',
    // height: '49%',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },

});
export default Landing;
