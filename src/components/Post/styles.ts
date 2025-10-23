import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: #FFFFFF;
    margin: 0 auto 30px auto;
    width: 50%;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

export const PostHeaderInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const PostUserImg = styled.img`
    cursor: pointer;
`;

export const InfoContainer = styled.div``;

export const UserName = styled.p`
    font-size: 13pt;
    font-weight: 500;
    cursor: pointer;
`;

export const Date = styled.p`
    color: #828282;
    font-weight: 500;
`;

export const PostHeaderOptions = styled.div`
    display: flex;
    gap: 10px;
`;

export const PostHeaderMenu = styled.img`
    cursor: pointer;
`;

export const PostHeaderClose = styled.img`
    cursor: pointer;
`;

export const PostImg = styled.img`
    width: 100%;
`;

export const PostFooter = styled.div`
    padding: 5px 10px;
`;

export const PostInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
`;

export const PostInforItem = styled.p`
    cursor: pointer;
`;

export const PostInfoGroup = styled.div`
    display: flex;
    gap: 10px;
`;

export const PostActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 12px 0 7px 0px;
    border-top: 1px solid #CFCFCF;
`;

export const PostAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
`;

export const PostActionImg = styled.img``;

export const PostActionText = styled.p`
    color: #828282;
    font-weight: 700;
`;
