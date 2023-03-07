import Model from '../models/model.js'
import {v4 as uuidv4} from 'uuid';

export const createBus = async(req,res) => {

    const data = new Model({
        number: req.body.number,
        plate: req.body.plate,
        seats: req.body.seats,
        driver: req.body.driver,
        rating: req.body.rating,
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};