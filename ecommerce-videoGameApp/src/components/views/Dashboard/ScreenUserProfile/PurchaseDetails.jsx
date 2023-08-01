import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const GameItem = ({ image, videoGameName, quantity, price }) => (
  <View style={styles.gameItemContainer}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.itemDetails}>
      <Text style={styles.videoGameName}>{videoGameName}</Text>
      <Text style={styles.quantity}>Quantity: {quantity}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
    </View>
  </View>
);

const PurchaseDetails = ({ visible, closeModal, purchaseDetails }) => {
  if (visible && closeModal && purchaseDetails) {
    const { id, date, salesStatus, items } = purchaseDetails;
    return (
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sale Detail</Text>
            {items.map((item) => (
              <GameItem
                key={item.videogameName}
                image={item.image}
                videoGameName={item.videogameName}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
            <View style={styles.divider} />
            <Text style={styles.orderNumber}>Order Number: {id}</Text>
            <Text style={styles.amount}>
              Amount: ${items.reduce((total, item) => total + item.price, 0)}
            </Text>
            <Text style={styles.date}>Date of Purchase: {date}</Text>
            <Text style={styles.quantityItems}>
              Quantity Items: {items.length}
            </Text>
            <Text style={styles.salesStatus}>Sales Status: {salesStatus}</Text>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  } else if (!visible && !closeModal && !purchaseDetails) {
    return <Text style={styles.modalText}>VideoGameName:No purchase details found.</Text>;
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
  },
  modalContent: {
    backgroundColor: "#E1F5FE", // Color de fondo en tono azul claro
    borderRadius: 8,
    padding: 16,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000", // sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1976D2", // Color del texto en tono azul más oscuro
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 4,
  },
  itemDetails: {
    marginLeft: 8, // margen izquierdo para separar la imagen del texto
  },
  videoGameName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1976D2", // Color del texto en tono azul más oscuro
    marginLeft: 8,
  },
  quantity: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginLeft: 8,
  },
  price: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginLeft: 8,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#1976D2", // Color de la línea en tono azul más oscuro
    marginVertical: 16,
  },
  orderNumber: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginBottom: 8,
  },
  amount: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginBottom: 8,
  },
  quantityItems: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginBottom: 8,
  },
  salesStatus: {
    fontSize: 16,
    color: "#2196F3", // Color del texto en tono azul
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "#1976D2", // Color del botón en tono azul más oscuro
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
  },
  closeButtonText: {
    color: "#FFF", // Color del texto en blanco
    textAlign: "center",
    fontSize: 16,
  },
  gameItemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
});

export default PurchaseDetails;
