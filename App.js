import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 TuneHealth</Text>
      <Text style={styles.subtitle}>Healing with tones and calm</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>▶ Play Tone</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.stopButton]}>
        <Text style={styles.buttonText}>⏹ Stop</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E88E5',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#1565C0',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#42A5F5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginVertical: 10,
    width: '70%',
    alignItems: 'center',
  },
  stopButton: {
    backgroundColor: '#EF5350',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
