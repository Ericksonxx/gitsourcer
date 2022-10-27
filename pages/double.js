import { useState, useEffect } from 'react'
import Left from './index'



function Double () {

    const [user, setUser] = useState()

    console.log(user)
    return(
        <div className="grid grid-cols-6">
            <p>{user}</p>
            <div className="col-span-2"><Left user={user} /></div>
            <div className="col-span-4"></div>
        </div>
    )

}

export default Double