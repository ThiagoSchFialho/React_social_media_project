import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';

import {
    Main
} from './styles';

const Home = () => {
    return (
        <>
            <Header/>
            <Main>
                <Post/>
                <Post/>
            </Main>
            <footer>
            </footer>
        </>
    )
}

export default Home;