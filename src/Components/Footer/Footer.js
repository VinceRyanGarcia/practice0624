import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Container>
            Awp Logo
            <Social>
                <a href="no_target">Facebook</a>
                <a href="no_target">Twitter</a>
                <a href="no_target">Youtube</a>
                <a href="no_target">Instagram</a>
            </Social>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border:1px solid black;
    background:green;
    height:13vh;
`
const Social = styled.div`
    border:1px solid black;
    background:white;
    a{
        margin-left:1vw;
        margin-right:1vw;
    }
`