export const Header = ({ title, text }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__text">{text}</p>
    </div>
  );
};
