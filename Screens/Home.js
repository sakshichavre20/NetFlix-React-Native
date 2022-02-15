import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Sizes } from "../Constants/Constants";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { Categories, Rows } from "../Componenets/Components";

const Home = (props) => {
  const [openModel, setopenModel] = useState(false);
  const id = Math.floor(Math.random() * 20);

  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=all`)
        .then((response) => {
          // console.log("HOme", response.data[0].show.image.original);
          setMovieData(response.data);
        });
    };
    fetchArticles();
  }, []);

  //    useEffect(() => {
  //      const fetchMovies = async () => {
  //        instance.get(Requests.fetchTrending).then((response) => {
  //          console.log(response.data.results[id]);
  //          setMovies(response.data.results[id]);
  //        });
  //      };
  //      fetchMovies();
  //    }, []);

  return (
    <>
      {openModel && (
        <Categories navigation={props.navigation} setopenModel={setopenModel} />
      )}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <LinearGradient
          style={{
            height: (Sizes.width * 1.5) / 5,
            width: "100%",
            position: "absolute",
            paddingTop: 5,
            zIndex: 20,
            // top: 40,
            // paddingTop: 40,
          }}
          colors={[Colors.bg, "#0b0b0baa", "#fff0"]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Image
              source={require("../assets/logo.png")}
              style={{ height: 50, width: 50 }}
              resizeMode="cover"
            />

            <TouchableOpacity
            //   onPress={() => {
            //     props.navigation.navigate("Profile");
            //   }}
            >
              <Image
                source={{
                  //  uri: movieData.show.image.original,
                  uri: "https://media.gettyimages.com/photos/bearded-businessman-against-gray-background-picture-id1179627332?s=612x612",
                }}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 10,
                  marginLeft: 20,
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>Tv Shows</Text>
            <Text style={{ color: "white", fontSize: 15 }}>Movies</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 15, paddingRight: 10 }}>
                Categories
              </Text>

              <AntDesign
                name="caretdown"
                size={20}
                color="white"
                onPress={() => setopenModel(true)}
              />
            </View>
          </View>
        </LinearGradient>

        <Image
          source={{
            uri: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
            // uri: JSON.stringify(movieData.show.image.original),
          }}
          style={{ width: Sizes.width, height: Sizes.height / 1.5 }}
        />
        <LinearGradient
          style={{
            height: (Sizes.width * 1.5) / 5,
            width: "100%",
            position: "absolute",
            paddingTop: 5,
            zIndex: 20,
            top: "40%",
            // top: 40,
            // paddingTop: 40,
            justifyContent: "flex-end",
          }}
          colors={["transparent", Colors.bg]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <AntDesign name="plus" size={24} color="white" />
              <Text style={{ color: "white" }}>My List</Text>
            </View>
            <View
              style={{
                padding: 5,
                borderRadius: 4,
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Entypo name="controller-play" size={24} color="black" />
              <Text style={{ color: "black" }}>Play</Text>
            </View>
            <TouchableOpacity
              style={{ alignItems: "center", justifyContent: "center" }}
              //   onPress={() =>
              //    // props.navigation.navigate("Details", { item: movieData })
              //   }
            >
              <AntDesign name="plus" size={24} color="white" />
              <Text style={{ color: "white" }}>Info</Text>
            </TouchableOpacity>
          </View>
          {/* <Rows rowTitle="Netflix Oroginal" /> */}
        </LinearGradient>
        <View style={{ paddingTop: 30 }}>
          <Rows rowTitle="Netflix Oroginal" navigation={props.navigation} />

          <Rows rowTitle="Comedy" navigation={props.navigation} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    height: "70%",
    width: "100%",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  scrollView: {
    height: "20%",
    width: "100%",
    // margin: 20,
    alignSelf: "center",

    backgroundColor: Colors.bg,
    // backgroundColor: "pink",
  },
  contentContainer: {
    paddingBottom: 100,
  },
});
