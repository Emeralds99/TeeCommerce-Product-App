const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionsSchema = new Schema(
  {
    type: String,
    name: String,
    nameTranslated: {
      en: String,
      es: String
  }
});

const shippingSchema = new Schema(
  {
    type: String,
    methodMarkup: Number,
    flatRate: Number,
    disabledMethods: [
      Array
    ],
    enabledMethods: [Array]
  });

const choicesSchema = new Schema(
  {
    text: String,
    textTranslated: {
      en: String,
      es: String
    },
    priceModifier: Number,
    priceModifierType: Number
  },
  {
    text: String,
    textTranslated: {
      en: String,
      es: String
    },
    priceModifier: Number,
    priceModifierType: String
  },
  {
  defaultChoice: Number,
  required: Boolean
    });

const productsSchema = new Schema({
  sku: String,
  quantity: Number,
  name: String,
  nameTranslated: {
    en: String,
    es: String
  },
  price: Number,
  compareToPrice: Number,
  isShippingRequired: Boolean,
  categoryIds: [Number],
  weight: Number,
  enabled: Boolean,
  description: String,
  productClassId: Number,
  created: String,
  fixedShippingRateOnly: Boolean,
  fixedShippingRate: Number,
  brand: String,
  tax: {
    enabledManualTaxes: [
      Number
    ]
  },
  options: [
    optionsSchema
  ],
  choices: [
    choicesSchema
  ],
  shipping: {
    shippingSchema
  }
});

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;