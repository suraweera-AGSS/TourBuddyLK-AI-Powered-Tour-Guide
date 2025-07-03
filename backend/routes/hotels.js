import express from 'express';
import {
    getAllHotels,
    createHotel,
    updateHotel,
    deleteHotel
} from '../controllers/hotelController.mjs';

const router = express.Router();

router.get('/', getAllHotels);
router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

export default router;
