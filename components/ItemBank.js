import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const ItemBank = ({ item }) => {
  const { id, bankName, description, age, url } = item;

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 150,
        borderColor: "#4D4A95",
        borderWidth: 1.5,
        marginBottom: 15,
        borderRadius: 16,
      }}
    >
      <Image
        source={{ uri: url }}
        style={styles.img}
        width={120}
        height={120}
        resizeMode="stretch"
      />

      <View
        style={{
          width: "60%",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginLeft: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}>
          {bankName}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 12 }}>{description}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            width: "90%",
            textAlign: "right",
            color: "#4D4A95",
          }}
        >
          {age}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
    marginLeft: 10,
  },
});
