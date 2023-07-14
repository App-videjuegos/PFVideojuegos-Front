import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { PureComponent } from 'react';
import StarRating from 'react-native-star-rating';
import dataVideojuegos from '../dataVideojuegos';

  
 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <TouchableOpacity onPress={() =>nav.navigate('Detail', {videoGames: videoG  })}> 
        <Image 
            style={styles.image} 
            source={{ uri: videoG.image }} 
            PlaceholderContent={<ActivityIndicator color={'#FFFFFF'} size={"large"}/>}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
          <Text style={styles.name}>{videoG.name}</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={videoG.rating}
            starSize={20}
            fullStarColor="gold"
            emptyStarColor="gold"
          />
          <Text style={styles.price}>{videoG.price}</Text>
          <TouchableOpacity onPress={() => nav.navigate('Detail', { videoGames: videoG })}>
            <Text style={styles.detail}>Ver Detalle</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 3,
      flexDirection:'row',
      justifyContent:'space-around',
      width: '93%',   
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 10,
      // shadowColor: 'black',
      shadowOpacity: 0.23,
      shadowOffset: { width: 1, height: 2 },
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: '#987BDC',
    },
    imageContainer: {
      alignItems: 'center',
      // flex:1
       width: '45%',
        // height: '100%',
      // marginRight: 10 , 
      marginLeft:5,
      // backgroundColor:'blue
    },
    image: {
      marginTop:10,
      marginBottom:10,
      // marginLeft: -10,
      width: 120,
      height: 140,
      borderRadius:8,   
      // alignSelf:'center',
      alignContent:'center',
      resizeMode: 'cover',
    },
    detailsContainer: {
      width: '50%',
      // height:'100%',
      // alignContent:'center',
      alignItems:'center',
    },
    name: {
      fontSize:15 ,
      alignContent:'center',
      alignItems:'center',
      textAlign:'center',
      verticalAlign:'middle',
      fontWeight: 'bold',
      height: 37,
    },
    rating: {
      fontSize: 16,
      textAlign: 'center',
    },
    price: {
      fontSize: 20,
      textAlign:'center',
      fontWeight: 'bold',
      height:25,
      color :'white',
    },
    detail:{
      fontSize: 15,
      textAlign:'center',
    }
  });

export default Card ;




