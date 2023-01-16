import className from "classnames";
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

  const classes = className("px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-700 bg-gray-700 text-white": secondary,
    "border-yellow-500 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "border-green-500 bg-green-500 text-white": success,
    // "border-blue-500 bg-blue-500 text-white": outline,
    // "border-blue-500 bg-blue-500 text-white": rounded,
  });

  return (
    <button className={classes}>
      {children}
    </button>
  );
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
      return new Error(
        "Only one of primary, secondary, warning, danger and success can be true"
      );
    }
  },
};

export default Button;
