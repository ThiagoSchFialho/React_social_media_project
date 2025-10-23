import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
    font-size: 20pt;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    background-color: #F0F2F5;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
`;

export const SearchImg = styled.img``;

export const Input = styled.input`
    width: 300px;
    font-size: 14pt;
    border: none;
    outline: none;
    background-color: #F0F2F5;
    color: #444444;
`;

export const UserProfileContainer = styled.div`
    cursor: pointer;
`;