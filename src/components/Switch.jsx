// from https://upmostly.com/tutorials/build-a-react-switch-toggle-component

export const Switch = ({ isOn, handleToggle, label }) => {
  return (
    <>
      <input
        className="switch__checkbox"
        checked={isOn}
        onChange={handleToggle}
        id={label}
        type="checkbox"
        aria-label={label}
      />
      <label
        className={isOn ? "switch__label switch__label--on" : "switch__label"}
        htmlFor={label}
      >
        <span className="switch__button" />
      </label>
    </>
  );
};
