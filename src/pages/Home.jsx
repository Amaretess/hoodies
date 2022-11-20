import { useState, useEffect } from 'react'
import NavBar from "../components/NavBar";
import Image from "../components/Image";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { getBasics } from '../data/getHoodies';

const Home = () => {
    const [mainBasics, setMainBasics] = useState()

    useEffect(() => {
        getBasics(setMainBasics)
    }, [])

    return (
        <>
        <NavBar />
        <Image />
        <Banner />
        <Card mainBasics={mainBasics}/>
        </>
    );
}

export default Home;





