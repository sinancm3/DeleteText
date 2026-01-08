import mongoose from "mongoose";

async function MongoshConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/DeleteData");
    console.log("connectMongoDB");
  } catch (error) {
    console.log(error);
  }
}

const { Schema } = mongoose;

const text = new Schema({
  value: { type: String, require: true, trim: true },
});

const Data = mongoose.model("datas", text);

export default MongoshConnect;
export { Data };
