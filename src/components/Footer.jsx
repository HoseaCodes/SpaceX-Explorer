import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-brand-color);
    box-shadow: 1px 1px 10px 1px var(--light-shadow);

    p {
        color: var(--secondary-brand-color);

    }
`;
export default function Footer(props) {
    return (
        <StyledFooter>
            <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved SpaceX Explorer</p>
        </StyledFooter>
    );
};