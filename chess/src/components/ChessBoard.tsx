import Row from "./Row"

const ChessBoard = () => {
    const rows = []
    for(let i = 0; i<8; i++) {
        rows.push(<Row row_key={i} key={i}/>)
    }

    return (
    <div className="container px-0 mx-0">        
        <div className="grid grid-rows-8 gap-0 border-black border-2">
            {rows}
        </div>
    </div>
    )

}

export default ChessBoard;