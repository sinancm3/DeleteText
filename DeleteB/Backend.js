import Express from "express";
import cors from "cors";
import MongoshConnect, { Data } from "./MongoDb.js";

const app = Express();
app.use(cors());
app.use(Express.json());

MongoshConnect();

app.get("/", async (req, res) => {
  await Data.find().then((re) => {
    console.log(re);
    res.json({ datas: re });
  });
});

app.post("/Submit", async (req, res) => {
  console.log("workking");

  const { value } = req.body;
  const Adding = new Data({
    value,
  });
  await Adding.save();
  console.log(Adding);

  res.json({ text: value });
});

app.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    res.send("delete");
    await Data.findByIdAndDelete(id);
    // const check = Data.find().limit(1);
    // console.log(check);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => console.log(`port on`));
