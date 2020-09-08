import React from 'react'
import Content from './Content'
import {Form} from 'react-bootstrap';

class ProductEntryForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
      
            <Content>
                <Form>
                    <h1>Product Entry Form</h1>
                    <Form.Group>
                        <Form.Label htmlFor='sku'>SKU</Form.Label>
                        <Form.Control id='sku' name='sku' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='quantity'>Quantity</Form.Label>
                        <Form.Control id='quantity' name='quantity' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='productName'>Product Name</Form.Label>
                        <Form.Control id='productName' name='productName' type='text' ></Form.Control>
                    </Form.Group>
                    {/* Look up bootstrap form options for indented lines this should be the
                    two translated names of the product: English and Spanish */}
                    <Form.Group>
                        <Form.Label htmlFor='englishProductText'>Product name in English</Form.Label>
                        <Form.Control id='englishProductText' name='englishProductText' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='spanishProductText'>Product name in Spanish</Form.Label>
                        <Form.Control id='spanishProductText' name='spanishProductText' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='price'>Price</Form.Label>
                        <Form.Control id='price' name='price' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='compareToPrice'>Price to Compare</Form.Label>
                        <Form.Control id='compareToPrice' name='compareToPrice' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='isShippingRequired'>Is shipping required on this Product?</Form.Label>
                        <Form.Control id='isShippingRequired' name='isShippingRequired' type='checkbox' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='categoryIds'>Category Id Numbers</Form.Label>
                        <Form.Control id='categoryIds' name='categoryIds' type='search' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='weight'>Product weight</Form.Label>
                        <Form.Control id='weight' name='weight' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='enabled'>Enabled? </Form.Label>
                        <Form.Control id='enabled' name='enabled' type='checkbox' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='created'>Date-time of entry</Form.Label>
                        <Form.Control id='created' name='created' type='datetime-local' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='fixedShippingRateOnly'>Fixed Shipping Rate Only?</Form.Label>
                        <Form.Control id='fixedShippingRateOnly' name='fixedShippingRateOnly' type='checkbox' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='fixedShippingRate'>Rate for fixed shipping</Form.Label>
                        <Form.Control id='fixedShippingRate' name='fixedShippingRate' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='enabledManualTaxes'>Enter tax rate</Form.Label>
                        <Form.Control id='enabledManualTaxes' name='enabledManualTaxes' type='number' ></Form.Control>
                    </Form.Group>
                    <h3>Product Options</h3>
                    <Form.Group>
                        <Form.Label htmlFor='optionType'>Type of option</Form.Label>
                        <Form.Control id='optionType' name='optionType' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='optionName'>Name of option</Form.Label>
                        <Form.Control id='optionName' name='optionName' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='englishOptionName'>Name of option in English</Form.Label>
                        <Form.Control id='englishOptionName' name='englishOptionName' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='spanishOptionName'>Name of option in Spanish</Form.Label>
                        <Form.Control id='spanishOptionName' name='spanishOptionName' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='choicesText'>Choices for the option</Form.Label>
                        <Form.Control id='choicesText' name='choicesText' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='choicesTextEnglish'>Choices for the option in English</Form.Label>
                        <Form.Control id='choicesTextEnglish' name='choicesTextEnglish' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='choicesTextSpanish'>Choices for the option in Spanish</Form.Label>
                        <Form.Control id='choicesTextSpanish' name='choicesTextSpanish' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='priceModifier'>Price modifier</Form.Label>
                        <Form.Control id='priceModifier' name='priceModifier' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='priceModifierType'>Type of price modifier</Form.Label>
                        <Form.Control id='priceModifierType' name='priceModifierType' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='defaultChoice'>Default choice for option</Form.Label>
                        <Form.Control id='defaultChoice' name='defaultChoice' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='required'>Is this option required?</Form.Label>
                        <Form.Control id='required' name='required' type='checkbox' ></Form.Control>
                    </Form.Group>
                    <h3>Shipping</h3>
                    <Form.Group>
                        <Form.Label htmlFor='shippingType'>Type of shipping</Form.Label>
                        <Form.Control id='shippingType' name='shippingType' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='methodMarkup'>Method markup</Form.Label>
                        <Form.Control id='methodMarkup' name='methodMarkup' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='flatRate'>Flat shipping rate</Form.Label>
                        <Form.Control id='flatRate' name='flatRate' type='number' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='disabledMethods'>Disabled methods</Form.Label>
                        <Form.Control id='disabledMethods' name='disabledMethods' type='text' ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='enabledMethods'>Enabled methods</Form.Label>
                        <Form.Control id='enabledMethods' name='enabledMethods' type='text' ></Form.Control>
                    </Form.Group>
                </Form>
            </Content>
        </div>
    }
}

export default ProductEntryForm 