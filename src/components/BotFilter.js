import React, { Component } from "react";

class BotFilter extends Component {
  render() {
    return (
      <select onChange={this.props.handleChange}>
        <option selected value="All">
          All
        </option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Support">Support</option>
      </select>
    );
  }
}

export default BotFilter;
