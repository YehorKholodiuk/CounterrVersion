import React from 'react'

export default function Counter(props){

    const item = props.el;
    const index = props.index;
    const div = () => {
        props.division(index);
    }

    const multiple = () => {
        props.multiple(index);
    }

    const reset = () => {
        props.reset(index);
    }

    return (
        <div>
            <button onClick={div}> / 10 </button>
            &nbsp;  {item}  &nbsp;
            <button onClick={multiple}> * 10 </button>
            &nbsp;&nbsp;<button onClick={reset}> 100 </button>
        </div>
    )
}