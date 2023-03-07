import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    number: {
        required: true,
        type: String
    },
    plate: {
        required: true,
        type: String
    },
    seats: {
        required: true,
        type: Number
    },
    driver: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: String
    }
})

export default mongoose.model('Data', dataSchema);