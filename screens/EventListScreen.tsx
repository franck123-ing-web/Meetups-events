import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet
} from "react-native";
import EventCard from "../components/EventCard";
import { EVENTS } from "../data/events";
import { Event } from "../types/Event";

export default function EventListScreen() {
  const [search, setSearch] = useState("");

  const filteredEvents = EVENTS.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) ||
    event.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Meetups Events</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher par titre ou lieu..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredEvents}
        keyExtractor={(item: Event) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 20
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center"
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  list: {
    paddingBottom: 20
  }
});