import React from 'react'

function Header({ user }) {
    return (
        <nav>
            <h1>Drop in</h1>
            <div>
                <img src={user.photoUrl} alt="" />
                <p>{user.displayName}</p>
            </div>
        </nav>
    )
}

export default Header;