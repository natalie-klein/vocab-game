import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import axios from 'axios'

export default function Options () {
    const [languages, setLanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState(null)
  
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('http://localhost:3000/languages')
            setLanguages(data.data.rows)
        }
        fetchData()
        .catch((err) => {
            console.log(err)
        })
    }, [])

    function handleClick (e) {
        const clickedLanguage = e.target.innerText
        setSelectedLanguage(clickedLanguage);
    }

    const boxes = languages.map((lang, i) => {
        return <Box onClick={handleClick} key={i} >{lang.name}</Box>
    })

    return (
        <div>
                <Outer>
                    <Container>
                        {boxes}
                    </Container>
                </Outer>
            </div>   
            )
}

// Styled Components 

const Outer = styled.div `
    display: flex;
    justify-content: space-evenly;
`

const Container = styled.div `
    background-color: rgba(255,255,255,0.4);;
    padding: 1em;
    display: flex;
    flex-direction: row;
    @media (max-width: 700px) {
        flex-direction: column;
    }
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    top: 5em;
    width: 50%;
    border-radius: 0.5em; 
    min-width: fit-content;
`

const Box = styled.div`
    background-color: rgba(255,255,255);
    color: black;
    font-size: 16px;
    padding: 1em;
    margin: 1em;
    min-width: 3.3em;
    border-radius: 0.5em; 
    border: 0.1em solid transparent;
    :hover {
        border: 0.1em solid #3693E5;
}
`
