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
          {info.map((info) =>
            <p key={info._id}>{info.username}</p>
          )}
      </div>
    );
  }
}
export default Information;