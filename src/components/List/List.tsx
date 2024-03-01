import { type FC, useState, useEffect } from "react";
import { generateObjects } from "../../data/generate";
import { Arr } from "./types";

import { Item } from "../Item/Item";

import style from "./List.module.scss";

export const List: FC = () => {
  const [array, setArray] = useState<Arr>();
  const [elemOnPage, setElemOnPage] = useState(20);

  const arrayOfObjects = generateObjects();

  useEffect(() => {
    setArray(arrayOfObjects);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [elemOnPage]);

  const handleScroll = (event: any) => {
    const visibleHeight = window.innerHeight;
    const scrollTop = event.target?.documentElement.scrollTop;
    const scrollBlock = event.target?.documentElement.scrollHeight;

    if (scrollBlock - (scrollTop + visibleHeight) < 15 && elemOnPage >= 40) {
      setElemOnPage((prev: number) => prev + 20);
    }
  };

  const handleShow = () => {
    setElemOnPage((prev: number) => prev + 20);
  };

  function checkDisabled() {
    if (elemOnPage >= 40) return true;
  }

  return (
    <div className={style.list}>
      {array?.slice(0, elemOnPage).map((item, index) => (
        <Item key={index} item={item} />
      ))}
      <button
        disabled={checkDisabled()}
        onClick={handleShow}
        className={style.button}>
        Показать ещё
      </button>
    </div>
  );
};
