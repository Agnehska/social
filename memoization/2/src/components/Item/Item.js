import styles from "./Item.module.css";

const Item = ({ item, remove }) => {
  console.log(`${item.label}`);

  return (
    <div className={styles.Item}>
      <h2>{item.label}</h2>
      <button onClick={remove.bind(null, item.id)}>remove</button>
    </div>
  );
};

export default Item;

// export default React.memo(Item); // вызываем его при экспорте
