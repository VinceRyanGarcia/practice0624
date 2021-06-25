import React from 'react'
import styled from 'styled-components'

export default function Nav() {
    return (
        <Container>
            <Logo>
            Awp
            </Logo>
            <NavBar>
                <a href='no_target'>testing</a>
                <a href='no_target'>testing</a>
                <a href='no_target'>testing</a>
            </NavBar>     
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    border:1px solid black;
    height:auto;
    background:grey;
`   

const Logo = styled.div`
    border:1px solid black;
    background:darkgrey;
    width:auto;
`


const NavBar = styled.div`
    @media screen and (min-width: 0px) and (max-width: 599px){
        display:none;
    }
    @media screen and (min-width: 600px){
    border:1px solid black;
    background:darkgrey;
    a{
        padding-right:1vw;
    }
}
`

