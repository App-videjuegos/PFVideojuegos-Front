import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

const GameItem = ({ image, videoGameName, quantity, unitPrice }) => (
  <View style={styles.gameItemContainer}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.itemDetails}>
      <Text style={styles.videoGameName}>{videoGameName}</Text>
      <Text style={styles.quantity}>Quantity: {quantity}</Text>
      <Text style={styles.unitPrice}>Price: ${unitPrice}</Text>
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
              <View key={item.videogameName} style={styles.gameItemContainer}>
                <GameItem
                  key={item.videogameName}
                  image={item.image}
                  videoGameName={item.videogameName}
                  quantity={item.quantity}
                  unitPrice={item.unitPrice}
                />
              </View>
            ))}
            <View style={styles.divider} />

            <View style={styles.leftAlignedContainer}>
              <Text style={styles.orderNumber}>Order Number: {id}</Text>
              <Text style={styles.amount}>
                Amount: $
                {items.reduce((total, item) => total + item.unitPrice, 0)}
              </Text>
              <Text style={styles.date}>Date of Purchase: {date}</Text>
              <Text style={styles.quantityItems}>
                Quantity Items: {items.length}
              </Text>
              <Text style={styles.salesStatus}>
                Sales Status: {salesStatus}
              </Text>
            </View>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  } else if (!visible && !closeModal && !purchaseDetails) {
    return (
      <Text style={styles.modalText}>
        VideoGameName:No purchase details found.
      </Text>
    );
  }
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro semi-transparente
    width: "100%",
    height: "100%",
  },
  modalContent: {
    backgroundColor: "#FFFFFF", // Color de fondo BLANCO
    borderRadius: 8,
    padding: 16,
    width: "50%",
    height: "80%",
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
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 39,
    marginTop: 16,
    marginBottom: 50,
    color: "#1B063E", // Color del texto en tono morado oscuro;
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
    marginRight: 8,
    borderRadius: 4,
  },
  itemDetails: {
    flex: 1,
  },
  videoGameName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#606060", // Color del texto en tono gris
    marginLeft: 8,
  },
  quantity: {
    fontSize: 16,
    color: "#606060", // Color del texto en tono gris
    marginLeft: 8,
  },
  unitPrice: {
    fontSize: 16,
    color: "#606060", // Color del texto en tono gris
    marginLeft: 8,
  },
  divider: {
    width: "100%",
    backgroundColor: "#622EDA", // Color de la línea en tono azul más oscuro
    marginVertical: 16,
    height: 5,
  },
  orderNumber: {
    fontSize: 20,
    color: "#606060", // Color del texto gris
    marginBottom: 8,
  },
  amount: {
    fontSize: 20,
    color: "#606060", // Color del texto gris
    marginBottom: 8,
  },
  date: {
    fontSize: 20,
    color: "#606060", // Color del texto gris
    marginBottom: 8,
  },
  quantityItems: {
    fontSize: 20,
    color: "#606060", // Color del texto en gris
    marginBottom: 8,
  },
  salesStatus: {
    fontSize: 20,
    color: "#606060", // Color del texto en tono gris
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "#622EDA", // Color del botón en tono azul más oscuro
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 16,
  },
  closeButtonText: {
    color: "#FFF", // Color del texto en blanco
    textAlign: "center",
    fontSize: 24,
  },
  gameItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginLeft: 90,
  },
  leftAlignedContainer: {
    alignItems: "flex-start",
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default PurchaseDetails;
