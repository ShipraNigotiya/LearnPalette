
const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    title: String,
    // lecture: { type: Types.ObjectId, ref: 'lecture' },
    file: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('video', mySchema);