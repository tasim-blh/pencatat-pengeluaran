const Button = ({ text, onShowHandler }) => {
  return (
    <div>
      <button className="btn" onClick={() => onShowHandler(true)}>
        {text}
      </button>
    </div>
  );
};

export default Button;
