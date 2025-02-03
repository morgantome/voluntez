import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignatureScreen from 'react-native-signature-canvas';

const LogHours = () => {
  const navigation = useNavigation();

  const [logData, setLogData] = useState([
    { date: '', activity: '', hours: '', signOff: '' }
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [signature, setSignature] = useState(null);
  const [viewingSpreadsheet, setViewingSpreadsheet] = useState(false);

  const handleChange = (index, field, value) => {
    const newLogData = [...logData];
    newLogData[index][field] = value;
    setLogData(newLogData);
  };

  const addRow = () => {
    setLogData([...logData, { date: '', activity: '', hours: '', signOff: '' }]);
  };

  const openSignatureModal = (index) => {
    setCurrentIndex(index);
    setIsModalVisible(true);
};

const handleSignature = (sign) => {
    const newLogData = [...logData];
    newLogData[currentIndex].signOff = sign;
    setLogData(newLogData);
    setIsModalVisible(false);
};

const drawSignature = () => {
    return (
        <SignatureScreen
            onOK={handleSignature}
            onEmpty={() => setIsModalVisible(false)}
            backgroundColor="white"
            clearText="Clear"
            confirmText="Done"
            imageType="png"
            autoClear={false}
            webStyle={`.m-signature-pad--body {border: 1px solid black;}`}
        />
    );
};
    

  const toggleSpreadsheetView = () => {
    setViewingSpreadsheet(!viewingSpreadsheet);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.blueBox}></View>

        <View style={styles.whiteBox}>
          <Text style={styles.hoursWorkedText}>Hours Worked</Text>
          <TouchableOpacity onPress={toggleSpreadsheetView} style={styles.viewSpreadsheetButton}>
            <Text style={styles.viewSpreadsheetText}>View Spreadsheet</Text>
          </TouchableOpacity>

          {viewingSpreadsheet ? (
            <View style={styles.spreadsheetContainer}>
              <Text style={styles.spreadsheetHeader}>Date | Activity | Hours | Signed Off?</Text>
              {logData.map((log, index) => (
                <Text key={index} style={styles.spreadsheetRow}>
                  {log.date} | {log.activity} | {log.hours} | {log.signOff ? 'Done' : 'Not Done'}
                </Text>
              ))}
            </View>
          ) : (
            <ScrollView contentContainerStyle={styles.graphContainer}>
              {logData.map((log, index) => (
                <View key={index} style={styles.graphRow}>
                  <TextInput
                    style={styles.graphInput}
                    placeholder="Date"
                    placeholderTextColor={888}
                    value={log.date}
                    onChangeText={(text) => handleChange(index, "date", text)}
                  />
                  <TextInput
                    style={styles.graphInput}
                    placeholder="Activity"
                    placeholderTextColor={888}

                    value={log.activity}
                    onChangeText={(text) => handleChange(index, "activity", text)}
                  />
                  <TextInput
                    style={styles.graphInput}
                    placeholder="Hours"
                    placeholderTextColor={888}

                    value={log.hours}
                    onChangeText={(text) => handleChange(index, "hours", text)}
                  />
                  <View style={styles.inputDisplay}>
                    <Text>Date: {log.date}</Text>
                    <Text>Activity: {log.activity}</Text>
                    <Text>Hours: {log.hours}</Text>
                  </View>

                  <View style={styles.signaturePad}>
                    <Text style={styles.signatureLabel}>Sign Off</Text>
                    <TouchableOpacity onPress={() => openSignatureModal(index)} style={styles.signButton}>
                      <Text style={styles.signButtonText}>Sign Here</Text>
                    </TouchableOpacity>
                    {log.signOff ? (
                      <Image
                        source={{ uri: log.signOff }}
                        style={styles.signatureImage}
                      />
                    ) : null}
                  </View>
                </View>
              ))}
              <TouchableOpacity onPress={addRow} style={styles.addRowButton}>
               <Text style={styles.addRowText}>+ Add Row</Text>
            </TouchableOpacity>
            </ScrollView>
          )}
        </View>

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
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      {/* Signature Screen will be rendered here */}
      {drawSignature()}

      <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBox: {
    flex: 0.23,
    width: "100%",
    backgroundColor: "#ADD8E6",
    paddingTop: 40,
    paddingLeft: 10,
    paddingBottom: 40,
    position: "absolute",
    top: 0,
  },
  whiteBox: {
    flex: 2,
    width: "100%",
    backgroundColor: "white",
    marginTop: "24%",
    paddingHorizontal: 15,
    paddingBottom: 50,
    paddingTop:20,
  },

  addRowButton: {
    backgroundColor: '#ADD8E6',  // Blue background color
    paddingVertical: 10,  // Vertical padding for better button size
    paddingHorizontal: 20,  // Horizontal padding for button width
    borderRadius: 5,  // Rounded corners
    alignItems: 'center',  // Center the text inside the button
    marginTop: 20,  // Space above the button
    marginBottom: 10,  // Space below the button
  },
  
  addRowText: {
    color: '#fff',  // White text color
    fontSize: 16,  // Text size
    fontWeight: 'bold',  // Bold text
    textAlign: 'center',  // Center the text inside the button
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark background
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%', // Adjust the width as needed
    alignItems: 'center',
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signatureImage: {
    width: 200,             
    height: 100,             
    borderWidth: 1,          
    borderColor: '#ccc',   
    marginTop: 10,          
    resizeMode: 'contain',  
    alignSelf: 'center',  
  },
  hoursWorkedText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  viewSpreadsheetButton: {
    position: "absolute",
    top:10,
    left: 180,
    textAlign: "center",
    width: 120,
    backgroundColor: "#ADD8E6",
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  viewSpreadsheetText: {
    color: "#fff",
    fontSize: 16,
  },
  spreadsheetContainer: {
    marginTop: 20,
  },
  spreadsheetHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  spreadsheetRow: {
    fontSize: 14,
    marginBottom: 5,
  },
  graphContainer: {
    paddingBottom: 50,
  },
  graphRow: {
    flexDirection: "column",
    marginBottom: 15,
  },
  graphInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputDisplay: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  signaturePad: {
    marginTop: 15,
    marginBottom: 20,
  },
  signatureLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  signButton: {
    backgroundColor: "#ADD8E6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  signButtonText: {
    color: "#fff",
    fontSize: 16,
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

export default LogHours;