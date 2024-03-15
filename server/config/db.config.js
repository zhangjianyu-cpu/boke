const mongoose = require("mongoose")

mongoose.set('strictQuery', false); // 如果你想改变 strictQuery 默认行为

mongoose.connect("mongodb://127.0.0.1:27018/boke-system")