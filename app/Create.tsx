import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Create = () => {
  const navigation = useNavigation();
  
  return (
    <>
     <View style={styles.container}>
      <Text style={styles.text}>This is the create screen</Text>
    </View>  
    <View style={styles.whiteBox} />

      <View style={styles.bottomBar}>
      <TouchableOpacity 
      style={styles.centerButton}
      onPress={() => navigation.navigate("index")} // This should work
    >
      <Image 
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png" }}
        style={styles.centerButtonIcon}
      />
    </TouchableOpacity>
        <TouchableOpacity 
          style={styles.logButton} 
          onPress={() => navigation.navigate("LogHours")}  // Navigate properly
        >
          <Image 
            source={{ uri: "https://static.thenounproject.com/png/4836951-200.png" }}
            style={styles.logButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.searchButtonB} 
          onPress={() => navigation.navigate("Search")}  // Navigate properly
        >
          <Image 
            source={{ uri: "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png" }}
            style={styles.searchButtonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.profileButton} 
          onPress={() => navigation.navigate("Profile")}  // Navigate properly
        >
          <Image 
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png" }}
            style={styles.profileButtonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.fundButton} 
          onPress={() => navigation.navigate("Fundraisers")}  // Navigate properly
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
    },
    searchBarContainer: {
      position: "absolute",
      top: 45, 
      width: "100%",
      zIndex: 10,
    },
    fadeBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 60,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "white",
      padding: 8,
      borderBottomWidth: 1,
      borderColor: "#ccc",
      zIndex: 10,
      marginTop: 5,
    },
    searchInput: {
      flex: 1,
      height: 40,
      borderRadius: 5,
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 10,
      fontSize: 16,
    },
    cancelButton: {
      marginLeft: 10,
      paddingVertical: 5,
    },
    cancelText: {
      color: "blue",
      fontSize: 16,
    },
    blueBox: {
      flex: 0.24,
      width: "100%",
      backgroundColor: "#ADD8E6",
      paddingTop: 10,
      paddingLeft: 10,
      paddingBottom: 30,
      position: "absolute",
      top: 0,
    },
    whiteBox: {
      flex: 2,
      width: "100%",
      backgroundColor: "white",
      marginTop: "24%",
    },
    text: {
      paddingTop: 30,
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    searchButton: {
      position: "absolute",
      right: 10,
      top: 39,
      backgroundColor: "white",
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 5,
    },
    searchIcon: {
      width: 22,
      height: 22,
      tintColor: "#ADD8E6",
    },
    // Bottom Bar styles
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


export default Create;
