import React, { useState } from "react";
import { 
  Text, View, StyleSheet, TextInput, FlatList, Image, TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([
    { id: 1, title: "Community Event", image: "https://source.unsplash.com/random/200x200?event" },
    { id: 2, title: "Volunteer Work", image: "https://source.unsplash.com/random/200x200?volunteer" },
    { id: 3, title: "Local Fundraiser", image: "https://source.unsplash.com/random/200x200?fundraiser" },
    { id: 4, title: "Job Opportunity", image: "https://source.unsplash.com/random/200x200?job" },
  ]);

  return (
    <>
      
      <View style={styles.container} />

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search areas near you..."
          placeholderTextColor={888}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Image source={{ uri: item.image }} style={styles.resultImage} />
            <Text style={styles.resultText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={styles.centerButton}
          onPress={() => navigation.navigate("index")} 
        >
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
            style={styles.centerButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.logButton} 
          onPress={() => navigation.navigate("LogHours")}  
        >
          <Image 
            source={{ uri: "https://static.thenounproject.com/png/4836951-200.png" }}
            style={styles.logButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.searchButtonB} 
          onPress={() => navigation.navigate("Search")}  
        >
          <Image 
            source={{ uri: "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" }}
            style={styles.searchButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.profileButton} 
          onPress={() => navigation.navigate("Profile")}  
        >
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png" }}
            style={styles.profileButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.fundButton} 
          onPress={() => navigation.navigate("Fundraisers")}  
        >
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/7500/7500362.png" }}
            style={styles.fundButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6", 

  },
  searchBarContainer: {
    position: "absolute",
    top: 45, 
    width: "100%",
    zIndex: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  resultItem: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  resultImage: {
    width: "100%",
    height: 150,
  },
  resultText: {
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomBar: {
    backgroundColor: "#ADD8E6", 
    height: 100, 
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  centerButton: {
    position: "absolute",
    top: 10, 
    bottom: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50, 
    justifyContent: "center",
    alignItems: "center",
  },
  centerButtonIcon: {
    width: 35,  
    height: 35,
    tintColor: "#ADD8E6",
  },
  logButton: {
    position: "absolute",
    top: 20, 
    bottom: 30,
    left: 69,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50, 
    justifyContent: "center",
    alignItems: "center",
  },
  logButtonIcon: {
    width: 30,  
    height: 32,
    tintColor: "#ADD8E6",
  },
  searchButtonB: {
    position: "absolute",
    top: 20,
    bottom: 30,
    left: 10,
    backgroundColor: "white",
    padding: 12,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonIcon: {
    width: 25,
    height: 25,
    tintColor: "#ADD8E6",
  },
  profileButton: {
    position: "absolute",
    top: 20,
    bottom: 30,
    right: 10,
    backgroundColor: "white",
    padding: 6,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButtonIcon: {
    width: 40,
    height: 40,
    tintColor: "#ADD8E6",
  },
  fundButton: {
    position: "absolute",
    top: 20,
    bottom: 30,
    right: 70,
    backgroundColor: "white",
    padding: 6,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  fundButtonIcon: {
    width: 40,
    height: 40,
    tintColor: "#ADD8E6",
  },
});

export default Search;
