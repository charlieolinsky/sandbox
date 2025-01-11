import Square from "./Square";

export const Row = (props: any) => {
    const squares = []
    for (let i = 0; i<8; i++) {
        squares.push(<Square row_key={props.row_key} sqr_key={i} key={i}/>)
    }
    return <div className="grid grid-cols-8">{squares}</div>
}
export default Row;