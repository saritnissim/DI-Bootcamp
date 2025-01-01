import { Component } from "react";
class Summary extends Component {
  render() {
    const {
      firstname,
      lastname,
      age,
      gender,
      destination,
      nonuts,
      nolactose,
      isvegan,
    } = this.props.info;
    return (
      <div>
        <h1>Summary</h1>
        <p>Your name is: {`${firstname} ${lastname}`}</p>
        <p>Your age is: {age}</p>
        <p>Your gender is: {gender}</p>
        <p>Your destination is: {destination}</p>
        <p>Your dietary restrictions are :</p>
        <span>No nuts: {nonuts ? "Yes" : "No"}</span>
        <br />
        <span>No lactose: {nolactose ? "Yes" : "No"}</span>
        <br />
        <span>Is vegan: {isvegan ? "Yes" : "No"}</span>
      </div>
    );
  }
}
export default Summary;
