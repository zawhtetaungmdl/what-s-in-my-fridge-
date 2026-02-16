import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardChart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartWrapper}>
        {/* Placeholder for Pie Chart */}
        <View style={styles.chartPlaceholder}>
          <Text style={styles.totalCount}>42</Text>
          <Text style={styles.totalLabel}>ITEMS</Text>
        </View>
        {/* Legend */}
        <View style={styles.legendContainer}>
          <LegendItem color="#f97316" label="Veggies" percentage="40%" />
          <LegendItem color="#0d9488" label="Dairy" percentage="30%" />
          <LegendItem color="#65a30d" label="Meat" percentage="20%" />
          <LegendItem color="#eab308" label="Other" percentage="10%" />
        </View>
      </View>
    </View>
  );
};

const LegendItem = ({ color, label, percentage }: { color: string, label: string, percentage: string }) => (
  <View style={styles.legendItem}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={styles.legendLabel}>{label}</Text>
    </View>
    <Text style={styles.percentage}>{percentage}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  chartWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 12,
    borderColor: '#f3f4f6', // In a real app, use Svg or multiple absolute positioned views for segments
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  totalCount: {
    fontSize: 32,
    fontWeight: '900',
    color: '#111827',
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#9ca3af',
    letterSpacing: 1,
  },
  legendContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  percentage: {
    fontSize: 12,
    color: '#9ca3af',
  },
});

export default DashboardChart;
