import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from '../utils/axiosInstance';

export default function LoginScreen() {
  const [username, setUsername] = useState('Voio');
  const [password, setPassword] = useState('Voio');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Σφάλμα', 'Συμπλήρωσε όλα τα πεδία');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', { username, password });
      setLoading(false);
      // Save token to localStorage or SecureStore (TODO)
      router.replace('/');
    } catch (err) {
      setLoading(false);
      Alert.alert('Σφάλμα', err?.response?.data?.message || 'Αποτυχία σύνδεσης');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VOIO DISPATCH</Text>
      <Text style={styles.subtitle}>Futuristic Drone Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#7dd3fc"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#7dd3fc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>LOGIN</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0284c7',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#7dd3fc',
    marginBottom: 32,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#0284c7',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: '#0284c7',
    backgroundColor: '#e0f2fe',
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
