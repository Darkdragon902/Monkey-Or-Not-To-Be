const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const spSchema = new Schema({
    text: {
        type: String
        
    },
    score: {
        type: Number
    },
    winCount: {
        type: Number
    },
    lossCount: {
        type: Number
    }

}, {timestamps: true})

const RSP = mongoose.model('RealShakeSpear',spSchema);

const FSP = mongoose.model('FakeShakeSpear',spSchema);

module.exports = RSP;
module.exports = FSP;