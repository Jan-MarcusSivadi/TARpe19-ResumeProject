const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/CV_DB', { useNewUrlParser: true, useUnifiedTopology: true } );
require('./CV');