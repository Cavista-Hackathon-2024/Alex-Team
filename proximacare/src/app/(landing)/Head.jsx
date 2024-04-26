'use client'
import styled from "styled-components"

function Head() {
  return (
    <Headcont>
      <Headwrap>
        <Hd1>
          <p className="logo">PROXIMACARE</p>
        </Hd1>
        <Hd2>
          <p className="midhd">Home</p>
          <p className="midhd">About</p>
          <p className="midhd">Blog</p>
        </Hd2>
        <Hd3>
          <p className="log_in">Login</p>
          <p className="sign_up">Sign-up</p>
        </Hd3>
      </Headwrap>
    </Headcont>
  )
}

export default Head

const Headcont = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: center;
align-items: center;
`
const Headwrap = styled.div`
width: 100%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Hd1 = styled.div`
width: 10%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #5c4a6d;
margin-left: 60px;

.logo{
  font-size: 20px;
  font-weight: 700;
}
`
const Hd2 = styled.div`
display: flex;
width: 13%;
height: 100%;
justify-content: space-around;
align-items: center;
color: #5c4a6d;

.midhd{

}
`
const Hd3 = styled.div`
display: flex;
width: 15%;
height: 100%;
justify-content: space-around;
align-items: center;
margin-right: 40px;

.log_in{
  color: #5c4a6d;
}
.sign_up{
  width: 50%;
  height: 30px;
  color: #fff;
  background: #5c4a6d;
  text-align: center;
  border-radius: 10px;
}
`