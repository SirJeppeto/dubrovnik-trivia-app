import { Box, Flex } from '@react-three/flex';
import Answers from './Answers/Answers';
import QuestionText from './QuestionText/QuestionText';

const Question = (props) => {
    const width = window.innerHeight / 16 - 4;

    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center' position={[0, 0, 0]}>
            <Box flexGrow={2}>
                <QuestionText index={props.index} text={props.question.question} width={width} />
            </Box>
            <Box flexGrow={2}>
                <Answers answers={props.question.answers} width={width} clickedAnswer={props.clickedAnswer} alreadyClicked={props.alreadyClicked} />
            </Box>
        </Flex>
    );
}

export default Question;
