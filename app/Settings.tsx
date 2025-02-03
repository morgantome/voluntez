import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView,Switch, } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Settings = () => {
const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    alert("You have been logged out!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.topBlueContainer}>
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri: "https://www.svgrepo.com/download/305142/arrow-ios-back.svg",
            }}
            style={styles.backButtonIcon}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Settings</Text>
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Update Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Manage Subscriptions</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notifications</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={"#ADD8E6"}
            trackColor={{ false: "#CDCDCD", true: "#87CEEB" }}
          />
        </View>
      </View>

      {/* Privacy Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Privacy</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Blocked Accounts</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingBottom: 20,
  },
  topBlueContainer: {
    backgroundColor: "#ADD8E6",
    padding: 30,
    alignItems: "center",
  },
  header: {
    position: "relative",
    top: 20,
    right: 70,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ADD8E6",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#CDCDCD",
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  logoutButton: {
    backgroundColor: "#FF6961",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  backButton: {
    position: "absolute", 
    left: 20, 
    top: 40, 
    padding: 5, 
  },
  backButtonIcon: {
    width: 24, 
    height: 24,
    tintColor: "white",
},
});

export default Settings;