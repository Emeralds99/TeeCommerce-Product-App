import React from "react";
class Users extends React.Component {
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
    const response = await fetch("http://localhost:5000/users/");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let users = this.state.response
    return (
      <div>
          {users.map((product) =>
            <p key={product._id}>{product._id}</p>
          )}
      </div>
    );
  }
}
export default Users;