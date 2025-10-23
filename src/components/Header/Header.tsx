import {
    HeaderContainer,
    Title,
    SearchContainer,
    SearchImg,
    Input,
    UserProfileContainer
} from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>Rede Social</Title>
            <SearchContainer>
                <SearchImg src="/search.svg" alt="lupa"/>
                <Input type="text" name="search" id="search" placeholder="Pesquisar" />
            </SearchContainer>
            <UserProfileContainer>
                <img src="/user.svg" alt="usuário"/>
            </UserProfileContainer>
        </HeaderContainer>
    )
}

export default Header;