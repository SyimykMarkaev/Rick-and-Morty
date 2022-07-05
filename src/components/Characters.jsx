import Card from "./Card";

const Characters = ({ characters, handleItemDelete }) => {
  return characters.map((item) => (
    <Card handleItemDelete={handleItemDelete} item={item} />
  ));
};

export default Characters;
