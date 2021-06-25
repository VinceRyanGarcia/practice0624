import React from 'react'
import styled from 'styled-components'

export default function Shows() {
    return (
        <Container>
            
                <Show>
                    <p>
                        Wed, JUL 7<br/>
                        AVALON<br/>
                        Los Angeles, CA
                        
                    </p>
                </Show>
                <Tickets>
                    <p>
                        BUY TICKET<br/>
                        RSVP<br/>
                    </p>
                </Tickets>
           
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    display:flex;
    justify-content:space-evenly;
    background:red;
    height:10vh;
    @media only screen and (min-width: 600px) {
        margin-left:10%;
        margin-right:10%;
    }
`
const Show = styled.div`
    border:1px solid black;
    width:45%;
    background:teal;
    font-weight:bold;
`

const Tickets = styled.div`
    border:1px solid black;
    width:45%;
    background:teal;
    font-weight:bold;

`
const UpcomingShows = styled.div`
    border:1px solid black;
`