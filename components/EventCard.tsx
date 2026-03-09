import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Event } from "../types/Event";

type Props = {
  event: Event;
};

export default function EventCard({ event }: Props) {
  const navigation = useNavigation<any>();
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    Alert.alert(
      liked ? "Retiré des favoris" : "Ajouté aux favoris"
    );
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("EventDetail", { event })
      }
    >
      <Image source={{ uri: event.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{event.title}</Text>

          <TouchableOpacity onPress={toggleLike}>
            <Text style={[styles.heart, liked && styles.heartActive]}>
              ♥
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.info}>📅 {event.date}</Text>
        <Text style={styles.info}>📍 {event.location}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 180,
  },

  content: {
    padding: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  heart: {
    fontSize: 22,
    color: "#ccc",
  },

  heartActive: {
    color: "red",
  },

  info: {
    fontSize: 14,
    marginTop: 4,
    color: "#555",
  },
});