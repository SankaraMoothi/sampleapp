import axios from "axios";

import { useEffect, useState } from "react";

import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setState(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handlePress = (item) => {
    navigation.navigate("Profile", { item });
  };
  return (
    <ScrollView style={{ padding: 5 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={state}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "yellow",
                  flex: 1,
                  marginRight: 5,
                  width: "50%",
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text onPress={() => handlePress(item)}>{item.name}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
