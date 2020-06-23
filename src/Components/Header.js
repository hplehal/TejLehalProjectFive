import React from 'react'

function Header({ user }) {
    return (
        <nav>
            <h2>Drop in</h2>
            <div className="userName">
                <img src={user.photoUrl} alt="" />
                {user.displayName ? <p>{user.displayName}</p> : <p>{user.email}</p>}
            </div>
        </nav>
    )
}

export default Header;