import { readItems, createItems, updateItems, deleteItems } from '../models/itemModel.js';

const getAllItems = async (req, res) => {
    try {
        await readItems((err, rows) => {
            if (err) {
                return res.status(500).json({ message: 'Error retrieving items', error: err.message });
            }
            res.status(200).json(rows);
        });
    } catch (error) {
        res.status(500).json({ message: 'Unexpected server error', error: error.message });
    }
};

const createItem = async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }

    try {
        await createItems(name, description, (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Error creating item', error: err.message });
            }
            res.status(201).json({ message: `Item created successfully with ID: ${data.id}`, item: data });
        });
    } catch (error) {
        res.status(500).json({ message: 'Unexpected server error', error: error.message });
    }
};

const updateItem = async (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Name and description are required' });
    }

    try {
        await updateItems(id, name, description, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating item', error: err.message });
            }
            res.status(200).json({ message: 'Item updated successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Unexpected server error', error: error.message });
    }
};

const deleteItem = async (req, res) => {
    const id = req.params.id;
    try {
        await deleteItems(id, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error deleting item', error: err.message });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Unexpected server error', error: error.message });
    }
};

export {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
};
