import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { Event } from "../types/Event";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    const newState = !favorite;
    setFavorite(newState);

    if (newState) {
      Alert.alert("Favori ajouté", event.title + " ajouté aux favoris");
    }
  };

  return (
    <View style={styles.card}>

      <Image
        source={{ uri: event.image }}
        style={styles.image}
      />

      <View style={styles.content}>

        <View style={styles.row}>
          <Text style={styles.title}>{event.title}</Text>

          <TouchableOpacity onPress={toggleFavorite}>
            <Text style={styles.heart}>
              {favorite ? "❤️" : "🤍"}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.info}>📅 {event.date}</Text>
        <Text style={styles.info}>📍 {event.location}</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3
  },

  image: {
    width: "100%",
    height: 180
  },

  content: {
    padding: 12
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 18,
    fontWeight: "bold"
  },

  heart: {
    fontSize: 22
  },

  info: {
    color: "#666",
    marginTop: 4
  }

});