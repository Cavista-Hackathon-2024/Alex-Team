'use client'
import styled from "styled-components"
import Head from "./Head"
import Hero from "./Hero"

const Landing=  () => {
    return(
        <Homecont>
            <Head/>
            <Hero/>
        </Homecont>
    )
}

export default Landing;

const Homecont = styled.div`
width: 100%;
height: 100vh;
`