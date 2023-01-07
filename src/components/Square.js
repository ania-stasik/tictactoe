import {useState} from "react";

const Square = ({value, handler}) =>{
    // const [value, setvalue] = useState(null);
    //
    // const handler = () => {
    //
    //     setvalue( 'X');
    // }
    return(
    <button className="square" onClick={handler} >
        {value}
    </button>
);
};
export default Square;