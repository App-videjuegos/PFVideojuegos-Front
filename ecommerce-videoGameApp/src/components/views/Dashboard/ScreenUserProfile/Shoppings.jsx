import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../../utils/Card/Card";
import { getAllSlsUser, setLoading } from "../../../../redux/salesSlice";
import { getAllSalesUser } from "../../../../redux/salesActions";

import PurchaseCard from "./PurchaseCard";

const Shoppings = () => {
  const dispatch = useDispatch();
  const loged = useSelector((state) => state.usersState.isLogged);

  const userSales = useSelector((state) => state.salesState.allSlsUsr);
  const isLoading = useSelector((state) => state.salesState.loading);

  useEffect(() => {
    dispatch(getAllSalesUser(loged.id));
    
  }, []);

  // console.log("estado allSlsUsr", userSales);
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const data = [
    { id: "1", text: "Elemento 1" },
    { id: "2", text: "Elemento 2" },
    // ... más elementos ...
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Purchase</Text>
      {!userSales && (
        <Text style={styles.heading}>You don't have any purchase yet.</Text>
      )}
      {userSales && (
        <FlatList
          data={userSales}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <PurchaseCard videoG={item} />}

          //renderItem={({ item }) => <Card videoG={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // loadingContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default Shoppings;
