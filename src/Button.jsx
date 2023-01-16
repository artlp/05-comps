import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  warning,
  danger,
  success,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkButtonStyle: ({ primary, secondary, warning, danger, success }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!success);
      if (count > 1) {
    return new Error('Only one of primary, secondary, warning, danger and success can be true')
      }
  },
};

export default Button;
