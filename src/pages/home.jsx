import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Home() {
    return (
        <StyledDiv>
            Home Page
        </StyledDiv>
    )
}