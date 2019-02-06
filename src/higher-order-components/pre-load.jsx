import React from "react";

export default Component =>
  class extends React.Component {
    componentDidMount() {
      const { onLoad } = this.props;
      if (typeof onLoad === "function") {
        onLoad(this.props);
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };
