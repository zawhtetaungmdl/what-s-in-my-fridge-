import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainNavigator');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons name="fridge" size={64} color="#00d68f" />
        </View>
        <Text style={styles.title}>
          Fresh<Text style={styles.highlight}>Track</Text>
        </Text>
        <Text style={styles.subtitle}>Smart Inventory System</Text>
      </View>

      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#00d68f" style={styles.loader} />
        <View style={styles.poweredBy}>
          <MaterialCommunityIcons name="creation" size={16} color="#00d68f" />
          <Text style={styles.poweredText}>Powered by Gemini</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00d68f',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#374151',
  },
  highlight: {
    color: '#00d68f',
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginTop: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  loader: {
    marginBottom: 20,
  },
  poweredBy: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.75,
  },
  poweredText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
  },
});

export default SplashScreen;
