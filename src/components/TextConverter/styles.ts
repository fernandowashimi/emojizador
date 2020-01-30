import styled from 'styled-components';

const TextConverterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    width: 500px;
    height: 300px;
    background-color: #f8bbd0;
    border-radius: 5px;
    box-shadow: 0px 5px 10px -5px #33333330;
`;

const Input = styled.input`
    width: 100%;
    height: 3rem;
    border: 1px solid #999;
    border-radius: 5px;
    outline: 0;
    padding-left: 10px;
    font-size: 2.2rem;
    font-family: inherit;
    text-align: center;
`;

const Button = styled.button`
    height: 3rem;
    width: 100%;
    max-width: 150px;
    font-size: 1.5rem;
    font-family: inherit;
    color: #fce4ec;
    border-radius: 5px;
    border: 0;
    background-color: #f06292;
    outline: 0;

    &:hover {
        cursor: pointer;
        background-color: #e91e63;
    }
`;

const Emoji = styled.span.attrs((props: { "aria-label": string, role: string }) => ({
    "aria-label": props["aria-label"],
    role: props.role, 
}))<{ size: string }>`
    font-size: ${props => props.size};
`;

export { TextConverterContainer, Input, Button, Emoji };