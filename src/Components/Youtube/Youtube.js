import React from 'react'
import styled from 'styled-components'

export default function BS() {
    return (
        <Container>
            
            <Box>
                <h1>Awperation - HQ</h1>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    background:gold;
    height:auto;
`

const Box = styled.div`
    border:1px solid black;
    color:red;
    margin:1vw;
    /* @media only screen and (min-width: 600px) {
    } */
`