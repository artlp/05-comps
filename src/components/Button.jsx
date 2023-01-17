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
  ...rest
}) {
  const classes = className(rest.className,"w-80 m-2 flex justify-center items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-700 bg-gray-700 text-white": secondary,
    "border-yellow-500 bg-yellow-500 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "border-green-500 bg-green-500 text-white": success,
    "bg-white": outline,
    "rounded-full": rounded,
    "text-blue-500": outline && primary,
    "text-gray-700": outline && secondary,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger,
    "text-green-500": outline && success,
  });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkButtonStyle: ({primary, secondary, warning, danger, success }) => {
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
