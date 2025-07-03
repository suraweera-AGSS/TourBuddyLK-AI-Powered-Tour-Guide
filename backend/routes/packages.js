import express from 'express';
import Package from '../models/Package.mjs';

const router = express.Router();

// 🔷 Get all packages
router.get('/', async (req, res) => {
    try {
        const packages = await Package.find().populate('destinations');
        res.json(packages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 🔷 Create a new package
router.post('/', async (req, res) => {
    try {
        const pkg = new Package(req.body);
        const savedPackage = await pkg.save();
        res.status(201).json(savedPackage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 🔷 Update a package
router.put('/:id', async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.json(updatedPackage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 🔷 Delete a package
router.delete('/:id', async (req, res) => {
    try {
        const deletedPackage = await Package.findByIdAndDelete(req.params.id);
        if (!deletedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.json({ message: 'Package deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
