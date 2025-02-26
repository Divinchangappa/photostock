import { useEffect, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("Loading...");
    const BACKEND_URL = "http://3.91.61.249"; // Replace with your Bastion Public IP

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/status`)
            .then((res) => res.text())
            .then((data) => setMessage(data))
            .catch(() => setMessage("Error connecting to backend"));
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Photostock</h1>
            <p>Backend Response: {message}</p>
        </div>
    );
}
