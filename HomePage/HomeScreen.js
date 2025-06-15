import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Appbar, Button, Menu, Provider } from 'react-native-paper';

export default function HomeScreen() {
  const [storeMode, setStoreMode] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Provider>
      <ScrollView style={styles.container}>
        {/* Header */}
        <Appbar.Header style={styles.header}>
          <Text style={styles.logo}>LOGO</Text>
          <View style={styles.headerButtons}>
            <Button mode="contained-tonal" style={styles.toggleBtn}>Offline stores</Button>
            <Button mode="contained-tonal" style={styles.toggleBtn}>Online stores</Button>
          </View>
        </Appbar.Header>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Find Stores that Match to Your Budget</Text>
        </View>

        {/* Inputs */}
        <View style={styles.form}>
          <TextInput placeholder="Location" style={styles.input} />
          <TextInput placeholder="Enter your Budget" style={styles.input} keyboardType="numeric" />
          <TextInput placeholder="What do you want to buy?" style={styles.input} />

          {/* Store Mode Dropdown */}
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <TouchableOpacity style={styles.dropdown} onPress={() => setMenuVisible(true)}>
                <Text style={styles.dropdownText}>
                  {storeMode || 'Choose your store mode'}
                </Text>
              </TouchableOpacity>
            }>
            <Menu.Item onPress={() => { setStoreMode('Offline'); setMenuVisible(false); }} title="Offline" />
            <Menu.Item onPress={() => { setStoreMode('Online'); setMenuVisible(false); }} title="Online" />
          </Menu>

          {/* Travel Mode */}
          <Text style={styles.travelModeLabel}>Choose Travel Mode</Text>
          <View style={styles.travelMode}>
            <Button mode="outlined" style={styles.travelBtn}>Walk</Button>
            <Button mode="outlined" style={styles.travelBtn}>Bus</Button>
            <Button mode="outlined" style={styles.travelBtn}>Personal Vehicle</Button>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <TextInput placeholder="Find a Store or Route" style={styles.searchInput} />
            <Button icon="magnify" mode="contained" style={styles.searchBtn}>Search</Button>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#777',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
    marginRight: 10,
  },
  toggleBtn: {
    marginHorizontal: 5,
    borderRadius: 20,
  },
  titleContainer: {
    backgroundColor: '#ddd',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    padding: 20,
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  travelModeLabel: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  travelMode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  travelBtn: {
    flex: 1,
    marginHorizontal: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchBtn: {
    borderRadius: 10,
  },
});
