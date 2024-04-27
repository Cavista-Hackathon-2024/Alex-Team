'use client'
import styled from "styled-components"

function Board1() {
  return (
    <B1cont>
        <p className="persona">Let's personalize your experience</p>
    </B1cont>
  )
}

export default Board1

const B1cont = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;

.persona{
    font-size: 70px;
}
`