import Button from "./Button";

const Header = ({ onShowHandler, showForm }) => {
  return (
    <div className="header">
      <h2>Pencatat Tugas</h2>
      <Button
        text={!showForm ? "Buka" : "Tutup"}
        onShowHandler={onShowHandler}
      />
    </div>
  );
};

export default Header;
