'use client'
import styled from "styled-components"
import numbar from '../../../../public/numbar.svg'
import pep from '../../../../public/pepxpirens.svg'
import Image from "next/image"

function Board2() {
  return (
    <B2cont>
        <B2wrap>
            <p className="persona">Let's personalize your experience</p>
            <div className="b2gen"><div className="nameplc">
            <p className="yname">What is your name?</p>
            <input type='name' placeholder="" className="nametex"/>
            <Image src={numbar} alt='fading_line' className="numba"/>
            <p className="comp"><strong>1</strong>/4 completed</p></div>
            <Image src={pep} alt='people' className="pep"/>
            </div>
        </B2wrap>
    </B2cont>
  )
}

export default Board2

const B2cont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;

`
const B2wrap = styled.div`
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: center;


.b2gen{
    width: 80%;
    height: 80%;
    display: flex;
    margin-left: -10rem;
}
.persona{
    font-size: 16px;
    color: #767478;
    width: 100%;
    height: 20%;
    margin-left: -5rem;
}
.nametex{
    border-bottom: 2px solid #847c8a;
    width: 170%;
    background: none;
    margin-top: 30px;
}
.numba{
    width: 70%;
    height: 50%;
    margin-top: -50px;
    margin-left: 20rem
}
.yname{
    font-size: 20px;
    color: #5c4a6d;
}
.pep{
    margin-left: 20rem
}
.comp{
    color: grey;
    font-size: 13px;
    // margin-left: 0rem;
    position: absolute;
    left: 35.5rem;
    top: 15rem;
}
`