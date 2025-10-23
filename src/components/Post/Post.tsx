import {
    PostContainer,
    PostHeader,
    PostHeaderInfo,
    PostUserImg,
    InfoContainer,
    UserName,
    Date,
    PostHeaderOptions,
    PostHeaderMenu,
    PostHeaderClose,
    PostImg,
    PostFooter,
    PostInfoContainer,
    PostInforItem,
    PostInfoGroup,
    PostActions,
    PostAction,
    PostActionImg,
    PostActionText
} from './styles';

const Post = () => {
    return (
        <PostContainer>
            <PostHeader>
                <PostHeaderInfo>
                    <PostUserImg src="/user.svg" alt="foto de perfil do usuário"/>
                    <InfoContainer>
                        <UserName>Nome do usuário</UserName>
                        <Date>01 de setembro - 06:28</Date>
                    </InfoContainer>
                </PostHeaderInfo>
                <PostHeaderOptions>
                    <PostHeaderMenu src="/more.svg" alt="menu"/>
                    <PostHeaderClose src="/close.svg" alt="ocultar post"/>
                </PostHeaderOptions>
            </PostHeader>

            <PostImg src="/post_img.jpg" alt="imagem do post"/>

            <PostFooter>
                <PostInfoContainer>
                    <PostInforItem>20 Curtidas</PostInforItem>
                    <PostInfoGroup>
                        <PostInforItem>5 Comentários</PostInforItem>
                        <PostInforItem>6 Compartilhamentos</PostInforItem>
                    </PostInfoGroup>
                </PostInfoContainer>

                <PostActions>
                    <PostAction>
                        <PostActionImg src="/like.svg" alt="curtir" />
                        <PostActionText>Curtir</PostActionText>
                    </PostAction>
                    <PostAction>
                        <PostActionImg src="/comment.svg" alt="comentar" />
                        <PostActionText>Comentar</PostActionText>
                    </PostAction>
                    <PostAction>
                        <PostActionImg src="/share.svg" alt="compartilhar" />
                        <PostActionText>Compartilhar</PostActionText>
                    </PostAction>
                </PostActions>
            </PostFooter>
        </PostContainer>
    )
}

export default Post;