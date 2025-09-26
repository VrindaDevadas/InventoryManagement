import React, { useContext } from 'react';
import { InventoryContext } from '../contexts/InventoryContext';
import StatCard from './StatCard';
import InventoryList from './InventoryList';

const Dashboard = () => {
    const { items } = useContext(InventoryContext);

    // Calculate statistics
    const totalItems = items.length;
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const categories = new Set(items.map(item => item.category)).size;
    const lowStockCount = items.filter(item => item.quantity < 10).length;

    return (
        <main className="container mx-auto p-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Items" value={totalItems} />
                <StatCard title="Total Quantity" value={totalQuantity} />
                <StatCard title="Categories" value={categories} />
                <StatCard
                    title="Low Stock (< 10)"
                    value={lowStockCount}
                    valueClassName={lowStockCount > 0 ? 'text-yellow-500' : ''}
                />
            </div>
            <InventoryList />
        </main>
    );
};

export default Dashboard;