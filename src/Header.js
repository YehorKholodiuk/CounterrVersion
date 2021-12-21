import React from 'react'

export default function Header (props) {

    const header = props.header;
    const mameMenu = props.mainMenu;

    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {mameMenu.map(el => <li key={el.title}>{el.title}</li>)}
            </ol>
            <hr />
        </div>

    )
}