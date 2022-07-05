import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Nevbar from "./Nevbar";
function Home() {
    const naviget = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            naviget('/login');
        }
    })

    return (
        <Nevbar/>
    );
}
export default Home;