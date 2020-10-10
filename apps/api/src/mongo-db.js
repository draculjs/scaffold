import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})

const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () {
    return this.toString();
};
