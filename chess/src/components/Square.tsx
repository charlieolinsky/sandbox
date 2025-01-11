
export const Square = (props: any) => {   

    const rowIsEven = props.row_key % 2 == 0
    const colIsEven = props.sqr_key % 2 == 0

    const color = rowIsEven !== colIsEven //XOR!

    return <div className={ color ? "aspect-square bg-white m-0 p-0" : "aspect-square bg-green-900 m-0 p-0"}></div>
}
export default Square;