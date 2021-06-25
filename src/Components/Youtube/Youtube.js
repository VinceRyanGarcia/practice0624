import React from 'react'
import styled from 'styled-components'

export default function BS() {
    return (
        <Container>
            <h1>AWPERATIONS - HQ</h1>
            <Box>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ji8VMteXoJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Box>
        </Container>
    )
}

const Container = styled.div`
@media screen and (min-width: 0px) and (max-width: 599px){
        display:none;
    }
@media only screen and (min-width: 600px) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    background: teal;
    height:auto;
    margin-left:10%;
    margin-right:10%;
    }
`

const Box = styled.div`
@media screen and (min-width: 0px) and (max-width: 599px){
        display:none;
    }
@media only screen and (min-width: 600px) {
    display:flex;
    align-items:center;
    justify-content:center;
    margin:2vw;
    height:auto;
    padding:3vw;
   }
`