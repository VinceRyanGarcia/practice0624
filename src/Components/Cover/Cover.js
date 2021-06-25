import React from 'react'
import styled from 'styled-components'

export default function Cover() {
    return (
        <Container>
            <Banner>
           here 
            </Banner>
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    height:auto;
    border:1px solid black;
    background: teal;
    height:15vh;
    @media only screen and (min-width: 600px) {
        display:flex;
        flex-direction:row;
        justify-content:center;
        padding-left:1vw;
        padding-right:1vw;   
        margin-left:10%;
        margin-right:10%;
        width:75%auto;
    }
`

const Banner = styled.div`
    border:1px solid black;
    background:yellow;
    margin:2vh;
    width:80%;
`