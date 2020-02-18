import React, { Component } from "react";
import { connect } from "react-redux";
import { createLink } from "../../actions/links";

export class CreateLink extends Component {
  state = {
    title: "aaaaaaaaa",
    //imgLink: "",
    link: "Chaale"
    //categories: []
  };
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  render() {
    return (
      <div>
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            className="form-input mt-1 block w-full"
            placeholder="Jane Doe"
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
          />
        </label>
        <button onClick={this.props.createLink.bind(this, this.state)}>
          ENVIAR
        </button>
      </div>
    );
  }
}
// Sepa
const mapStateToProps = state => ({
  links: state.links.links
});

export default connect(mapStateToProps, { createLink })(CreateLink);
