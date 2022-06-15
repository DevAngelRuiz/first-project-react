import styled from 'styled-components';
import Background from '../../assets/background1.svg'
import { Link } from 'react-router-dom';

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
padding-top: 20px;

`;

export const Image = styled.img`
margin-top: 30px;
`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 50px;
display: flex;
flex-direction: column;
height: 100vh;




`;

export const H1 = styled.h1`
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFFFF;
margin-bottom: 80px;
`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #EEEEEE;
margin-left: 25px;
`;
export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
border: none; 
outline: none;
padding-left: 25px;
margin-bottom: 34px;

`;
export const Button = styled(Link)`
width: 342px;
height: 74px;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
border: none;
margin-top: 40px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 15px;

&:hover{
    opacity: 0.8;

}
&:active{
    opacity: 0.5;
}
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
border: none; 
outline: none;
margin-top: 20px;


p{

font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 28px;
color: #FFFFFF;

}
button {
    border: none; 
    background: none;
    cursor: pointer;
    
}
`;

export const ContainerButton = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
width: 340px;
height: 74px;
gap: 20px;




`






