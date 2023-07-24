import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Reload = () => {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState('');

  const imageArray = [
    'https://i.gifer.com/ZHDR.gif',
    'https://i.gifer.com/origin/f7/f777401addf0210bb0e8fa134f5c4fef_w200.gif',
    'https://usagif.com/wp-content/uploads/2020/11/am0ngsusxh-43.gif',
    'https://i0.wp.com/www.puntogeek.com/wp-content/uploads/2013/11/hC2dAuK.gif?resize=150%2C150',
    'https://i.gifer.com/origin/80/80908d38aba2e9a2e49315b0cc20b61b.gif'
    // Agrega aquí más URLs de imágenes en el array
  ];

  useEffect(() => {
    // Simulación de tiempo de carga
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      const randomImage = imageArray[randomIndex];
      setSelectedImage(randomImage);
      setLoading(false);
    }, 2000); // Cambia este valor para ajustar el tiempo de carga simulado
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          {/* Agrega aquí un componente de carga o un indicador de carga */}
        </View>
      ) : (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:"center",

    
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode:"center",
  },
});

export default Reload;