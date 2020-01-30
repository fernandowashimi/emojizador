import React from 'react';
import { LogoContainer } from './styles';
import E from '../../assets/images/e.gif';
import M from '../../assets/images/m.gif';
import O from '../../assets/images/o.gif';
import J from '../../assets/images/j.gif';
import I from '../../assets/images/i.gif';
import Z from '../../assets/images/z.gif';
import A from '../../assets/images/a.gif';
import D from '../../assets/images/d.gif';
import R from '../../assets/images/r.gif';

const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <img src={E} alt="E" width="50px" />
            <img src={M} alt="E" width="50px" />
            <img src={O} alt="E" width="50px" />
            <img src={J} alt="E" width="50px" />
            <img src={I} alt="E" width="50px" />
            <img src={Z} alt="E" width="50px" />
            <img src={A} alt="E" width="50px" />
            <img src={D} alt="E" width="50px" />
            <img src={O} alt="E" width="50px" />
            <img src={R} alt="E" width="50px" />
        </LogoContainer>
    );
};

export default Logo;
