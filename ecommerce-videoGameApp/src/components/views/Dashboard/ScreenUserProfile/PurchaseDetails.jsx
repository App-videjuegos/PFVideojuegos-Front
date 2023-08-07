//linea para llamar a modo DARK
import { ThemeContext } from "../../../utils/theme/ThemeProvider";
import { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
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
  //linea para setear el lenguaje /obtener palabras de lenguaje
  const { StringsDark } = useContext(ThemeContext);

  if (visible && closeModal && purchaseDetails) {
    const { id, date, salesStatus, items } = purchaseDetails;
    const simpleid = id.slice(0, 12);
    // Función para formatear la fecha en formato "dia-mes-año"
    const formatDate = (dateString) => {
      // nativa de JS
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${day}-${month}-${year}`;
    };

    const formattedDate = formatDate(date);
    return (
      <Modal
        animationType="slide"
        visible={visible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <View style={styles.Scroll}>
                <Text
                  style={[styles.modalTitle, { color: StringsDark.modalTitle }]}
                >
                  Sale Detail
                </Text>
                {items.map((item) => (
                  <View
                    key={item.videogameName}
                    style={styles.gameItemContainer}
                  >
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
                  <View style={styles.orderNumber}>
                    <Text style={styles.NameDetails}>Order Number:</Text>

                    <Text style={{ color: "#987BDC", fontSize: 20 }}>
                      {simpleid}
                    </Text>
                  </View>

                  <View style={styles.amount}>
                    <Text style={styles.NameDetails}>Amount:</Text>
                    <Text style={{ color: "#987BDC", fontSize: 20 }}>
                      ${" "}
                      {items.reduce((total, item) => total + item.unitPrice, 0)}
                    </Text>
                  </View>

                  <View style={styles.date}>
                    <Text style={styles.NameDetails}>Date of Purchase:</Text>
                    <Text style={{ color: "#987BDC", fontSize: 20 }}>
                      {formattedDate}
                    </Text>
                  </View>

                  <View style={styles.quantityItems}>
                    <Text style={styles.NameDetails}>Quantity Items:</Text>
                    <Text style={{ color: "#987BDC", fontSize: 20 }}>
                      {items.length}
                    </Text>
                  </View>

                  <View style={styles.salesStatus}>
                    <Text style={styles.NameDetails}>Sales Status:</Text>

                    <Text style={{ color: "#00D37B", fontSize: 20 }}>
                      {salesStatus}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeModal}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    // height: "100%",
  },
  modalContent: {
    backgroundColor: "#FFFFFF", // Color de fondo BLANCO
    borderRadius: 8,
    // padding: 12,
    marginBottom: 10,
    marginTop: 10,
    width: "88%",
    // height: "80%",
    alignItems: "center",
    alignContent: "center",
    shadowColor: "#000", // sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  Scroll: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },
  modalTitle: {
    fontFamily: "Roboto",
    fontWeight: 600,
    fontSize: 30,
    lineHeight: 39,
    textAlign: "center",
    height: 80,
    paddingTop: 20,
    fontWeight: "bold",
    // color: "#1B063E", // Color del texto en tono morado oscuro;
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
  NameDetails: {
    fontWeight: "bold",
    color: "#1B063E",
    fontSize: 20,
  },
  itemDetails: {
    flex: 1,
  },
  videoGameName: {
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
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    color: "#987BDC", // Color del texto gris
    marginBottom: 8,
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    color: "#987BDC", // Color del texto gris
    marginBottom: 8,
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    color: "#987BDC", // Color del texto gris
    marginBottom: 8,
  },
  quantityItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    color: "#987BDC", // Color del texto gris
    marginBottom: 8,
  },
  salesStatus: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    color: "#987BDC", // Color del texto gris
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: "#622EDA", // Color del botón en tono azul más oscuro
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 20,
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
    marginBottom: 10,
    // marginLeft: 90,
    width: "97%",
  },
  leftAlignedContainer: {
    alignItems: "flex-start",
    marginBottom: 16,
    // marginLeft: 10,
  },
});

export default PurchaseDetails;
