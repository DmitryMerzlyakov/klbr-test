import { type FC } from "react";

import { motion } from "framer-motion";
import style from "./Item.module.scss";

type IProps = {
  item: { name: string; surname: string };
};

export const Item: FC<IProps> = ({ item }) => {
  return (
    <motion.li
      className={style.item}
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}>
      <p>Name: {item.name}</p>
      <p>Surname: {item.surname}</p>
    </motion.li>
  );
};
