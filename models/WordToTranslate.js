const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewWordWithTranslations = new Schema({
  wordToTranslate: { type: String, required: true },
  translation_0: { type: String, required: false },
  translation_1: { type: String, required: false },
  translation_2: { type: String, required: false },
  translation_3: { type: String, required: false },
  translation_4: { type: String, required: false },
  translation_5: { type: String, required: false }
});

module.exports = mongoose.model("wordzs", NewWordWithTranslations);
