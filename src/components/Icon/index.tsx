import React from 'react';
import { IconContainer } from './styles';

const Icon: React.FC = ({ children }) => {
    return (
        <IconContainer>
            <a href="https://github.com/fernandowashimi/emojizador">
                { children }
            </a>
        </IconContainer>
    );
};

export default Icon;