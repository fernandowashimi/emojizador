import React from 'react';
import GlobalStyle from './styles';
import TextConverter from '../../components/TextConverter';
import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import GitHubMark from '../../assets/images/GitHub-Mark-32px.png';

const Main: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <TextConverter />
            <Icon><img src={GitHubMark} alt="GitHub" /></Icon>
        </>
    );
};

export default Main;