import {
  View,
  StyleSheet,
  Button,
  Alert,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import { removeItem, cleanCart } from './CardCartController';
import { useDispatch } from 'react-redux';
import { updateCart } from '../../../redux/cartSlice';
//linea para llamar a modo DARK
import { ThemeContext } from '../../utils/theme/ThemeProvider';
//linea para modificar el contexto de localizacion para el lenaguje
import { LanguajeContext } from '../../utils/languaje/languajeProvider';
import React, { useEffect, useState, useContext, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Pasarella = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const { StringsDark, isDarkMode } = useContext(ThemeContext);
  const { StringsLanguaje, locale } = useContext(LanguajeContext);
  const { Cart, tot, userid } = route.params;
  const cardFieldRef = useRef(null);

  useEffect(() => {
    // console.log("esta entrando ?")
    navigation.setOptions({
      headerTitle: `${StringsLanguaje.Pasarella}`,
      headerStyle: {
        backgroundColor: StringsDark.backgroundContainer,
      },
    });
  }, [isDarkMode, locale]);

  if (isNaN(tot)) {
    console.log('tot no es un número válido');
  } else {
    // Convertir tot a un número válido con dos decimales
    const amountfx = (Number(tot) * 100).toFixed(0);
    // console.log('precioVenta', amountfx);
    var datos = {
      items: Cart,
      amount: amountfx,
      userId: userid,
    };

    // console.log("Datos:", datos);
  }
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const subscribe = async () => {
    try {
      const response = await fetch(
        'https://pfvideojuegos-back-production.up.railway.app/pay',
        {
          method: 'POST',
          body: JSON.stringify({ datos }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      // console.log("lo que hay en data")
      // console.log(data)
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      // console.log("estoy bien")
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      });
      if (error) {
        alert(`Payment Confirmation Error ${error.message}`);
      } else if (paymentIntent) {
        const itemsFormat = JSON.stringify(datos.items);
        console.log('items formateados----> ' + itemsFormat);
        try {
          const response = await fetch(
            'https://pfvideojuegos-back-production.up.railway.app/createSale',
            {
              method: 'POST',
              body: JSON.stringify({
                paymentId: paymentIntent.id,
                amount: datos.amount,
                items: itemsFormat,
                userId: userid,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          const data = await response.json();
          // console.log('aqui q hay', data.message);

          if (data.message === 'ok') {
            // cleanCart();
            // dispatch(updateCart());
            setModalVisible(true);
            // navigation.navigate('HomeStack');
            alert('la compra fue aceptada');
            //aqui quiero un modal para mostrar el resumen de la compra y su confirmacion ")
          } else {
            alert(
              'It was not possible to complete the purchase, the payment has been refunded.'
            );
          }
        } catch (error) {
          alert(`Payment Confirmation Error ${error.message}`);
        }

        if (cardFieldRef.current) {
          cardFieldRef.current.clear(); // Limpia el contenido del CardField
        }
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Something went wrong, try again later!');
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: StringsDark.backgroundContainer },
      ]}
    >
      <View>
        <Image
          style={styles.logogameStack}
          source={require('../../../../assets/logoLigth.png')}
        ></Image>
      </View>
      <CardField
        ref={cardFieldRef}
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={[styles.card, { backgroundColor: StringsDark.txtprice }]}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />

      <Button
        onPress={subscribe}
        title={StringsLanguaje.chkOut}
        disabled={loading}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MaterialCommunityIcons
              name={'credit-card-check-outline'}
              size={40}
              color={'#3F13A4'}
            />

            <Text style={styles.modalText}>
              Congratulations Payment Accepted!!!
            </Text>
            <Text>info</Text>
            <Text>info</Text>
            <Text>info</Text>
            <Text>info</Text>
            <Text>info</Text>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={[
                  styles.closeButton,
                  { backgroundColor: '#3F13A4' },
                  { color: '#ffffff' },
                ]}
              >
                Salir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#efefefef',

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  logogameStack: {
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  card: {
    // backgroundColor: "green",
  },
  cardContainer: {
    height: 100,
    marginVertical: 30,
  },
  botonPago: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  modalContainer: {
    width: '100%',
    height: '40%',
    top: 50,
    left: 150,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  closeButton: {
    marginTop: 10,
    width: 150,
    height: 41,
    borderRadius: 10,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
});

export default Pasarella;
