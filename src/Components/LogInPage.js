import React from 'react'

const LogInPage = () => {
    return (
        <div className="logInForm">
            <h1>Drop In</h1>
            <form>
                <label>Username</label>
                <input type="email" name="" id="" />
                <label>Password</label>
                <input type="password" name="" id="" />
                <button type="submit">Log In</button>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default LogInPage;