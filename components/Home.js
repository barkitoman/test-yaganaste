import { StatusBar } from "expo-status-bar";

import { Animated, Dimensions, Image, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import React, { useContext, useEffect, useReducer } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { colors } from "../styles/base";
import { Skeleton } from "./Skeleton";
import { ContextApp } from "../context/ContextApp";
import { ListBanks } from "../screens/listBanks/ListBanks";

const initialState = {
  loading: true,
};

export default function Home() {
  const initalSt = { ...initialState };
  const [state, dispatch] = useReducer(reducer, initalSt);
  const { loading } = state;
  const { banks } = useContext(ContextApp);

  const triggerDispatch = (type, payload) => {
    dispatch({ type, payload });
  };

  useEffect(() => {
    setTimeout(() => {
      if (banks && banks.length > 0) {
        triggerDispatch(SET_LOADING, false);
      }
    }, 2000);
  }, [banks]);

  if (loading) {
    return <Skeleton />;
  }

  return <ListBanks />;
}

const ACTIONS = {
  SET_LOADING: "setLoading",
  SET_DATA_TAGS_LIST: "setPostList",
};

const { SET_LOADING, SET_DATA_TAGS_LIST, SET_REQUEST } = ACTIONS;

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
  }
};
