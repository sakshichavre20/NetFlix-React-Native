import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Colors, Sizes } from "../Constants/Constants";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons, Octicons, Entypo } from "@expo/vector-icons";

const Details = (item) => {
  console.log("details", item.route.params.item);
  const data = item.route.params.item;
  const regex = /(<([^>]+)>)/gi;
  return (
    <ScrollView
      style={{}}
      contentContainerStyle={{
        backgroundColor: Colors.bg,
        //  height: "100%",
        marginBottom: 200,
        paddingBottom: 100,
      }}
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
            paddingTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              item.navigation.goBack();
            }}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
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
      </LinearGradient>

      <Image
        source={{
          // uri: "https://static.tvmaze.com/uploads/images/original_untouched/366/915863.jpg",
          uri: data.show.image.original,
        }}
        style={{ width: Sizes.width, height: Sizes.height / 2 }}
      />
      <LinearGradient
        style={{
          height: (Sizes.width * 1.5) / 5,
          width: "100%",
          position: "absolute",
          paddingTop: 5,
          zIndex: 20,
          top: "35%",
          // top: 40,
          // paddingTop: 40,
          justifyContent: "flex-end",
        }}
        colors={["transparent", Colors.bg]}
      ></LinearGradient>
      <View style={{ width: Sizes.width, padding: Sizes.padding }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
          {data.show.name}
        </Text>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>
            {data.show.premiered.slice(0, 4)}
          </Text>
          <Text style={{ color: "white", margin: 5 }}>
            {data.show.rating.average}
          </Text>
          <Text style={{ color: "white" }}>{data.show.rating.language}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {data.show.genres?.map((genres) => {
            return (
              <View
                key={genres}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 3,
                }}
              >
                <Octicons name="primitive-dot" size={15} color="white" />
                <Text style={{ color: "white", fontSize: 15, margin: 3 }}>
                  {genres}
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            width: "95%",
            height: 40,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
            marginVertical: 10,
          }}
        >
          <Entypo name="controller-play" size={24} color="black" />
          <Text style={{ color: "black" }}>Play</Text>
        </View>
        <View
          style={{
            width: "95%",
            height: 40,
            backgroundColor: "#2d2d2d",
            elevation: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 5,
            marginVertical: 5,
          }}
        >
          <AntDesign name="arrowdown" size={24} color="white" />
          <Text style={{ color: "white" }}>Download</Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            margin: 3,
            // maxWidth: "90%",
            textAlign: "center",
            marginTop: 20,
          }}
          // numberOfLines={5}
          // ellipsizeMode="tail"
        >
          {data.show.summary.replace(regex, "")}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={{ color: "white" }}>My List</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AntDesign name="like2" size={24} color="white" />
            <Text style={{ color: "white" }}>Like</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AntDesign name="sharealt" size={24} color="white" />
            <Text style={{ color: "white" }}>Share</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <AntDesign name="arrowdown" size={24} color="white" />
            <Text style={{ color: "white" }}>All seasons</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
