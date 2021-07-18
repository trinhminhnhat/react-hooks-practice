import React from 'react'

const Navbar = (props) => {
    const style = {
        backgroundColor: 'rgba(240, 240, 240, 0.7)',
        color: 'black'
    }

    return (
        <div className="navbar" style={style}>
            <h1>My react hooks app</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar