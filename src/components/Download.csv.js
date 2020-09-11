
import React from "react";
class Download extends React.Component {
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

    return body
  };

  

  render() {
    return (
      <>
      <button className="btn btn-link my-2 my-sm-0"  type="submit">.csv</button>
      </>
    )
  }
}

export default Download;