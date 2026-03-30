import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, FlatList, Modal, TextInput } from 'react-native';
import axios from '../utils/axiosInstance';

const VOIO_VILLAGES = [
  "Σιάτιστα",
  "Νεάπολη",
  "Τσοτύλι",
  "Πεντάλοφος",
  "Γαλατινή",
  "Εράτυρα",
  "Μικρόκαστρο",
  "Σισάνι",
  "Καλονέρι",
  "Δαφνερό"
];

export default function DashboardScreen() {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [targetLocation, setTargetLocation] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchMissions();
  }, []);

  async function fetchMissions() {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('/missions');
      setMissions(res.data);
    } catch (err) {
      setError('Αποτυχία φόρτωσης αποστολών');
    }
    setLoading(false);
  }

  async function handleCreateMission() {
    if (!targetLocation) return;
    setCreating(true);
    setError('');
    try {
      await axios.post('/missions', {
        targetLocation: { name: targetLocation },
      });
      setShowForm(false);
      setTargetLocation('');
      fetchMissions();
    } catch (err) {
      setError('Αποτυχία δημιουργίας αποστολής');
    }
    setCreating(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOIO DISPATCH</Text>
      <Text style={styles.subtitle}>Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={() => setShowForm(!showForm)}>
        <Text style={styles.buttonText}>{showForm ? 'Ακύρωση' : 'Νέα Αποστολή'}</Text>
      </TouchableOpacity>
      <Modal visible={showForm} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Προορισμός:</Text>
            <FlatList
              data={VOIO_VILLAGES}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setTargetLocation(item)} style={styles.villageOption}>
                  <Text style={{ color: '#0284c7' }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.button} onPress={handleCreateMission} disabled={creating || !targetLocation}>
              <Text style={styles.buttonText}>{creating ? 'Δημιουργία...' : 'Δημιουργία Αποστολής'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#e0f2fe' }]} onPress={() => setShowForm(false)}>
              <Text style={[styles.buttonText, { color: '#0284c7' }]}>Κλείσιμο</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {loading ? (
        <ActivityIndicator color="#0284c7" />
      ) : error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : (
        <FlatList
          data={missions}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={styles.missionItem}>
              <Text style={{ color: '#e0f2fe' }}><Text style={{ fontWeight: 'bold' }}>{item.targetLocation?.name || 'Χωρίς όνομα'}</Text> | Status: {item.status}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#7dd3fc',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#38bdf8',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    minWidth: 300,
    alignItems: 'center',
  },
  label: {
    color: '#0284c7',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  villageOption: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0f2fe',
    width: 200,
    alignItems: 'center',
  },
  missionItem: {
    backgroundColor: '#1e293b',
    color: '#e0f2fe',
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    width: 300,
  },
});
