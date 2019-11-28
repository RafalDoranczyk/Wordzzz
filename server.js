const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const app = express();
const path = require("path");
const WordsWithTranslations = require("./models/WordToTranslate");
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = mongoose.connection;

mongoose.connect(
  encodeURI(config.db || process.env.DB_CONNECT),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log(err);
    }
  }
);

db.once("open", () => {
  console.log("mongo working");
});

app.post("/api/addWordWithTranslations", (req, res) => {
  const inputValues = req.body.lowerCaseInputValues;
  const {
    wordToTranslate,
    translation_0,
    translation_1,
    translation_2,
    translation_3,
    translation_4,
    translation_5
  } = inputValues;

  const newWord = new WordsWithTranslations({
    wordToTranslate,
    translation_0,
    translation_1,
    translation_2,
    translation_3,
    translation_4,
    translation_5
  });
  return newWord
    .save()
    .then(() => res.json("Dodano do całej bazy!"))
    .catch(err => {
      return res.json(err);
    });
});

app.post("/api/fetchMongoWords", (req, res) => {
  const wordsAlreadyHad = req.body.wordsAlreadyHad;
  const findWords = WordsWithTranslations.find({
    wordToTranslate: { $nin: wordsAlreadyHad }
  });
  findWords
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.json(err);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("node is working");
});
