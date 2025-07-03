import express from 'express';
import Hotel from '../models/Hotel.mjs';

const router = express.Router();

// 🔷 Get all hotels
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find().populate('destinationId');
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 🔷 Create a new hotel
router.post('/', async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        const savedHotel = await hotel.save();
        res.status(201).json(savedHotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 🔷 Update a hotel
router.put('/:id', async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json(updatedHotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 🔷 Delete a hotel
router.delete('/:id', async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json({ message: 'Hotel deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
