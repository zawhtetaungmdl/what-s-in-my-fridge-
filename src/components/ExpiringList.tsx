import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ExpiringList = () => {
  const items = [
    {
      name: 'Whole Milk',
      detail: 'Dairy • 1 Gallon',
      daysLeft: 2,
      color: 'red',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3p9Qfd_IqHrY5FtTijeDifJXrNjwqotNdE_ui4fYtQLQcj9tGwj6fAVSdcUvH7bi3hn5fROpdQA6UjWcD-2n8R6B6ThCN2rHIbiaCMDC88bsEwgrXJdbzUUF9DUJZ7m_H-PJdKHcn51hzdCYN0gbm1cyxsINhOnXYi95MSCY-eoeu-Mr5jJvsRsRt589qhkSvae_G_vkdcaOfF1pKFSVIdI9IfSZv-mLkavKO14IlPhwBJyzf8JSg7muFagZaeb7ciZuS8tvTUvs'
    },
    {
      name: 'Avocados',
      detail: 'Veggies • 3 pcs',
      daysLeft: 4,
      color: 'yellow',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9kB3O7nRyvmL29seP_WTOncWq0-RJygEfUvTmB8fiQ_kbJzA2iMGHuohYKGmDtigQqiOG4CBnVLWLRk0tv3aI6fkwVt12tY7GXGOGLmyj4Q-SQa31V1ZY_AamzpDz4S4iKtDt9oCIvxZSJdg8BmENv11dulQbMHEmTQbYvukgA5_BtV19lKv5bU0pNps7CpSgTno5CMaxav5jvLmlJrfMB3rn6HAfYjbG7pnyfOuTIfb5vSb2VM_EzqRqAKx4onqcGPUpgefKEbA'
    },
    {
      name: 'Greek Yogurt',
      detail: 'Dairy • 500g',
      daysLeft: 8,
      color: 'green',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp-WU2nywR0MLPpmju-gZT13dHr50rHxt5_kEurtctqZHkijVF7m1XmJCVQCnWSGI_ooZxPyBMW3XvvhddHgKLj8tS1AHoKO20WvO-Eib1C_zTGRSpjAjmTuau6ukCa55G4-VeNMqUem2x_MBu6ZkdLCIHQQ1vp30WJcNdt92RU5XKiSCB3uOwNLCt9MzE1_WWtXmf6mA34eSQuG4IrhyJvDkeG3Z2IY3RkeQfSnrYqQTBoIbpUAID31jz6vutoHbdrOwusjVS7yM'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expiring Soon</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetail}>{item.detail}</Text>
            </View>
            <View style={[
              styles.badge,
              item.color === 'red' && styles.badgeRed,
              item.color === 'yellow' && styles.badgeYellow,
              item.color === 'green' && styles.badgeGreen
            ]}>
              <Text style={[
                styles.badgeText,
                item.color === 'red' && styles.textRed,
                item.color === 'yellow' && styles.textYellow,
                item.color === 'green' && styles.textGreen
              ]}>{item.daysLeft} Days</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00c853',
  },
  list: {
    gap: 12,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f9fafb',
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
  },
  itemDetail: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  badgeRed: {
    backgroundColor: '#fee2e2',
    borderColor: '#fecaca',
  },
  textRed: {
    color: '#b91c1c',
  },
  badgeYellow: {
    backgroundColor: '#fef3c7',
    borderColor: '#fde68a',
  },
  textYellow: {
    color: '#b45309',
  },
  badgeGreen: {
    backgroundColor: '#dcfce7',
    borderColor: '#bbf7d0',
  },
  textGreen: {
    color: '#15803d',
  },
});

export default ExpiringList;
