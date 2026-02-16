import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const QuickActions = () => {
  const actions = [
    { icon: 'magnify', label: 'Search', color: '#60a5fa' },
    { icon: 'barcode-scan', label: 'Scan', color: '#c084fc' },
    { icon: 'calendar-clock', label: 'Date', color: '#fb923c' },
    { icon: 'cart-outline', label: 'Cart', color: '#f43f5e' },
  ];

  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionItem}>
          <View style={[styles.iconButton, { shadowColor: action.color }]}>
            <MaterialCommunityIcons name={action.icon as any} size={28} color={action.color} />
          </View>
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginBottom: 32,
  },
  actionItem: {
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f9fafb',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4b5563',
  },
});

export default QuickActions;
