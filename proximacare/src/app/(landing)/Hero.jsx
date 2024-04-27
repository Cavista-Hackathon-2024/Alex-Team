'use client'
import styled from "styled-components"
import man from '../../../public/man.svg'
import wheel from '../../../public/wheel.svg'
import Image from "next/image"

function Hero() {
  return (
    <Herocont>
      <Herowrap>            
        <Image src={man} alt='man pic' className="manage"/>
        <div className="hr1">
        <div className="hrtext">
        <p className="fite">Join the Fight Against <br/>Cancer:</p>
        <p className="fite2">ProximaCare - <em>Your Partner in <br/>Prevention and Early Detection</em></p></div>
        <p className="hapyou">Your personalized path to prevention and wellness. Discover<br/>
        engaging quests, expert guidance, and a supportive community—<br/>
        all aimed at empowering you to take control of your health<br/> 
        journey. Join us in the fight against cancer and embark on a quest<br/> 
        towards a healthier, happier you</p>
        <p className="but">Start a Quest</p></div>
        <Image src={wheel} alt='man pic' className="whil"/>
      </Herowrap>
    </Herocont>
  )
}

export default Hero

const Herocont = styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;

// @media screen and (max-width: 1280px){}

`
const Herowrap = styled.div`
width: 92%;
height: 100%;
display: flex;
margin-top: 55px;

.manage{
  height: 470px;
  margin-top: 22px;
}

.fite{
  font-family: Source Sans 3;
  font-size: 32px;
  font-weight: 550;
  line-height: 2.5rem;
  color: #fff;
}
.fite2{
  font-size: 23px;
  font-weight: light;
  line-height: 2rem;
  color: #fff;
  font-weight: 120;
  margin-left: -10px;
}
.hr1{
    width: 38%;
    height: 100%;
    margin-left: -70px;
}
.hrtext{
    width: 85%;
    height: 35%;
    background: #5c4a6d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid grey;
    gap: 10px;
    border-radius: 4px;

}

.hapyou{
  color: #6c6868;
  font-size: 12px;
  margin-top: 30px;
  margin-left: 20px;
  font-weight: 600;
}

.but{
  margin-left: 20px;
  margin-top: 30px;
  width: 30%;
  background: #5c4a6d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #fff;
  padding: 8px;
}
.whil{
  width: 45%;
}
`