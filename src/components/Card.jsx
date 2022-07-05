import "../styles.css";

const Card = ({ item, handleItemDelete }) => {
  return (
    <div className="card">
      {item.name}
      <span onClick={() => handleItemDelete(item)} className="delete-btn">
        X
      </span>
    </div>
  );
};

export default Card;
