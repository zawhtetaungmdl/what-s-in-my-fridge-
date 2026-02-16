import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface CalendarWidgetProps {
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

const CalendarWidget = ({ selectedDate, onDateSelect }: CalendarWidgetProps) => {
  // Mock dates for the week
  const dates = [
    { day: 'Mon', date: '14', status: 'fresh' },
    { day: 'Tue', date: '15', status: 'expiring' },
    { day: 'Wed', date: '16', status: 'current' },
    { day: 'Thu', date: '17', status: 'fresh' },
    { day: 'Fri', date: '18', status: 'none' },
    { day: 'Sat', date: '19', status: 'none' },
    { day: 'Sun', date: '20', status: 'none' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {dates.map((item, index) => {
          const isSelected = selectedDate === item.date;
          const isCurrent = item.status === 'current';

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dateItem,
                isSelected && styles.selectedItem,
                isCurrent && !isSelected && styles.currentItem
              ]}
              onPress={() => onDateSelect(item.date)}
            >
              <Text style={[styles.dayText, (isSelected || isCurrent) && styles.activeText]}>{item.day}</Text>
              <View style={[styles.dateCircle, isSelected && styles.selectedCircle, isCurrent && styles.currentCircle]}>
                <Text style={[styles.dateText, (isSelected || isCurrent) && styles.activeText]}>{item.date}</Text>
              </View>
              {/* Dots for status */}
              <View style={styles.dotsContainer}>
                {item.status === 'expiring' && (
                  <View style={[styles.dot, styles.dotExpiring]} />
                )}
                {(item.status === 'fresh' || item.status === 'current') && (
                  <View style={[styles.dot, styles.dotFresh]} />
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  dateItem: {
    alignItems: 'center',
    marginRight: 20,
    width: 48,
  },
  selectedItem: {
    // scale transform handled by reanimated ideally
  },
  currentItem: {
    //
  },
  dayText: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 8,
    fontWeight: '500',
  },
  dateCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  selectedCircle: {
    backgroundColor: '#10b981',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  currentCircle: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#10b981',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  activeText: {
    color: '#fff', // Or primary for current
  },
  dotsContainer: {
    flexDirection: 'row',
    height: 4,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 1,
  },
  dotFresh: {
    backgroundColor: '#10b981',
  },
  dotExpiring: {
    backgroundColor: '#ef4444',
  },
});

export default CalendarWidget;
