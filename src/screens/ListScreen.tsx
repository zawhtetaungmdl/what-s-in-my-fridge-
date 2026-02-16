import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Mock Data
const INITIAL_ITEMS = [
  { id: '1', name: 'Avocados', category: 'Produce', quantity: 3, checked: false },
  { id: '2', name: 'Spinach', category: 'Produce', quantity: 1, checked: false },
  { id: '3', name: 'Sourdough Bread', category: 'Bakery', quantity: 1, checked: false },
  { id: '4', name: 'Eggs (Large)', category: 'Dairy', quantity: 12, checked: false },
  { id: '5', name: 'Milk (Whole)', category: 'Dairy', quantity: 1, checked: true },
];

const ListScreen = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [newItem, setNewItem] = useState('');

  const toggleCheck = (id: string) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const addItem = () => {
    if (!newItem.trim()) return;
    setItems(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newItem,
        category: 'Other',
        quantity: 1,
        checked: false,
      }
    ]);
    setNewItem('');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemRow, item.checked && styles.checkedRow]}
      onPress={() => toggleCheck(item.id)}
    >
      <View style={[styles.checkbox, item.checked && styles.checkedBox]}>
        {item.checked && <MaterialCommunityIcons name="check" size={16} color="#fff" />}
      </View>
      <View style={styles.itemInfo}>
        <Text style={[styles.itemName, item.checked && styles.checkedText]}>{item.name}</Text>
        {item.quantity > 1 && (
          <Text style={styles.itemQty}>Qty: {item.quantity}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Grocery List</Text>
          <Text style={styles.subtitle}>{items.filter(i => !i.checked).length} items needed</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <MaterialCommunityIcons name="dots-horizontal" size={24} color="#6b7280" />
        </TouchableOpacity>
      </View>

      {/* List */}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Add new item..."
            value={newItem}
            onChangeText={setNewItem}
            onSubmitEditing={addItem}
          />
          <TouchableOpacity onPress={addItem} style={styles.addButton}>
            <MaterialCommunityIcons name="plus" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  moreButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  checkedRow: {
    backgroundColor: '#f3f4f6',
    opacity: 0.6,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#d1d5db',
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkedBox: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#9ca3af',
  },
  itemQty: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
    paddingLeft: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    paddingVertical: 12,
  },
  addButton: {
    backgroundColor: '#10b981',
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});

export default ListScreen;
