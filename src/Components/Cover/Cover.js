import React from 'react'
import styled from 'styled-components'

export default function Cover() {
    return (
        <Container>
            AWP
            <Banner>
           
            </Banner>
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    background:red;
    height:auto;
`

const Banner = styled.div`
    border:1px solid black;
    background:yellow;
    margin:5vw;
`