const initialization = '';

const updatedValue = (state = initialization, action)=>{
    // if(action.type == 'value'){
    //     return action.value;
    // }
    return action.value + '';
}

export default updatedValue;