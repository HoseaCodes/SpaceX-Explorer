import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    padding-left: 15px;
    padding-right: 15px;
    background-color: var(--primary-brand-color);
    box-shadow: 1px 1px 10px 1px var(--light-shadow);
    h1 {
        font-family: var(--logo-font);
        color: var(--secondary-brand-color);
    }
`;
export default function Header(props) {
    return (
        <StyledHeader>
            <h1>SpaceX Explorer</h1>
        </StyledHeader>
    );
};