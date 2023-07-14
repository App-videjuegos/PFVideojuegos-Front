import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  applyPlatformFilter,
  applyGenreFilter,
  applyPriceRangeFilter,
  applyRatingFilter,
  applyReleaseDateFilter,
  applyRatingSortAsc,
  applyRatingSortDesc,
  applyPriceSortAsc,
  applyPriceSortDesc,
  applyReleaseDateSortAsc,
  applyReleaseDateSortDesc,
} from "../../../redux/videogamesActions";
import { clearFilters } from "../../../redux/videogamesSlice";

const Filter = ({ handleResetFilter, handleCloseFilter }) => {
  const dispatch = useDispatch();
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedReleaseDate, setSelectedReleaseDate] = useState(null);

  const handleFilter = () => {
    if (selectedPlatform) {
      dispatch(applyPlatformFilter(selectedPlatform));
    }
    if (selectedGenre) {
      dispatch(applyGenreFilter(selectedGenre));
    }
    if (minPrice !== 0 || maxPrice !== 0) {
      dispatch(applyPriceRangeFilter(minPrice, maxPrice));
    }
    if (selectedRating) {
      dispatch(applyRatingFilter(selectedRating));
    }
    if (selectedReleaseDate) {
      dispatch(applyReleaseDateFilter(selectedReleaseDate));
    }
  };

  const handleSort = (sortType) => {
    switch (sortType) {
      case "ratingAsc":
        dispatch(applyRatingSortAsc());
        break;
      case "ratingDesc":
        dispatch(applyRatingSortDesc());
        break;
      case "priceAsc":
        dispatch(applyPriceSortAsc());
        break;
      case "priceDesc":
        dispatch(applyPriceSortDesc());
        break;
      case "releaseDateAsc":
        dispatch(applyReleaseDateSortAsc());
        break;
      case "releaseDateDesc":
        dispatch(applyReleaseDateSortDesc());
        break;
      default:
        break;
    }
  };

  const handleClearFilters = () => {
    setSelectedPlatform(null);
    setSelectedGenre(null);
    setMinPrice(0);
    setMaxPrice(0);
    setSelectedRating(null);
    setSelectedReleaseDate(null);
    dispatch(clearFilters());
    handleResetFilter();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Filtros:</Text>
        <View style={styles.filterSection}>
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
          {/* Agregar más opciones de plataforma aquí */}
        </View>
        <View style={styles.filterSection}>
          <Text style={styles.subtitle}>Género:</Text>
          {/* Agregar opciones de género aquí */}
        </View>
        <View style={styles.filterSection}>
          <Text style={styles.subtitle}>Rango de precio:</Text>
          {/* Agregar campos de entrada de rango de precio aquí */}
        </View>
        <View style={styles.filterSection}>
          <Text style={styles.subtitle}>Rating:</Text>
          {/* Agregar opciones de rating aquí */}
        </View>
        <View style={styles.filterSection}>
          <Text style={styles.subtitle}>Fecha de lanzamiento:</Text>
          {/* Agregar opciones de fecha de lanzamiento aquí */}
        </View>
        <Text style={styles.title}>Ordenamientos:</Text>
        <View style={styles.sortSection}>
          <TouchableOpacity onPress={() => handleSort("ratingAsc")}>
            <Text style={styles.sortOption}>Rating Ascendente</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSort("ratingDesc")}>
            <Text style={styles.sortOption}>Rating Descendente</Text>
          </TouchableOpacity>
          {/* Agregar más opciones de ordenamiento aquí */}
        </View>
        <View style={styles.buttonsSection}>
          <TouchableOpacity onPress={handleClearFilters} style={styles.button}>
            <Text style={styles.buttonText}>Limpiar filtros</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFilter} style={styles.button}>
            <Text style={styles.buttonText}>Aplicar filtros</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button title="Cerrar" onPress={handleCloseFilter} />
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
  filterSection: {
    marginBottom: 20,
  },
  sortSection: {
    marginBottom: 20,
  },
  buttonsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  sortOption: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Filter;