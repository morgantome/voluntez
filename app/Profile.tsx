import React, { useState } from "react";
import {Text,View,StyleSheet,TouchableOpacity,Image,ScrollView,Modal,Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const upcomingEvents = [
    "Volunteer at Food Bank at 3 pm - Feb 5, 2025",
    "Community Cleanup at 12pm - Feb 10, 2025",
    "Fundraising Event at 4pm - Feb 15, 2025",
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBlueContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.username}>Hello, User!</Text>
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => navigation.navigate("Create")}
            >
              <Image
                source={{
                  uri: "https://www.iconpacks.net/icons/2/free-plus-icon-3107-thumb.png",
                }}
                style={styles.createButtonIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => setModalVisible(true)} // Open the modal
            >
              <Text style={styles.buttonText}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                source={{
                  uri: "https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png",
                }}
                style={styles.settingsButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* White Box Section */}
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.whiteBox}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
              style={styles.profilePicture}
            />
            <Text style={styles.name}>StudentFN StudentLN</Text>
            <Text style={styles.organization}>BMHS Key Club</Text>
            <Text style={styles.description}>I'm a student at BMHS Key Club</Text>

            <View style={styles.postsBox}></View>
          </View>
        </ScrollView>
      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => navigation.navigate("index")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
            }}
            style={styles.centerButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logButton}
          onPress={() => navigation.navigate("LogHours")}
        >
          <Image
            source={{
              uri: "https://static.thenounproject.com/png/4836951-200.png",
            }}
            style={styles.logButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButtonB}
          onPress={() => navigation.navigate("Search")}
        >
          <Image
            source={{
              uri: "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png",
            }}
            style={styles.searchButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6522/6522516.png",
            }}
            style={styles.profileButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.fundButton}
          onPress={() => navigation.navigate("Fundraisers")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/7500/7500362.png",
            }}
            style={styles.fundButtonIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Modal for Upcoming Events */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Upcoming Volunteer Events</Text>
            {upcomingEvents.map((event, index) => (
              <Text key={index} style={styles.eventText}>
                {event}
              </Text>
            ))}
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topBlueContainer: {
    backgroundColor: "#ADD8E6",
    padding: 40,
    width: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    position: "relative",
    right: 25,
    top: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  actionButton: {
    position: "relative",
    top: 20,
    left: 25,
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 5,
  },
  createButton: {
    position: "relative",
    top: 20,
    left: 24,
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 5,
  },
  createButtonIcon: {
    width: 10,
    height: 10,
    tintColor: "#ADD8E6",
  },
  settingsButton: {
    position: "relative",
    top: 20,
    left: 25,
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 5,
  },
  settingsButtonIcon: {
    width: 10,
    height: 10,
    tintColor: "#ADD8E6",
  },
  buttonText: {
    fontSize: 10,
    color: "#ADD8E6",
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100, // Prevent bottom bar overlap
  },
  whiteBox: {
    alignItems: "center",
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  organization: {
    fontSize: 16,
    color: "gray",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 70,
  },
  postsBox: {
    marginTop: 20,
    width: 350,
    height: 500,
    borderWidth: 1,
    borderColor: "#CDCDCD",
    borderRadius: 5,
    padding: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  eventText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default Profile;