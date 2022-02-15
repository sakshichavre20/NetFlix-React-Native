import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import axios from "axios";

const Categories = ({ navigation, setopenModel }) => {
  //  console.log(props);
  const data = [
    {
      name: "Home",
    },
    {
      name: "My List",
    },
    {
      name: "Available for DownLoads",
    },
    {
      name: "Hindi",
    },
    {
      name: "Tamil",
    },
    {
      name: "Punjabi",
    },
    {
      name: "Telgu",
    },
    {
      name: "Malayalam",
    },
    {
      name: "Marathi",
    },
    {
      name: "English",
    },
    {
      name: "Anime",
    },
    {
      name: "Children",
    },
    {
      name: "Romantic ",
    },
    {
      name: "Thrill",
    },
    {
      name: "Suspense",
    },
    {
      name: "comedy",
    },
  ];
  const [selected, setselected] = useState("Home");
  return (
    <View style={styles.categories}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        style={{ paddingVertical: 30, paddingBottom: 550 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ alignItems: "center", padding: 10 }}
              onPress={() => {
                setselected(item.name);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: selected === item.name ? 22 : 18,
                  fontWeight: selected === item.name ? "bold" : null,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => setopenModel(false)}
        style={{ alignSelf: "center" }}
      >
        <Entypo name="circle-with-cross" size={64} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Rows = ({ navigation, rowTitle }) => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=all`)
        .then((response) => {
          //  console.log(response.data);
          setMovieData(response.data);
        });
    };
    fetchArticles();
  }, []);
  return (
    <View style={{ padding: 15 }}>
      <Text style={{ color: "white", fontWeight: "bold" }}>{rowTitle}</Text>
      <FlatList
        horizontal={true}
        data={movieData}
        keyExtractor={(item) => item.show.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={() => navigation.navigate("Details", { item: item })}
            >
              <Image
                source={{ uri: item.show.image.original }}
                style={{ height: 150, width: 90, borderRadius: 5 }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export { Categories, Rows };

const styles = StyleSheet.create({
  categories: {
    position: "absolute",

    flex: 1,
    zIndex: 20,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,1)",
  },
});
