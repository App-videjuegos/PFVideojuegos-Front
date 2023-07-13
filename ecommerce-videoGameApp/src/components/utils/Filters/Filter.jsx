import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  filterRatingAsc,
  filterRatingDesc,
  filterPriceAsc,
  filterPriceDesc,
  filterByPlatform,
  GetallGenres,
  filterByPlatformDOS,
  filterByGenre,
  filterByAtoZDOS,
  filterByZtoADOS,
  filterByRatingAscDOS,
  filterByRatingDescDOS,
  filterByPriceAscDOS,
  filterByPriceDescDOS,
  emptyFilteredvideogames,
} from "../../../redux/videogamesActions";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleFilter = () => {
    if (selectedPlatform) {
      dispatch(filterByPlatform(selectedPlatform));
    }
    if (selectedGenre) {
      dispatch(filterByGenre(selectedGenre));
    }
    // ... Resto de los filtros
  };

  const handleResetFilter = () => {
    dispatch(emptyFilteredvideogames());
    setSelectedPlatform(null);
    setSelectedGenre(null);
    // ... Resto de los filtros
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtros:</Text>
      <Text style={styles.subtitle}>Plataforma:</Text>
      <TouchableOpacity onPress={() => setSelectedPlatform('PlayStation 5')}>
        <Text
          style={[
            styles.filterOption,
            selectedPlatform === 'PlayStation 5' && styles.selectedFilterOption,
          ]}
        >
          PlayStation 5
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedPlatform('Xbox Series S/X')}>
        <Text
          style={[
            styles.filterOption,
            selectedPlatform === 'Xbox Series S/X' && styles.selectedFilterOption,
          ]}
        >
          Xbox Series S/X
        </Text>
      </TouchableOpacity>
      {/* Resto de filtros... */}
      <TouchableOpacity onPress={handleFilter}>
        <Text style={styles.applyButton}>Aplicar filtros</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResetFilter}>
        <Text style={styles.resetButton}>Limpiar filtros</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  filterOption: {
    fontSize: 16,
    marginBottom: 5,
  },
  selectedFilterOption: {
    fontWeight: 'bold',
    color: 'blue',
  },
  applyButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 20,
  },
  resetButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
  },
});

export default Filter;