import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TimelineViewProps {
  filterDate: string | null;
  onClearFilter: () => void;
  onItemPress: (item: any) => void;
}

const TimelineView = ({ filterDate, onClearFilter, onItemPress }: TimelineViewProps) => {
  // Mock Data
  const timelineItems = [
    { time: '08:00', title: 'Almond Milk', status: 'Fresh', icon: 'water-outline', color: '#3b82f6', expiry: 'Opened 2 days ago' },
    { time: '12:30', title: 'Organic Eggs', status: 'Expires Today', icon: 'egg-outline', color: '#eab308', expiry: 'Expires Today', isUrgent: true },
    { time: '16:00', title: 'Chicken Breast', status: 'Expires in 2 hrs', icon: 'food-drumstick-outline', color: '#ef4444', expiry: 'Expires in 2 hrs', isUrgent: true },
  ];

  if (filterDate) {
    return (
      <View style={styles.filteredContainer}>
        <View style={styles.filterHeader}>
          <Text style={styles.filterTitle}>Items for Feb {filterDate}</Text>
          <TouchableOpacity onPress={onClearFilter} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear Filter</Text>
          </TouchableOpacity>
        </View>
        {/* Render filtered list here */}
        <Text style={styles.placeholderText}>Showing specific items for date {filterDate}...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {timelineItems.map((item, index) => (
        <View key={index} style={styles.timelineRow}>
          {/* Time Column */}
          <View style={styles.timeColumn}>
            <Text style={[styles.timeText, item.isUrgent && styles.urgentTime]}>{item.time}</Text>
            <View style={[styles.timeDot, item.isUrgent ? styles.urgentDot : styles.normalDot]} />
            {index < timelineItems.length - 1 && <View style={styles.line} />}
          </View>

          {/* Card */}
          <TouchableOpacity
            style={[styles.card, item.isUrgent && styles.urgentCard]}
            onPress={() => onItemPress(item)}
            activeOpacity={0.7}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
                <MaterialCommunityIcons name={item.icon as any} size={24} color={item.color} />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={[styles.cardSubtitle, item.isUrgent && { color: item.color }]}>{item.expiry}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 100,
  },
  filteredContainer: {
    flex: 1,
    padding: 20,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  clearButton: {
    padding: 8,
  },
  clearButtonText: {
    color: '#6b7280',
  },
  placeholderText: {
    textAlign: 'center',
    color: '#9ca3af',
    marginTop: 40,
  },
  timelineRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timeColumn: {
    width: 50,
    alignItems: 'center',
    marginRight: 16,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
    marginBottom: 8,
  },
  urgentTime: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  timeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#fff',
    zIndex: 10,
  },
  normalDot: {
    backgroundColor: '#d1d5db',
  },
  urgentDot: {
    backgroundColor: '#ef4444',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  line: {
    position: 'absolute',
    top: 24,
    bottom: -24,
    width: 2,
    backgroundColor: '#e5e7eb',
    zIndex: 0,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  urgentCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#ef4444', // Or accent-yellow depending on design
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
});

export default TimelineView;
