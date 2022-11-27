import React from 'react'

function Logout({handleLogout}) {
    return (
        <button type="submit" value="Logout" onClick={handleLogout}>Logout</button>
    )
}

export default Logout