import React from 'react'
import styled from 'styled-components'

export default function Shows() {
    return (
        <Container>
            <Box>
                <h1>Shows</h1>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    background: teal;
    height:15vh;
`

const Box = styled.div`
    border:1px solid black;
    margin:2vw;
`