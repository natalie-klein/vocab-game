import React from "react";
import styled from 'styled-components'

export default function Background () {
    return (
        <div>
            <Container>hey</Container>
        </div>
    )
}

// Styled Components 

const Container = styled.div `
    padding: 0.25em 1em;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #3494E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EC6EAD, #3494E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
