import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DashboardChart from '../components/DashboardChart';
import QuickActions from '../components/QuickActions';
import ExpiringList from '../components/ExpiringList';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good Morning');
    else if (hours < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.dateText}>{currentDate}</Text>
          <Text style={styles.greetingText}>
            {greeting} <Text style={styles.highlight}>User</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.aiButton}>
          <MaterialCommunityIcons name="creation" size={24} color="#00c853" />
        </TouchableOpacity>
      </View>

      {/* Toggle Control */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === 'Dashboard' && styles.activeToggle]}
          onPress={() => setActiveTab('Dashboard')}
        >
          <Text style={[styles.toggleText, activeTab === 'Dashboard' && styles.activeToggleText]}>
            Dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, activeTab === 'Status' && styles.activeToggle]}
          onPress={() => setActiveTab('Status')}
        >
          <Text style={[styles.toggleText, activeTab === 'Status' && styles.activeToggleText]}>
            Status
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dashboard View */}
      {activeTab === 'Dashboard' ? (
        <View>
          <DashboardChart />
          <QuickActions />
          <ExpiringList />
        </View>
      ) : (
        <View style={styles.statusView}>
          <Text style={styles.statusText}>System Status: Online</Text>
          <Text style={styles.statusSubText}>Fridge temperature: 4°C</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  dateText: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  greetingText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    marginTop: 4,
  },
  highlight: {
    color: '#00c853',
  },
  aiButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#e5e7eb',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeToggle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
  },
  activeToggleText: {
    color: '#111827',
  },
  statusView: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  statusSubText: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 8,
  },
});

export default HomeScreen;
