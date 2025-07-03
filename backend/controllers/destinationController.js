import Destination from '../models/Destination.js';

// Create
export const createDestination = async (req, res) => {
    try {
        const newDestination = new Destination(req.body);
        const saved = await newDestination.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Read all
export const getAllDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.json(destinations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Read one
export const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        if (!destination) return res.status(404).json({ error: 'Not found' });
        res.json(destination);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
export const updateDestination = async (req, res) => {
    try {
        const updated = await Destination.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'Not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete
export const deleteDestination = async (req, res) => {
    try {
        const deleted = await Destination.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
