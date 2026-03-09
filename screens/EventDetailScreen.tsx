import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function EventDetailScreen({ route }: any) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: event.image }} style={styles.image} />

      <Text style={styles.title}>{event.title}</Text>

      <Text style={styles.info}>📅 {event.date}</Text>
      <Text style={styles.info}>📍 {event.location}</Text>

      <Text style={styles.description}>{event.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});