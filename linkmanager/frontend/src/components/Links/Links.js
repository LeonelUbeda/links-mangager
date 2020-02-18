import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLinks, deleteLink } from "../../actions/links";

export class Links extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    getLinks: PropTypes.func.isRequired,
    deleteLink: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLinks();
  }

  render() {
    return (
      <Fragment>
        <h2>Links</h2>
        <table>
          <thead>
            <tr>
              <th>Taran</th>
            </tr>
          </thead>
          <tbody>
            {this.props.links.map(link => (
              <tr key={link.id}>
                {link.title}
                <button onClick={this.props.deleteLink.bind(this, link.id)}>
                  DELETE
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  links: state.links.links
});

export default connect(mapStateToProps, { getLinks, deleteLink })(Links);
