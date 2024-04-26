'use client'
import styled from "styled-components"

function Hero() {
  return (
    <Herocont>
      <Herowrap>
        <div className="hr1">
        <p>Join the Fight Against <br/>Cancer:</p>
        <p>ProximaCare - Your Partner in Prevention and Early Detection</p></div>
      </Herowrap>
    </Herocont>
  )
}

export default Hero

const Herocont = styled.div`
width: 100%;
height: 70%;
display: flex;
justify-content: center;
`
const Herowrap = styled.div`
width: 92%;
height: 100%;
background: green;

.hr1{
width: 92%;
}
`