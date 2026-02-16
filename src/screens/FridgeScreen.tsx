import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarWidget from '../components/CalendarWidget';
import TimelineView from '../components/TimelineView';

const FridgeScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.monthSelector}>
          <Text style={styles.monthText}>February 2026</Text>
          <MaterialCommunityIcons name="chevron-down" size={24} color="#111827" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.todayButton}>
          <Text style={styles.todayText}>Today 16</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar Widget */}
      <CalendarWidget
        selectedDate={selectedDate}
        onDateSelect={setSelectedDate}
      />

      {/* Content View */}
      <TimelineView
        filterDate={selectedDate}
        onClearFilter={() => setSelectedDate(null)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginRight: 4,
  },
  todayButton: {
    backgroundColor: '#00c853',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#00c853',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  todayText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default FridgeScreen;
