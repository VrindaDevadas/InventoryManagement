import React, { useContext, useState } from 'react';
import { InventoryContext } from '../contexts/InventoryContext';
import { FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';
// We are re-adding the AddItemForm and EditItemForm as the app is stable now
import AddItemForm from './AddItemForm';
import EditItemForm from './EditItemForm';

const InventoryList = () => {
    const { items, deleteItem } = useContext(InventoryContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory === '' || item.category === filterCategory)
    );

    const categories = [...new Set(items.map(item => item.category))];

    return (
        <>
            <div className="bg-component-dark p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Inventory Dashboard</h2>

                {/* --- UPDATED CONTROLS SECTION FOR RESPONSIVENESS --- */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">

                    {/* Search Bar */}
                    <div className="relative w-full md:w-auto md:flex-grow">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="bg-background-dark text-text-light pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
                        {/* Filter Dropdown */}
                        <select
                            className="bg-background-dark text-text-light px-4 py-2 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary"
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        {/* Add Item Button */}
                        <button
                            onClick={() => setAddModalOpen(true)}
                            className="flex items-center justify-center gap-2 bg-primary hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
                        >
                            Add Item
                        </button>
                    </div>
                </div>

                {/* Inventory Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-700">
                            <tr>
                                <th className="p-4 text-text-muted font-medium">Item Name</th>
                                <th className="p-4 text-text-muted font-medium">SKU / Code</th>
                                <th className="p-4 text-text-muted font-medium">Quantity</th>
                                <th className="p-4 text-text-muted font-medium">Category</th>
                                <th className="p-4 text-text-muted font-medium">Location</th>
                                <th className="p-4 text-text-muted font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map(item => (
                                <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800">
                                    <td className="p-4 text-text-light">{item.name}</td>
                                    <td className="p-4 text-text-muted">{item.sku}</td>
                                    <td className={`p-4 font-bold ${item.quantity < 10 ? 'text-yellow-500' : 'text-text-light'}`}>{item.quantity}</td>
                                    <td className="p-4 text-text-light">{item.category}</td>
                                    <td className="p-4 text-text-muted">{item.location}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => setEditingItem(item)}
                                                className="flex items-center gap-1 text-text-muted hover:text-white"
                                            >
                                                <FiEdit />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteItem(item.id)}
                                                className="flex items-center gap-1 bg-danger hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
                                            >
                                                <FiTrash2 />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Conditionally render BOTH modals */}
            {isAddModalOpen && <AddItemForm onClose={() => setAddModalOpen(false)} />}

            {editingItem && (
                <EditItemForm
                    item={editingItem}
                    onClose={() => setEditingItem(null)}
                />
            )}
        </>
    );
};

export default InventoryList;