import PropTypes from "prop-types";

function Button({
  label,
  backgroundColor = "red",
  color = "white",
  size = "md",
  handleClick,
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem `,
    border: "none",
    color,
    borderRadius: "5px",
  };

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
