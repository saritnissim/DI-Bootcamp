import { Component } from "react";
class UserForm extends Component {
  constructor(props) {
    super(props);
  }

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

    const handleChange = this.props.handleChange;
    return (
      <form action="" method="GET">
        {/* Text Inputs */}
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="age">Age:</label>
        <input type="text" name="age" value={age} onChange={handleChange} />
        <br />

        {/* Radio Buttons for Gender */}
        <p>Gender:</p>
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={handleChange}
        />
        <br />

        {/* Dropdown for Destination */}
        <label htmlFor="destination">Choose a destination:</label>
        <select
          id="destination"
          name="destination"
          value={destination}
          onChange={handleChange}
        >
          <option selected={destination === "thailand"} value="thailand">
            Thailand
          </option>
          <option selected={destination === "japan"} value="japan">
            Japan
          </option>
          <option selected={destination === "brazil"} value="brazil">
            Brazil
          </option>
        </select>
        <br />

        {/* Dietary Restrictions */}
        <p>Dietary Restrictions:</p>
        <label htmlFor="nonuts">Nuts-Free</label>
        <input
          checked={nonuts}
          type="checkbox"
          name="nonuts"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="nolactose">Lactose-Free</label>
        <input
          checked={nolactose}
          type="checkbox"
          name="nolactose"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="isvegan">Vegan</label>
        <input
          checked={isvegan}
          type="checkbox"
          name="isvegan"
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default UserForm;
