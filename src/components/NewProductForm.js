import React from "react";
import Content from "./Content";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const options = {


    /** this can be set up as a json */
    method: 'POST',
    url: '/products/add',
    headers: {'user-agent': 'vscode-restclient', 'content-type': 'application/json'},
    data: {
      nameTranslated: {en: 'hello', es: 'hola'},
      tax: {enabledManualTaxes: ['1']},
      categoryIds: [[1], [2]],
      options: [],
      _id: '5f540753db2f673bb006fd32',
      Options: [],
      name: 'update',
      sku: '3D57JJFF0',
      quantity: 1,
      price: 19.99,
      brand: 'American Wino',
      compareToPrice: 5,
      isShippingRequired: true,
      weight: 5,
      enabled: true,
      description: 'Stainless Steel Wine Tumbler for all your Winetumbling needs!',
      productClassId: 4,
      fixedShippingRateOnly: false,
      fixedShippingRate: 20,
      __v: 0
    }
  };

class ProductEntryForm extends React.Component {
  /**
    form should have a onChange handler
    */

  constructor(props) {
    super(props);

    /** set it up similar to post/ route */

    /** TODO: look up bootstrap-react-table-2 for displaying data */
    this.state = {

      nameTranslated: {
        en: "",
        es: ""
      },
      tax: {
        enabledManualTaxes: [
          ""
        ]
      },
      categoryIds: [
        [
          0
        ],
        [
          0
        ]
      ],
      name: "",
      _id: "",
      sku: "",
      quantity: 0,
      price: 0,
      brand: "",
      compareToPrice: 0,
      isShippingRequired: true,
      weight: 0,
      enabled: true,
      description: "",
      productClassId: 0,
      fixedShippingRateOnly: false,
      fixedShippingRate: 0,
    };
  }


  onChange = (event) => {
    event.preventDefault();
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value,
    });
    // debugger;
    console.log(this.state)
  };

  onSubmit = (event) => {
    const data = this.state
      event.preventDefault()
      debugger;
      axios.post("http://localhost:5000/products/add", {data}).then((response) => {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });  
    }      

  render() {
    return (
      <div>
        <Content>
          <Form onSubmit={this.onSubmit}>
            <h5>Product Entry Form</h5>
            <Form.Group>
              <Form.Label htmlFor="sku">SKU</Form.Label>
              <Form.Control
                id="sku"
                name="sku"
                value={this.state.sku}
                type="text"
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="quantity">Quantity</Form.Label>
              <Form.Control
                id="quantity"
                name="quantity"
                value={this.state.quantity}
                type="number"
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="productName">Product Name</Form.Label>
              <Form.Control
                id="productName"
                name="name"
                value={this.state.name}
                type="text"
                onChange={this.onChange}
              ></Form.Control>
            </Form.Group>
            {/* Look up bootstrap form options for indented lines this should be the
                    two translated names of the product: English and Spanish */}
            <Form.Group>
              <Form.Label htmlFor="englishProductText">
                Product name in English
              </Form.Label>
              <Form.Control
                id="englishProductText"
                name="en"
                value={this.state.nameTranslated.en}
                onChange={this.onChange}
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="spanishProductText">
                Product name in Spanish
              </Form.Label>
              <Form.Control
                id="spanishProductText"
                name="es"
                value={this.state.nameTranslated.es}
                onChange={this.onChange}
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="price">Price</Form.Label>
              <Form.Control
                id="price"
                name="price"
                value={this.state.price}
                onChange={this.onChange}
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="compareToPrice">Price to Compare</Form.Label>
              <Form.Control
                id="compareToPrice"
                name="compareToPrice"
                value={this.state.compareToPrice}
                onChange={this.onChange}
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="isShippingRequired">
                Is shipping required on this Product?
              </Form.Label>
              <Form.Control
                id="isShippingRequired"
                name="isShippingRequired"
                value={this.state.isShippingRequired}
                onChange={this.onChange}
                type="checkbox"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="categoryIds">Category Id Numbers</Form.Label>
              <Form.Control
                id="categoryIds"
                name="categoryIds"
                onChange={this.onChange}
                type="search"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="weight">Product weight</Form.Label>
              <Form.Control
                id="weight"
                name="weight"
                onChange={this.onChange}
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="enabled">Enabled? </Form.Label>
              <Form.Control
                id="enabled"
                name="enabled"
                onChange={this.onChange}
                type="checkbox"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="created">Date-time of entry</Form.Label>
              <Form.Control
                id="created"
                name="created"
                type="datetime-local"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="fixedShippingRateOnly">
                Fixed Shipping Rate Only?
              </Form.Label>
              <Form.Control
                id="fixedShippingRateOnly"
                name="fixedShippingRateOnly"
                type="checkbox"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="fixedShippingRate">
                Rate for fixed shipping
              </Form.Label>
              <Form.Control
                id="fixedShippingRate"
                name="fixedShippingRate"
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="enabledManualTaxes">
                Enter tax rate
              </Form.Label>
              <Form.Control
                id="enabledManualTaxes"
                name="enabledManualTaxes"
                type="number"
              ></Form.Control>
            </Form.Group>
            <h5>Product Options</h5>
            <Form.Group>
              <Form.Label htmlFor="optionType">Type of option</Form.Label>
              <Form.Control
                id="optionType"
                name="optionType"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="optionName">Name of option</Form.Label>
              <Form.Control
                id="optionName"
                name="optionName"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="englishOptionName">
                Name of option in English
              </Form.Label>
              <Form.Control
                id="englishOptionName"
                name="englishOptionName"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="spanishOptionName">
                Name of option in Spanish
              </Form.Label>
              <Form.Control
                id="spanishOptionName"
                name="spanishOptionName"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="choicesText">
                Choices for the option
              </Form.Label>
              <Form.Control
                id="choicesText"
                name="choicesText"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="choicesTextEnglish">
                Choices for the option in English
              </Form.Label>
              <Form.Control
                id="choicesTextEnglish"
                name="choicesTextEnglish"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="choicesTextSpanish">
                Choices for the option in Spanish
              </Form.Label>
              <Form.Control
                id="choicesTextSpanish"
                name="choicesTextSpanish"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="priceModifier">Price modifier</Form.Label>
              <Form.Control
                id="priceModifier"
                name="priceModifier"
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="priceModifierType">
                Type of price modifier
              </Form.Label>
              <Form.Control
                id="priceModifierType"
                name="priceModifierType"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="defaultChoice">
                Default choice for option
              </Form.Label>
              <Form.Control
                id="defaultChoice"
                name="defaultChoice"
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="required">
                Is this option required?
              </Form.Label>
              <Form.Control
                id="required"
                name="required"
                type="checkbox"
              ></Form.Control>
            </Form.Group>
            <h5>Shipping</h5>
            <Form.Group>
              <Form.Label htmlFor="shippingType">Type of shipping</Form.Label>
              <Form.Control
                id="shippingType"
                name="shippingType"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="methodMarkup">Method markup</Form.Label>
              <Form.Control
                id="methodMarkup"
                name="methodMarkup"
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="flatRate">Flat shipping rate</Form.Label>
              <Form.Control
                id="flatRate"
                name="flatRate"
                type="number"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="disabledMethods">
                Disabled methods
              </Form.Label>
              <Form.Control
                id="disabledMethods"
                name="disabledMethods"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="enabledMethods">Enabled methods</Form.Label>
              <Form.Control
                id="enabledMethods"
                name="enabledMethods"
                type="text"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit" onSubmit={this.onSubmit}>
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Content>
      </div>
    );
  }
}

export default ProductEntryForm;
