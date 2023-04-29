import PropTypes from "prop-types";

export const Paragraph = (props) => {
  return <p className={props.className}>{props.children}, Kivi</p>;
};

Paragraph.propTypes = {
  className: PropTypes.string,
};
