import React from 'react';
import GlobalStyle from './styles';
import TextConverter from '../../components/TextConverter';
import Logo from '../../components/Logo';

const Main: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Logo />
            <TextConverter />
        </>
    );
};

export default Main;