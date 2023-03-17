import PropTypes from "prop-types";
import React, { createContext, useEffect, useMemo, useState } from "react";
import API from "../Api";
import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("db.testDb");

const initialValue = null;

export const ContextApp = createContext({ initialValue });

export const AppProvider = ({ children }) => {
  const [banks, setBanks] = useState(initialValue);
  const [validateDataBase, setValidateDataBase] = useState(false);

  const getBanks = () => {
    validateIfDataBank();
  };

  useEffect(() => {
    if (banks && banks.length == 0 && !validateDataBase) {
      fetchBank();
    }
  }, [banks]);

  const validateIfDataBank = async () => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM Banks;`,
        null,
        (_, { rows: { _array } }) => setBanks(_array),
        (txObj, error) => console.log("Error ", error)
      );
    });
    return true;
  };

  const fetchBank = async () => {
    try {
      const response = await API.getBanksFromServer();
      response.map((item) => {
        AddInfoBankToDatabase(item);
      });
      setValidateDataBase(true);
      console.log(response, "LOOK");
    } catch (error) {
      console.log(error);
    }
  };

  const AddInfoBankToDatabase = ({ bankName, description, age, url }) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Banks (bankName, description, age, url) values (?, ?, ?, ?)",
        [bankName, description, age, url],
        (txObj, resultSet) =>
          setBanks([
            ...banks,
            { id: resultSet.insertId, bankName, description, age, url },
          ]),
        (txObj, error) => console.log("Error", error)
      );
    });
  };

  const userDataValue = useMemo(() => ({ banks, getBanks }), [banks]);
  return (
    <ContextApp.Provider value={userDataValue}>{children}</ContextApp.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.any,
};
