import React from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useState } from 'react';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  const showAlertAbout = () => {
    Alert.alert(
      'About',
      'Aplicación creada por Paulo Esteban Maza Rivera',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  const showAlertPrivacy = () => {
    Alert.alert(
      'Privacy Settings',
      'Las políticas de privacidad básicas de una aplicación parecida',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={notificationsEnabled ? "#2b2626" : "#f4f3f4"}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <TouchableOpacity style={styles.settingItem} onPress={showAlertAbout}>
        <Text style={styles.settingText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingItem} onPress={showAlertPrivacy}>
        <Text style={styles.settingText}>Privacy Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#527a8d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 18,
    color: 'black',
  },
});
