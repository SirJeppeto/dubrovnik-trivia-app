import { extend } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import myFont from './Press Start 2P_Regular.json';
import { Box, useReflow } from '@react-three/flex';
import { useEffect } from 'react';

const Word = (props) => {
    const reflow = useReflow();

    useEffect(() => {reflow()});

    const font = new FontLoader().parse(myFont);
    const properties = {
        font,
        size: 1,
        height: 0.4,
        curveSegments: 24,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 10
    };

    extend({ TextGeometry });

    return (
        <Box key={props.index} marginRight={1} height={2}>
            <mesh>
                <textGeometry args={[props.word, properties]}/>
                <meshLambertMaterial attach='material' color={props.color}/>
            </mesh>
        </Box> 
    );
}

export default Word;