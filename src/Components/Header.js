import React from 'react'

function Header({ user }) {
    return (
        <nav>
            <h1>Drop in</h1>
            <div>
                <img src={user.photoUrl} alt="" />
                {user.displayName ? <p>{user.displayName}</p> : <p>{user.email}</p>}
            </div>
        </nav>
    )
}

export default Header;