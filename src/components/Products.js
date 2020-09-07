import React from "react";
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
    return body;
  };

  render() {
    let products = this.state.response

    console.log({products})
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>
                ID
              </th>
              <th scope='col'>
                Name
              </th>
              <th scope='col'>
                Brand
              </th>
              <th scope='col'>
                Last Update
              </th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>

        </table>

          {products.map((product) =>
            <p key={product._id}>{product.name}</p>
          )}
      </div>
    );
  }
}
export default Products;