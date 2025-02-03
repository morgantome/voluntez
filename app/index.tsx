
import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Modal, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";


const Home = () => {
 const navigation = useNavigation();


 const [searchVisible, setSearchVisible] = useState(false);
 const [searchText, setSearchText] = useState("");
 const [modalVisible, setModalVisible] = useState(false);  // To manage modal visibility
 const [contactInfo, setContactInfo] = useState({
   name: "",
   email: "",
   phone: "",
 });


 // Function to handle form submission (this will just close the modal for now)
 const handleSubmit = () => {
   console.log(contactInfo);  // In a real app, you would send the data somewhere
   setModalVisible(false);  // Close modal after submission
 };


 return (
   <>
   {/* search bar */}
     <View style={styles.container}>
       {searchVisible && (
         <View style={styles.searchBarContainer}>
           <LinearGradient
             colors={["#ffffff", "#ffffff00"]}
             style={styles.fadeBackground}
           />
           <View style={styles.searchBar}>
             <TextInput
               style={styles.searchInput}
               placeholder="Search..."
               placeholderTextColor="#888"
               value={searchText}
               onChangeText={setSearchText}
               autoFocus={true}
             />
             <TouchableOpacity onPress={() => setSearchVisible(false)} style={styles.cancelButton}>
               <Text style={styles.cancelText}>Cancel</Text>
             </TouchableOpacity>
           </View>
         </View>
       )}


       {/* top of home screen */}
       <View style={styles.blueBox}>
         <Text style={styles.text}>voluntEZ</Text>
         <TouchableOpacity onPress={() => setSearchVisible(true)} style={styles.searchButton}>
           <Image
             source={{ uri: "https://img.icons8.com/ios11/512/228BE6/search.png" }}
             style={styles.searchIcon}
           />
         </TouchableOpacity>
       </View>


       {/* Home screen */}
       <ScrollView style={styles.whiteBox}>
         {/* First post */}
         <TouchableOpacity style={styles.post} onPress={() => setModalVisible(true)}>
           <View style={styles.postHeader}>
             <Image source={{ uri: "https://dwyq4sa1lz55y.cloudfront.net/uploads/sites/233/2019/03/ki-logo-1024x1024.png" }} style={styles.profilePic} />
             <Text style={styles.caption}>Kiwanis</Text>
           </View>
           <Image source={{ uri: "https://www.ucpcleveland.org/wp-content/uploads/2019/03/Volunteers-needed.jpg" }} style={styles.postImage} />
           <Text style={styles.description}>
             Volunteers needed for Fall Rally!
           </Text>
         </TouchableOpacity>


         {/* Second post */}
         <TouchableOpacity style={styles.post} onPress={() => setModalVisible(true)}>
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image source={{ uri: "https://www.carolinascki.org/uploads/7/9/2/3/79233312/cki-seal-bw-orig_orig.png" }} style={styles.profilePic} />
          <Text style={styles.caption}>BW Circle K</Text>
        </View>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQ-pgvoiM0g3AH4XhEzTfgrtWrMChKh_oPA&s" }} style={styles.postImage} />
        <Text style={styles.description}>
          Join us in our next meeting! We will be making dog/cat toys for animal shelters!
        </Text>
      </View>
         </TouchableOpacity>


         {/* Third post */}
         <TouchableOpacity style={styles.post} onPress={() => setModalVisible(true)}>
         <View style={styles.post}>
        <View style={styles.postHeader}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtG2C9WbuFCpuJP_Mgmbbp3Z7golLT7CJqtQ&s" }} style={styles.profilePic} />
          <Text style={styles.caption}>BMHS Key Club</Text>
        </View>
        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwUFh7h8rDilcp5KDw_TRohbanIVZI4k2dw&s" }} style={styles.postImage} />
        <Text style={styles.description}>
          Join us for our key club benefit show on March 22 at 7pm! Tickets are $5 and all funds will go to Marissa's Mission!
        </Text>
      </View>


         </TouchableOpacity>
       </ScrollView>


       {/* Modal for inputting contact information */}
       <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         onRequestClose={() => setModalVisible(false)}
       >
         <View style={styles.modalContainer}>
           <View style={styles.modalContent}>
             <Text style={styles.modalTitle}>Thank you for your interest! Provide us with your contact information and we will send over the sign up details.</Text>
             <TextInput
               style={styles.input}
               placeholder="Name"
               placeholderTextColor="#888"
               value={contactInfo.name}
               onChangeText={(text) => setContactInfo({ ...contactInfo, name: text })}
             />
             <TextInput
               style={styles.input}
               placeholder="Email"
               placeholderTextColor="#888"
               value={contactInfo.email}
               onChangeText={(text) => setContactInfo({ ...contactInfo, email: text })}
             />
             <TextInput
               style={styles.input}
               placeholder="Phone"
               placeholderTextColor="#888"
               value={contactInfo.phone}
               onChangeText={(text) => setContactInfo({ ...contactInfo, phone: text })}
             />
             <View style={styles.buttonContainer}>
               <Button title="Submit" onPress={handleSubmit} />
               <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
             </View>
           </View>
         </View>
       </Modal>


       {/* Bottom Bar */}
       <View style={styles.bottomBar}>
         <TouchableOpacity style={styles.centerButton}>
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
   top: "100%",
   left: 0,
   right: 0,
   height: 500,
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
   flex: 1, 
   width: "100%",
   backgroundColor: "white",
   marginTop: "24%",
   marginBottom: 100,
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


 post: {
   marginBottom: 15,
   padding: 10,
   backgroundColor: "#f9f9f9",
   borderRadius: 10,
 },
 postHeader: {
   flexDirection: "row",
   alignItems: "center",
 },
 profilePic: {
   width: 40,
   height: 40,
   borderRadius: 20,
 },
 caption: {
   marginLeft: 10,
   fontSize: 16,
   fontWeight: "bold",
 },
 postImage: {
   width: "100%",
   height: 200,
   borderRadius: 10,
   marginVertical: 10,
 },
 description: {
   fontSize: 14,
   color: "#555",
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
 },
 modalTitle: {
   fontSize: 18,
   fontWeight: "bold",
   marginBottom: 10,
 },
 input: {
   height: 40,
   borderColor: "#ccc",
   borderWidth: 1,
   borderRadius: 5,
   marginBottom: 10,
   paddingLeft: 10,
   color: "grey",
 },
 buttonContainer: {
   flexDirection: "row",
   justifyContent: "space-between",
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
export default Home;


