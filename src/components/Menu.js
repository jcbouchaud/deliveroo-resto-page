import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Menu extends React.Component {
  state = { isOpen: false };
  render() {
    return (
      <div className="top-category all">
        <ul
          className="visible"
          onClick={() => this.setState({ isOpen: false })}
        >
          {this.props.restosData &&
            Object.keys(this.props.restosData.menu)
              .slice(0, 4)
              .map((x, index) => (
                <li key={index}>
                  <AnchorLink offset={() => 100} href={"#" + x}>
                    {x}
                  </AnchorLink>
                </li>
              ))}
        </ul>

        <ul className="hidden">
          <div
            className="more"
            onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            More
            <span>
              <i className="fas fa-chevron-down" />
            </span>
          </div>
          {this.state.isOpen
            ? this.props.restosData &&
              Object.entries(this.props.restosData.menu)
                .slice(4)
                .map((x, index) => (
                  <div key={index}>
                    {x[1].length > 0 ? (
                      <li onClick={() => this.setState({ isOpen: false })}>
                        <AnchorLink offset={() => 100} href={"#" + x[0]}>
                          {x[0]}
                        </AnchorLink>
                      </li>
                    ) : null}
                  </div>
                ))
            : null}
        </ul>
      </div>
    );
  }
}
export default Menu;
