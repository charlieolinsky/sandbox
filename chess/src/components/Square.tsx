import Piece from "./Piece"

interface props {
    piece: string 
    row_key: number
    sqr_key: number
    key: number
}

const Square = (props: props) => {  
    
    const rowIsEven = props.row_key % 2 == 0
    const colIsEven = props.sqr_key % 2 == 0
    const color = rowIsEven !== colIsEven //XOR!

    return (
        <div className={ color ? "aspect-square bg-green-900 m-0 p-0" : "aspect-square bg-white m-0 p-0"}>
            <div><Piece pieceType={props.piece} key={props.sqr_key}/></div>
        </div>
    )

}
export default Square;