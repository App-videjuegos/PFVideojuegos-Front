import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import HTML from 'react-native-render-html';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

const CardExtra = (videogame) => {
  // const {requeriments_en}=videogame.propExtra;
  const windowWidth = useWindowDimensions().width;
 
  // console.log("extra requerimientos", videogame.videogame);
  let Req = videogame.propExtra.requeriments_en;
  const tagsStyles = {
    p: { color: 'red', fontSize: 16 ,},
    strong: { fontWeight: 'bold' ,color:`#FFFFFF`},
    a: { color: 'blue', textDecorationLine: 'underline', },
    li:{color: `#7d7f7d`},
    ul:{color: `#7d7f7d`},

    if (item.length >= 3) {
      const platformPrefix = item.substring(0, 2).toLowerCase();
      // console.log("platformPrefix",item)
      // Asigna el nombre del icono en función de las tres primeras letras
      if (platformPrefix === 'pl') {
        iconName = 'sony-playstation';
      } else if (platformPrefix === 'xb') {
        iconName = 'microsoft-xbox';
      } else if (platformPrefix === 'ni') {
        iconName = 'nintendo-switch';
      } else if (platformPrefix === 'pc') {
        iconName = 'microsoft-windows';
      } else if (platformPrefix === 'ma') {
        iconName = 'apple-ios';
      } else if (platformPrefix === 'an') {
        iconName = 'android';
      } else if (platformPrefix === 'li') {
        iconName = 'penguin';
      }
    }

    return iconName;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.cardContainer, { backgroundColor: '#FFFFFF' }]}>
          { Req.length>0 && (
              <Text style={[styles.reqtitle, { color: '#FF8800' }]}>
              Requerimientos
              </Text>
          )}
          
         { Req.length>0 && (
          <View>
            {Req.map((item, index) => (
              <View key={index} style={styles.htmlContainer}>
                <HTML source={{ html: item.minimum }} contentWidth={windowWidth} tagsStyles={tagsStyles} />
                <HTML source={{ html: item.recommended }} contentWidth={windowWidth} tagsStyles={tagsStyles} />
              </View>
            ))}
          </View>
            )
          }
        {/* <View>
          {videogame.videogame.plataformas.length>0 && ( 
            <Text style={[styles.title, { color: StringsDark.txtClaro }]}>
            {StringsLanguaje.Plataformas}
            </Text> 
          )}
          {videogame.videogame.plataformas.length>0 && ( videogame.videogame.plataformas.map((item, index) => (
              <View>
              <Text  key={index}style={[styles.text, { color: StringsDark.text }]}>
                <MaterialCommunityIcons name="pricetag-outline" />
                {item}
              </Text>
            </View>
            )))
          }
          {videogame.videogame.generos.length>0 && (
            <Text style={[styles.title, { color: StringsDark.txtClaro }]}>
              {StringsLanguaje.Genres}
            </Text>
          )}
          {videogame.videogame.generos.length>0 && (videogame.videogame.generos.map((item, index) => (
            <View>
            <Text  key={index} style={[styles.text, { color: StringsDark.text }]}>
              <MaterialCommunityIcons name="pricetag-outline" />
              {item}
            </Text>
          </View>
          ))
          )
        }
        </View> */}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    margin:40,
    // marginLeft:50,
    // marginRight: 50,
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    width: '90%',
    borderRadius: 8,
  },
  title: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'left',
    fontWeight: '800',
  },
  text: {
    marginLeft: 15,
    fontSize: 18,
    marginTop: 8,
    fontWeight: '800',
  },
  reqtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  req: {
    fontSize: 20,
  },
  htmlContainer:{
    color:'white',
    marginLeft:10,
  },

 

   
  });
  
  export default CardExtra;