import React from "react";
class Information extends React.Component {
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
    const response = await fetch("http://localhost:5000/info/");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let info = this.state.response
    console.log({info})
    return (
      <div>
      <h5>Your Catalog</h5>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>
              Name
            </th>
            <th scope='col'>
              Description
            </th>
            <th scope='col'>
              Status
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
          
        {info.map((info) =>
          <tr key={info._id}>
            <td>{info.description}</td>
            <td>{info.status}</td>
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
export default Information;