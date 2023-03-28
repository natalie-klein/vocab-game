import React from "react";
import styled from 'styled-components'

export default function Header () {
    return (
        <div>
            <Container>
                <Logo>{'VOCAB GAME <3'}</Logo>
            </Container>
        </div>
    )
}

// Styled Components 

const Container = styled.div `
    padding: 0 0 0 0.5em;
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 100%;
    background-color: rgba(255,255,255,0.4);
    display: flex;
    justify-content: flex-start;
`

const Logo = styled.p`
    opacity: 1;
    margin: 0.5em 0 0 0.5em;
    `