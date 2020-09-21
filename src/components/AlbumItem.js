import React from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { Card, CardSection, Button } from "./common";

const AlbumItem = ({ title, artist, url, image, thumbnail_image }) => {
  const {
    cardStyle,
    headerStyle,
    thumbnailStyle,
    detailStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection style={cardStyle}>
        <View style={headerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
          <View style={detailStyle}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>
            <Text style={{ opacity: 0.5 }}>{artist}</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Image source={{ uri: image }} style={imageStyle} />
        </View>
        <Button onPress={() => Linking.openURL(url)}>Buy Album</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    justifyContent: "center",
    flexDirection: "column",
  },
  headerStyle: {
    flexDirection: "row",
    marginBottom: 10,
  },
  thumbnailStyle: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  detailStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  imageStyle: {
    flex: 1,
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default AlbumItem;
