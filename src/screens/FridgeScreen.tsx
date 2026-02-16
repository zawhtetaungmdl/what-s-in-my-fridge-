import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CalendarWidget from '../components/CalendarWidget';
import TimelineView from '../components/TimelineView';

const FridgeScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleItemPress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

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
        onItemPress={handleItemPress}
      />

      {/* Item Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Item Details</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <MaterialCommunityIcons name="close" size={24} color="#6b7280" />
              </TouchableOpacity>
            </View>

            {selectedItem && (
              <View style={styles.modalContent}>
                <View style={[styles.iconContainer, { backgroundColor: `${selectedItem.color}20` }]}>
                  <MaterialCommunityIcons name={selectedItem.icon} size={48} color={selectedItem.color} />
                </View>
                <Text style={styles.detailName}>{selectedItem.title}</Text>
                <Text style={styles.detailStatus}>{selectedItem.status}</Text>

                <View style={styles.actionRow}>
                  <View style={styles.quantityControl}>
                     <Text style={styles.label}>Quantity</Text>
                     <View style={styles.stepper}>
                        <TouchableOpacity style={styles.stepBtn}><Text>-</Text></TouchableOpacity>
                        <Text style={styles.stepVal}>1</Text>
                        <TouchableOpacity style={styles.stepBtn}><Text>+</Text></TouchableOpacity>
                     </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.saveButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  modalContent: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  detailName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  detailStatus: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 24,
  },
  actionRow: {
    width: '100%',
    marginBottom: 24,
  },
  quantityControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stepBtn: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  stepVal: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  saveButton: {
    backgroundColor: '#00c853',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FridgeScreen;
