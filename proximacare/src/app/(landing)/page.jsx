'use client'
import styled from "styled-components"
import Head from "./Head"
import Hero from "./Hero"
import Foot from "./Foot"

const Landing=  () => {
    return(
        <Homecont>
            <Head/>
            <Hero/>
            <Foot/>
        </Homecont>
    )
}

export default Landing;

const Homecont = styled.div`
width: 100%;
height: 100vh;
`