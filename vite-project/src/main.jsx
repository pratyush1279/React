import React from "react";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {   // this is not a correct syntax 
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (  // this is correct syntax (js fundamentals)
    <a href="https://google.com" target = '_blank'>Visit google </a>
)

// building according to react

const anotherUser = "chai aur react"

const reactElement = React.createElement(  // babble will inject
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser
)

createRoot(document.getElementById("root")).render(
    reactElement
)
