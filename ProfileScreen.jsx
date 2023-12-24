import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    console.log(route.params.item.url);
    let url = route.params.item.url;
    axios
      .get(url)
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log("profile", profile);
  return (
    <View
      style={{
        width: "100%",
        padding: 10,
        height: 300,
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text>Pokemon Name : {profile.name}</Text>
      <Text>Pokemon Height : {profile.height}</Text>
      <Text>Pokemon Height : {profile.order}</Text>
    </View>
  );
};

export default ProfileScreen;
