import {useState} from 'react';

type HistoryType = {
  status: string;
  time: string;
};

const useGame = () => {
  const ITEMS = new Array(9).fill(null);
  const [history, setHistory] = useState<HistoryType[]>([]);
  const POSIBLE_WINNERS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [matchedRow, setMatchedRow] = useState<number[]>();
  const [gameData, setGameData] = useState(ITEMS);
  const selectSlice = (index: number) => {
    const newGameData = [...gameData];
    newGameData[index] = 1;
    setGameData(newGameData);
    const hasWinner = checkWinner(newGameData);
    if (!hasWinner) {
      setTimeout(() => {
        playBot(newGameData);
      }, 1000);
    }
  };
  const playBot = (currentData: number[]) => {
    const emptySliceIndexs = currentData
      .map((item, index) => {
        if (item === null) {
          return index;
        }
      })
      .filter(item => item !== undefined);
    const randomIndex = Math.floor(Math.random() * emptySliceIndexs.length);
    const newGameData = [...currentData];
    console.log('playBot');
    newGameData[emptySliceIndexs[randomIndex]] = 0;
    setGameData(newGameData);
    setTimeout(() => {
      checkWinner(newGameData);
    }, 1000);
  };
  const checkWinner = (newGameData: number[]) => {
    for (const [a, b, c] of POSIBLE_WINNERS) {
      if (
        newGameData[a] !== null &&
        newGameData[a] === newGameData[b] &&
        newGameData[a] === newGameData[c]
      ) {
        const status = newGameData[a] === 1 ? 'win' : 'lost';
        setHistory([
          ...history,
          {
            status,
            time: new Date().toLocaleTimeString(),
          },
        ]);
        setMatchedRow([a, b, c]);
        setTimeout(() => {
          setGameData(ITEMS);
          setMatchedRow(undefined);
        }, 2000);
        return true;
      }
    }
    const isDraw = newGameData.every(item => item !== null);
    if (isDraw) {
      setHistory([
        ...history,
        {
          status: 'draw',
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setTimeout(() => {
        setGameData(ITEMS);
        setMatchedRow(undefined);
      }, 2000);
      return true;
    }

    return false;
  };

  return {
    ITEMS: gameData,
    selectSlice,
    history,
    matchedRow,
  };
};
export default useGame;
