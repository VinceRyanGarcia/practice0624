import React from 'react'
import styled from 'styled-components'

export default function BS() {
    return (
        <Container>
            
            <Box>
                <h1>Embrace my passion</h1>
                <p>
                    Taking music to the fullest potential, to invoke emotions in those who never knew they had them.
                </p>
            </Box>

            <Box>
                <h1>Live Life in Beat</h1>  
                <p>
                    I followed my dreams in playing across nightclubs in Los Angeles. Next, I'm headed for festivals around the world.
                </p>
            </Box>

            <Box>
                <h1>Inspired by Everything</h1>
                <p>
                    I find inspiration all around me. I try to make my music representative of myself and my generation. I love the places that most people don't give a second glance.
                </p>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    background:purple;
    height:auto;
    @media only screen and (min-width: 600px) {
        display:flex;
        flex-direction:row;
        padding-left:1vw;
        padding-right:1vw;   
    }
`

const Box = styled.div`
    border:1px solid black;
    color:red;
    margin:1vw;
    @media only screen and (min-width: 600px) {
        margin:2vw;
        width:33%;
    }
`