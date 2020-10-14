import styled from 'styled-components'

export const CustomButton = styled.button`

color:white;
padding:10px;
margin:10px;
border:2px solid green;
background-color:green;
border-radius:6px;
cursor:pointer;
@media(max-width:767px)
{
    width:20%;
    padding:5px;
    margin:5px;
}

`

export const ButtonsContainer = styled.div`
display:flex;
padding:15px;
flex-direction:row;
justify-content:center;
align-items:center;
@media(max-width:767px)
{
    flex-direction:column;
}

`