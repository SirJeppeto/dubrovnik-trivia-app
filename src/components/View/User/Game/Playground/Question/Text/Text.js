import { useState } from 'react';
import { Flex } from '@react-three/flex';
import Word from './Word/Word';

const Text = (props) => {
    const [color, setColor] = useState(props.color);

    const clickedAnswer = () => {
        if(props.alreadyClicked) return;
        
        if(props.correct) {
            setColor('green');
        } else {
            setColor('red');
        }

        props.clicked(() => { setColor(props.color) }, props.correct);
    }

    const mouseOver = () => {
        if(props.alreadyClicked) return;

        setColor(props.highlight);
    }

    const mouseOut = () => {
        if(props.alreadyClicked) return;

        setColor(props.color);
    }

    return (props.question ? 
        <Flex flexDirection='row' justifyContent='flex-start' alignItems='center' flexWrap='wrap' width={props.width}>
            <group>
                {
                    props.text.split(' ').map((word, index) => <Word key={index} word={word} color={color} />)
                }
            </group>
        </Flex>
    :
        <Flex flexDirection='row' justifyContent='flex-start' alignItems='center' flexWrap='wrap' width={props.width}>
            <group onPointerOver={mouseOver} onPointerOut={mouseOut} onClick={clickedAnswer}>
                {
                    props.text.split(' ').map((word, index) => <Word key={index} word={word} color={color} />)
                }
            </group>
        </Flex>
    );
}

export default Text;