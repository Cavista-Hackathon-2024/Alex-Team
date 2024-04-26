'use client'
import styled from "styled-components"

function Foot() {
  return (
    <Footcont>
      <Footwrap>            
        <marquee className='futmuv'>
            <p>invite friends to get an extra 50XP</p>
        </marquee>
      </Footwrap>
    </Footcont>
  )
}

export default Foot

const Footcont = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: center;
align-items: flex-end;
color: #fff;

`
const Footwrap = styled.div`
width: 100%;
height: 35%;
display: flex;
// justify-content: space-between;
align-items: center;
background: #5c4a6d;

.futmuv{
height: 90%;
font-size: 12px;
display: flex;
}
`