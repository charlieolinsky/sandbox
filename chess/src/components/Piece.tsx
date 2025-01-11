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

interface props {
    pieceType: string 
    key: number
}
const Piece = (props: props) => {
    
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

    return(
        <div>
            <img src={pieceImg} className="w-full h-full"></img>
        </div>
    )
    
}
export default Piece;