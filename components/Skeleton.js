import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  ScrollView,
} from "react-native";

export const Skeleton = () => {
  const circleAnimatedValue = useRef(new Animated.Value(0)).current;

  const circleAnimated = () => {
    circleAnimatedValue.setValue(0);
    Animated.timing(circleAnimatedValue, {
      toValue: 1,
      duration: 450,
      useNativeDriver: false,
    }).start(() => {
      setTimeout(() => {
        circleAnimated();
      }, 700);
    });
  };

  useEffect(() => {
    circleAnimated();
  }, []);

  const translateX = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, Dimensions.get("window").width],
  });

  const translateX2 = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, Dimensions.get("window").width],
  });
  const translateX3 = circleAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, Dimensions.get("window").width],
  });
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.container}>
        <View style={[{ flexDirection: "column", marginBottom: 60 }]}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              borderRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
        <View style={[{ flexDirection: "column", marginBottom: 60 }]}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              borderRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
        <View style={[{ flexDirection: "column", marginBottom: 60 }]}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              borderRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
        <View style={[{ flexDirection: "column", marginBottom: 60 }]}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              borderRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
        <View style={[{ flexDirection: "column", marginBottom: 60 }]}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              borderRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
        <View style={[{ flexDirection: "column", marginBottom: 60 }]}>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              borderRadius: 30,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 16,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 80,
                borderRadius: 15,
                backgroundColor: "#c9ccce",
                overflow: "hidden",
              }}
            >
              <Animated.View
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX3 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: "100%",
    height: 80,
    flex: 1,
    marginTop: 124,
    backgroundColor: "white",
  },

  card: {
    shadowColor: "black",
    borderRadius: 4,
    backgroundColor: "#FAFAFA",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    height: 150,
    shadowOpacity: 0.1,
    flexDirection: "row",
  },
});
