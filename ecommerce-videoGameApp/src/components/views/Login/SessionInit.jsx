import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
    Alert,
  } from "react-native";
import {
    color_gris_c,
    color_morado_o,
    color_celeste,
    color_morado_c2,
    color_gris_595959,
    color_gris_dadada,
    color_morado_sc1,
    color_rojo,
    color_gris_cdcdcd,
  } from "../../utils/theme/stringsColors";

  import imageUser from "../../../../assets/imageUser.png";

export const StartedSession = () => {

    const handleSubmit =()=>{
        
    }

  return(
  <View>
    <View style={[styles.header]}>
      <Image
        style={styles.logo}
        source={require("../../../../assets/logoLigth.png")}
      ></Image>
    </View>
    <View style={[styles.bgCont]}>
      <TouchableOpacity style={[styles.ImageButton]}>
        <Image
          source={imageUser}
          style={{ margin: 5, width: 200, height: 200 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.miniButton]} onPress={handleSubmit}>
        <Text style={[styles.buttonText]}>Logout</Text>
      </TouchableOpacity>
    </View>
    
  </View>
  )
};

const styles = StyleSheet.create({
    ImageButton: {
        marginTop: 300,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
        backgroundColor: color_morado_o,
        borderRadius: 125,
      },
  miniButton: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 32,
    height: 42,
    width: 315,
    padding: 0,
    backgroundColor: color_morado_c2,
    borderRadius: 8,
  },

  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: color_gris_c,
  },

  logo: {
    marginTop: 42,
    marginBottom: 42,
    height: 42,
    width: 315,
  },
  header: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color_gris_c,
    width: "100%",
  },
  bgCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color_gris_c,
  },

});
