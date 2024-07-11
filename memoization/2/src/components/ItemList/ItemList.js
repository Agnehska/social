import React, { useCallback, useState } from "react";

import Item from "../Item/Item";

import styles from "./ItemList.module.css";

const ItemsInitState = [
  {
    id: "1dcdf741-5140-45c1-ac2d-8512339c20df",
    label: "First Item",
  },
  {
    id: "f87f7a2d-92ab-4890-909a-0795699e7f21",
    label: "Second Item",
  },
  {
    id: "8a6ff044-80fb-4fd7-b021-9eed7f9ffc24",
    label: "Third Item",
  },
];

const ItemList = () => {
  const [items, setItems] = useState(ItemsInitState);

  const remove = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  // const remove = useCallback(
  //   (id) => setItems((prev) => prev.filter((item) => item.id !== id)),
  //   []
  // );

  return (
    <div className={styles.ItemList}>
      {items.map((item) => (
        <Item item={item} remove={remove} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;
