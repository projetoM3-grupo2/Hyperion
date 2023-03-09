import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
min-width: 100%;
max-width: 1200px;
background-color: var(--grey-5);
align-items: center;
padding: 10px;
justify-content: space-between;

.gamestore{
    color: var(--primary-color);
}

> div{
    display: flex;
    gap: 5px;
    font-weight: 700;
    color: white;
}
nav{
    display: flex;
    gap: 4px;
    color: white;
}
.cartIcon{
    color: white;
}
`