import React, { useEffect, useState } from "react";
import * as S from "./styles";

const DroppingWords = ({ containerHeight, containerWidth }) => {
  const APPNAME = ["W", "O", "R", "D", "Z"];
  const createRandom = num => Math.floor(Math.random() * num);
  const [wordsToDrop, setwordsToDrop] = useState([]);

  const createRandomPositions = () => {
    const newWordsToDrop = [];
    const colors = ["lightBlue", "green", "red", "info"];
    for (let i = 0; i < 40; i++) {
      const topStartPosition = Math.floor(Math.random() * 5 + 10);
      const randomLetter = createRandom(APPNAME.length);
      const color = colors[createRandom(colors.length)];
      const leftPosition = Math.floor(Math.random() * 90 + 5);
      const rotateNumber = createRandom(2000);
      const rotate = rotateNumber % 2 === 0 ? rotateNumber : `-${rotateNumber}`;
      newWordsToDrop.push({
        id: i,
        word: APPNAME[randomLetter],
        topStartPosition,
        delay: i / 4,
        leftPosition,
        rotate,
        color
      });
    }
    return setwordsToDrop(newWordsToDrop);
  };

  useEffect(() => {
    createRandomPositions();
  }, []);

  const DroppingWords = wordsToDrop.map(word => (
    <S.DroppingWordsStyle
      color={word.color}
      containerHeight={containerHeight}
      delay={word.delay}
      rotate={word.rotate}
      leftPosition={word.leftPosition}
      topStartPosition={word.topStartPosition}
      key={word.id}
    >
      {word.word}
    </S.DroppingWordsStyle>
  ));

  return (
    <S.Container
      containerWidth={containerWidth}
      containerHeight={containerHeight}
    >
      {DroppingWords}
    </S.Container>
  );
};

export default DroppingWords;
