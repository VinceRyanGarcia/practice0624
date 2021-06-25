import React from 'react'
import styled from 'styled-components'

export default function Email() {
    return (
        <Container>
            Email
            <Form>
                Form    
            </Form>
        </Container>
    )
}

const Container = styled.div`
    border:1px solid black;
    background:magenta;
    height:auto;

`
const Form = styled.div`
    border:1px solid black;
    background:blue;
    margin:20vw;
`