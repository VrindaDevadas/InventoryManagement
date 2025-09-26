import React, { useState, useContext, useEffect } from 'react';
import { InventoryContext } from '../contexts/InventoryContext';

const EditItemForm = ({ item, onClose }) => {
    const { updateItem } = useContext(InventoryContext);
    // Initialize state with the item being edited
    const [formData, setFormData] = useState(item);

    // This ensures the form updates if a different item is selected while the modal is open
    useEffect(() => {
        setFormData(item);
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ensure quantity is a number before updating
        updateItem({ ...formData, quantity: parseInt(formData.quantity, 10) || 0 });
        onClose(); // Close the modal
    };

    // Reusable input field classes
    const inputClasses = "w-full mt-2 p-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary";

    return (
        // Modal Wrapper
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                className="bg-component-dark p-8 rounded-lg shadow-2xl w-full max-w-2xl z-50"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Edit Item</h2>
                    <button onClick={onClose} className="text-2xl text-text-muted hover:text-white">&times;</button>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Grid Layout for Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">

                        {/* Item Name (Full Width) */}
                        <div className="md:col-span-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-muted">Item Name</label>
                            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className={inputClasses} required />
                        </div>

                        {/* SKU / Code */}
                        <div>
                            <label htmlFor="sku" className="text-sm font-medium text-text-muted">SKU / Code</label>
                            <input id="sku" type="text" name="sku" value={formData.sku} onChange={handleChange} className={inputClasses} required />
                        </div>

                        {/* Quantity */}
                        <div>
                            <label htmlFor="quantity" className="text-sm font-medium text-text-muted">Quantity</label>
                            <input id="quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} className={inputClasses} required />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="text-sm font-medium text-text-muted">Category</label>
                            <input id="category" type="text" name="category" value={formData.category} onChange={handleChange} className={inputClasses} required />
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="text-sm font-medium text-text-muted">Location</label>
                            <input id="location" type="text" name="location" value={formData.location} onChange={handleChange} className={inputClasses} required />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end mt-8 gap-4">
                        <button type="button" onClick={onClose} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-md">
                            Cancel
                        </button>
                        <button type="submit" className="bg-primary hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md">
                            Save Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItemForm;