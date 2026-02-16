# Smart Fridge Inventory App - Design Specification

## 1. Overview
This document outlines the UI structure, logic, and component hierarchy for the Smart Fridge Inventory App. The app is designed to help users track their refrigerator contents, view expiring items, and manage grocery lists.

## 2. Tech Stack
- **Framework:** React Native (Expo)
- **Language:** TypeScript
- **Styling:** NativeWind (Tailwind CSS for React Native) or StyleSheet
- **Navigation:** React Navigation (Stack & Bottom Tabs)
- **State Management:** React Context API or Zustand (for simplicity and performance)

## 3. Navigation Flow
1.  **Splash Screen** (Initial Route)
    - Auto-navigates to `MainNavigator` after 3 seconds.
2.  **MainNavigator** (Bottom Tab Navigator)
    - **Home Tab:** Dashboard & Status view.
    - **Fridge Tab:** Calendar & Timeline view.
    - **List Tab:** Grocery/Todo List view.

## 4. Data Models (TypeScript Interfaces)

```typescript
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
```

## 5. Screen Details & Component Hierarchy

### 5.1. Splash Screen
- **Logic:**
    - `useEffect` with `setTimeout` for 3000ms.
    - On timeout: `navigation.replace('MainNavigator')`.
- **UI:**
    - Minimalist branding (Logo, App Name).
    - "Powered by Gemini" badge.

### 5.2. Screen 1: Home Page (Dashboard)
- **Header:**
    - Top Left: Date Display & Dynamic Greeting (computed from `new Date().getHours()`).
    - Top Right: Gemini AI Icon (Button).
- **Controls:**
    - `DashboardToggle`: Switch between "Dashboard" and "Status" views.
- **Views:**
    - **Dashboard View:**
        - `DashboardChart`: Pie chart visualization of `FoodItem` categories.
    - **Status View** (Implied alternative view, perhaps simple stats or text).
- **Quick Actions:**
    - `QuickActionsRow`: 4 circular buttons (Search, Camera, Date, Cart).
- **List Section:**
    - `ExpiringList`: Filtered list of items where `expirationDate` is within X days.

**Component Tree:**
```
HomeScreen
├── HomeHeader
│   ├── DateDisplay
│   ├── DynamicGreeting
│   └── AIButton
├── DashboardToggle
├── DashboardView (Conditional)
│   └── PieChartCard
├── QuickActionsRow
│   ├── ActionButton (Search)
│   ├── ActionButton (Scan)
│   ├── ActionButton (Date)
│   └── ActionButton (Cart)
└── ExpiringListSection
    ├── SectionTitle ("Expiring Soon")
    └── ItemList (Vertical)
```

### 5.3. Screen 2: Fridge Page (Calendar & Timeline)
- **Header:**
    - Month/Year Picker.
    - "Today" Button (scrolls to current date).
- **Calendar Widget:**
    - `CalendarStrip`: Horizontal scrollable or collapsible weekly/monthly view.
    - Indicators: Dots for expiring items.
- **Content View:**
    - **Default (Timeline):** Vertical timeline of items sorted by expiry.
        - "Current Date" node has pulsing animation.
    - **Filtered (Date Selected):** List of items expiring on selected date.
- **Interaction:**
    - Tap item -> `ItemDetailModal` (Edit qty, update status).

**Component Tree:**
```
FridgeScreen
├── FridgeHeader
│   ├── MonthYearDropdown
│   └── TodayButton
├── CalendarStrip
│   └── DayCell (Repeatable)
└── ContentArea
    ├── TimelineView (Default)
    │   ├── TimelineNode (Time + Icon)
    │   └── TimelineItemCard
    └── FilteredListView (Conditional)
        ├── CancelFilterButton
        └── ItemList
```

### 5.4. Screen 3: List Page
- **Functionality:** Full-featured Todo/Grocery list.
- **Features:** Checkboxes, Add New, Delete.

**Component Tree:**
```
ListScreen
├── ListHeader
│   └── Title ("Grocery List")
├── CategorySection (e.g., Produce, Dairy)
│   ├── SectionHeader
│   └── GroceryItemRow
│       ├── Checkbox
│       ├── ItemName
│       └── DeleteAction
└── AddItemInput (Floating or Bottom Fixed)
```

## 6. State Management Strategy
- **UserContext/Store:**
    - `inventory`: Array of `FoodItem`.
    - `groceryList`: Array of `GroceryItem`.
    - `addItem(item)`
    - `updateItem(id, updates)`
    - `deleteItem(id)`
- **Local State:**
    - `selectedDate`: For Fridge Screen filtering.
    - `viewMode`: For Home Screen (Dashboard vs Status).
