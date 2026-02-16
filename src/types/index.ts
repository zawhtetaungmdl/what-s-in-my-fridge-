export type Category = 'Produce' | 'Dairy' | 'Meat' | 'Bakery' | 'Other';

export interface FoodItem {
  id: string;
  name: string;
  category: Category;
  quantity: number;
  unit: string;
  expirationDate: Date;
  status: 'fresh' | 'expiring_soon' | 'expired' | 'consumed';
  addedDate: Date;
  imageUrl?: string;
}

export interface GroceryItem {
  id: string;
  name: string;
  isChecked: boolean;
  category: Category;
  quantity?: number; // Optional
}
