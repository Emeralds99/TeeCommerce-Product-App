import React from "react";
import ProductEntryForm from './NewProductForm'

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      response: [],
    };
  }
  componentDidMount() {
    this.callApi()
      .then((response) => {
        this.setState({ response });
      })
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("http://localhost:5000/products/");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log({body})
    return body;
  };

  render() {
    let products = this.state.response
    console.log({products})

    return (
      <div>
        <ProductEntryForm/>
        <h5>Your Catalog</h5>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>
                { this.state.response.name }
              </th>
              <th scope='col'>
                Brand
              </th>
              <th scope='col'>
                Price
              </th>
              <th scope='col'>
                Edit
              </th>
              <th scope='col'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            
          {products.map((product) =>
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <th>Edit</th>
              <th>Delete  </th>
            </tr>
            
          
          )}
          </tbody>

        </table>

      </div>
    );
  }
}

export default Products;