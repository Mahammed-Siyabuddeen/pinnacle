import mongoose from 'mongoose'
const Schema = mongoose.Schema

const EventSchema = new Schema({

})

const EventSchemaModel = mongoose.model('EventSchema', EventSchema)
export default EventSchemaModel