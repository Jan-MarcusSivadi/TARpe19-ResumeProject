const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CVSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    objective: {
        type: String
    },
    education: {
        type: Array
    },
    education_year: {
        type: Array
    },
    languages: {
        type: Array
    },
    computer_knowledge: {
        type: Array
    },
    desired_position: {
        type: String
    },
    other: {
        type: String
    }
});
mongoose.model('CV', CVSchema);