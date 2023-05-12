import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { textValue } from './redux/action';

export default function B(){
    const dispatch = useDispatch();
    const [state, setState] = useState(undefined);

    useEffect(()=>{
        dispatch(textValue(state));
    }, [state]);

    return (<>
        <input type="text" onChange={(e)=> setState(e.target.value)} />    
    </>)
}