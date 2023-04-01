export const Slider = ({ min, max, value, onChange, label }) => {
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(value * 100) / max}% 100%`,
    };
  };

  return (
    <input
      type="range"
      name={label}
      id={label}
      className="slider"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      style={getBackgroundSize()}
    />
  );
};
