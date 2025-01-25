import bp_img from "../assets/img/pieces/bp.png"
import bn_img from "../assets/img/pieces/bn.png"
import bb_img from "../assets/img/pieces/bb.png"
import bq_img from "../assets/img/pieces/bq.png"
import bk_img from "../assets/img/pieces/bk.png"
import br_img from "../assets/img/pieces/br.png"

import wp_img from "../assets/img/pieces/wp.png"
import wn_img from "../assets/img/pieces/wn.png"
import wb_img from "../assets/img/pieces/wb.png"
import wq_img from "../assets/img/pieces/wq.png"
import wk_img from "../assets/img/pieces/wk.png"
import wr_img from "../assets/img/pieces/wr.png"

import blank from "../assets/img/pieces/blank.png"
import { SetStateAction, useEffect, useRef, useState } from "react";
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

interface props {
    pieces: Array<Array<string>>; 
    setPieces: (value: SetStateAction<string[][]>) => void
    pieceType: string 
    row_key: number
    sqr_key: number
    key: number
}
const Piece = (props: props) => {
    const ref = useRef(null)
    const [dragging, setDragging] = useState<boolean>(false)

    useEffect(() => {
        if(dragging){
            console.log("Piece is being dragged: ", dragging)
        }
        const el = ref.current
        if(el){
            return draggable({
                element: el,
                onDragStart: () => setDragging(true),
                onDrop: () => setDragging(false),
            })
        }


    }, [])
    
    let pieceImg = ""
    switch(props.pieceType){
        case "wp":
            pieceImg = wp_img
            break;
        case "wr":
            pieceImg = wr_img
            break;
        case "wn":
            pieceImg = wn_img
            break;
        case "wb":
            pieceImg = wb_img
            break;
        case "wk":
            pieceImg = wk_img
            break;
        case "wq":
            pieceImg = wq_img
            break;
        case "bp":
            pieceImg = bp_img
            break;
        case "br":
            pieceImg = br_img
            break;
        case "bn":
            pieceImg = bn_img
            break;
        case "bb":
            pieceImg = bb_img
            break;
        case "bk":
            pieceImg = bk_img
            break;
        case "bq":
            pieceImg = bq_img
            break;
        default:
            pieceImg = blank
            break;
    }

    const movePiece = () => {
        console.log("Move ", props.pieceType)

        const board = props.pieces
        const row = props.row_key
        const col = props.sqr_key

        switch(props.pieceType){
            case "wp":
                let tmp = board[row-1][col]
                board[row-1][col] = board[row][col]
                board[row][col] = tmp
                break;
            case "wr":
                break;
            case "wn":
                break;
            case "wb":
                break;
            case "wk":
                break;
            case "wq":
                break;
            case "bp":
                break;
            case "br":
                break;
            case "bn":
                break;
            case "bb":
                break;
            case "bk":
                break;
            case "bq":
                break;
            default:
                break;
    }
    props.setPieces(board)
    console.log(board)
        
    }

    return(
        <div>
            <img onClick={movePiece} src={pieceImg} className="w-full h-full"></img>
        </div>
    )
    
}
export default Piece;