import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const TONES = [
  {
    name: 'Relaxation',
    uri: 'https://actions.google.com/sounds/v1/water/waves_slow.ogg',
  },
  {
    name: 'Healing',
    uri: 'https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg',
  },
  {
    name: 'Focus',
    uri: 'https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg',
  },
];

export default function App() {
  const [selectedTone, setSelectedTone] = useState(TONES[0]);
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({ uri: selectedTone.uri });
    setSound(newSound);
    await newSound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(undefined);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 TuneHealth</Text>
      <Text style={styles.subtitle}>Select a tone to play</Text>

      <ScrollView contentContainerStyle={styles.toneList} style={{ width: '100%' }}>
        {TONES.map((tone) => (
          <TouchableOpacity
            key={tone.name}
            style={[styles.toneItem, selectedTone.name === tone.name && styles.toneItemActive]}
            onPress={() => setSelectedTone(tone)}
          >
            <Text style={styles.toneName}>{tone.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>▶ Play {selectedTone.name}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={stopSound}>
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
    marginBottom: 20,
  },
  toneList: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  toneItem: {
    borderWidth: 2,
    borderColor: '#90CAF9',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: '80%',
    alignItems: 'center',
  },
  toneItemActive: {
    backgroundColor: '#BBDEFB',
  },
  toneName: {
    color: '#0D47A1',
    fontSize: 16,
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
