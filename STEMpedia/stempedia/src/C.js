import { useSelector } from "react-redux";


export default function C(){
    const myValue = useSelector((state)=> state.updatedValue);
    return (<>
        <p>Output - {myValue}</p>
    </>)
}