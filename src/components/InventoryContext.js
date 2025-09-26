import React, { createContext, useState } from 'react';
import { initialItems } from '../data/mockData';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [items, setItems] = useState(initialItems);

    const addItem = (item) => {
        const newItem = {
            ...item,
            id: Date.now(), // Use a more unique ID like a timestamp
            quantity: parseInt(item.quantity, 10) || 0,
        };
        setItems([...items, newItem]);
    };

    const updateItem = (updatedItem) => {
        // Ensure quantity is a number before updating
        const itemWithNumericQuantity = {
            ...updatedItem,
            quantity: parseInt(updatedItem.quantity, 10) || 0,
        };
        setItems(items.map(item => (item.id === itemWithNumericQuantity.id ? itemWithNumericQuantity : item)));
    };

    const deleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <InventoryContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
            {children}
        </InventoryContext.Provider>
    );
};