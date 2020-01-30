/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useRef, useState } from 'react';
import { TextConverterContainer, Input, Button, Emoji } from './styles';

const TextConverter: React.FC = () => {
    const outputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string>("");
    const [outputValue, setOutputValue] = useState<string>("");
    const [isDisplayingCopyMessage, setIsDisplayingCopyMessage] = useState<boolean>(false);

    useEffect(() => {
        handleTextParse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setInputValue(value);
    };

    const handleTextParse = (): void => {
        const output = [...inputValue].map((char: string) => {
            return char.match(/[a-z]/i) ?`:_${char}_:` : checkSpecialCases(char);
        });
        
        setOutputValue(output.join(" ").trim());
    };  

    const handleCopyText = (): void => {
        if (outputRef && outputRef.current && inputValue.trim()) {
            outputRef.current.select();
            document.execCommand('copy');
            
            setIsDisplayingCopyMessage(true);
            setTimeout(() => setIsDisplayingCopyMessage(false), 2000);
        }
    }

    const checkSpecialCases = (char: string): string => {
        switch (char) {
            case '1':
                return ':one:';
            case '2':
                return ':two:';
            case '3':
                return ':three:';
            case '4':
                return ':four:';
            case '5':
                return ':five:';
            case '6':
                return ':six:';
            case '7':
                return ':seven:';
            case '8':
                return ':eight:';
            case '9':
                return ':nine:';
            case '0':
                return ':zero:';
            case '!':
                return ':exclamation:';
            case '?':
                return ':question:';
            default:
                return char;
        }
    };

    return (
        <TextConverterContainer>
            <Input value={inputValue} onChange={handleInputChange} placeholder="your boring text" />
            <Emoji role="img" aria-label="Pointing down" size="2rem">👇</Emoji>
            <Input value={outputValue} ref={outputRef} placeholder="wooow awesome" readOnly />
            <Button onClick={handleCopyText} disabled={isDisplayingCopyMessage}>
                { isDisplayingCopyMessage ? (
                    <>
                        <Emoji role="img" aria-label="OK Hand" size="1.5rem">👌</Emoji> Copiado!
                    </>
                ) : (
                    <>
                    <Emoji role="img" aria-label="Clipboard" size="1.5rem">📋</Emoji> Copiar
                    </>
                ) }
            </Button>
        </TextConverterContainer>
    );
};

export default TextConverter;