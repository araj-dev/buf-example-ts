import './App.css'
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState(false)
    useEffect(() => {
        fetch("http://localhost:8080/v1.UserService/GetUser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"hi": "hi"})
        }).then(res => res.json().then(data => setUser(data)))
    })

    return <>
        id: {user.id} <br/>
        username: {user.username}
    </>;
}

export default App
