import { useState } from "react"
import Row from "./Row"

const ChessBoard = () => {

    const [getPieces, setPieces] = useState([
        ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
        ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
        ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
    ])
    const rows = getPieces.map((_, rowIndex) => (
        <Row pieces={getPieces} setPieces={setPieces} row_key={rowIndex} key={rowIndex}/>
    ))

    return (
    <div className="container px-0 mx-0">        
        <div className="grid grid-rows-8 gap-0 border-black border-2">
            {rows}
        </div>
    </div>
    )

}

export default ChessBoard;