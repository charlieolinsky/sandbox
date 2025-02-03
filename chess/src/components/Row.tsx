import { SetStateAction } from "react";
import Square from "./Square";

interface props {
  pieces: Array<Array<string>>;
  setPieces: (value: SetStateAction<string[][]>) => void;
  row_key: number;
  key: number;
}

const Row = (props: props) => {
  const squares = [];

  for (let sqr = 0; sqr < 8; sqr++) {
    let piece = props.pieces[props.row_key][sqr];
    squares.push(
      <Square
        piece={piece}
        pieces={props.pieces}
        setPieces={props.setPieces}
        row_key={props.row_key}
        sqr_key={sqr}
        key={sqr}
      />
    );
  }
  return <div className="grid grid-cols-8">{squares}</div>;
};
export default Row;
