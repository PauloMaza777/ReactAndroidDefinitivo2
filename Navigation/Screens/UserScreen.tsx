import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserScreen = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    fullName: "",
    birthdate: "",
    gender: "",
    country: "",
    state: "",
    bio: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("userData");
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };
    loadUserData();
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("userData", JSON.stringify(userData));
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save user data:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (key, value) => {
    setUserData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={userData.username}
        onChangeText={(value) => handleChange("username", value)}
        editable={isEditing}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={userData.email}
        onChangeText={(value) => handleChange("email", value)}
        editable={isEditing}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Full Name"
        value={userData.fullName}
        onChangeText={(value) => handleChange("fullName", value)}
        editable={isEditing}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Birthdate"
        value={userData.birthdate}
        onChangeText={(value) => handleChange("birthdate", value)}
        editable={isEditing}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Gender"
        value={userData.gender}
        onChangeText={(value) => handleChange("gender", value)}
        editable={isEditing}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Country"
        value={userData.country}
        onChangeText={(value) => handleChange("country", value)}
        editable={isEditing}
      />
      <TextInput
        style={styles.textInput}
        placeholder="State"
        value={userData.state}
        onChangeText={(value) => handleChange("state", value)}
        editable={isEditing}
      />
      <TextInput
        style={[styles.textInput, styles.textArea]}
        placeholder="Biography / Interests"
        value={userData.bio}
        onChangeText={(value) => handleChange("bio", value)}
        editable={isEditing}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSave} disabled={!isEditing}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleEdit} disabled={isEditing}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#527a8d",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    marginVertical: 10,
    color: "black",
  },
  textArea: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: "40%",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
});
