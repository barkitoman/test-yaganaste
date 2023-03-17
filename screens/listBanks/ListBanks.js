import React, { useContext, useEffect, useReducer } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { ItemBank } from "../../components/ItemBank";
import { ContextApp } from "../../context/ContextApp";

export const ListBanks = ({ type }) => {
  const { banks } = useContext(ContextApp);

  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <FlatList
        data={banks}
        style={styles.bankList}
        keyExtractor={(item, index) => `_${index}`}
        renderItem={ItemBank}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bankList: {
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});
