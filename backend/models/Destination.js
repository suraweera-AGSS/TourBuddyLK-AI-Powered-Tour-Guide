import mongoose from 'mongoose';

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true,
});

const Destination = mongoose.model('Destination', destinationSchema);
export default Destination;
