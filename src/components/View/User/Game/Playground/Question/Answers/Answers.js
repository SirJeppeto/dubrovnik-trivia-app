import { Box, Flex } from '@react-three/flex';
import Text from '../Text/Text';

const LETTERS = ['A', 'B', 'C', 'D'];

const Answers = (props) => {
    return (
        <Flex flexDirection='column' width={props.width}>
            {
                props.answers.map((element, num) =>
                    <Box key={num} marginTop={2} marginLeft={2} marginRight={2}>
                        <Text question={false} correct={element.correct} text={LETTERS[num] + '. ' + element.text} width={props.width - 3} color='cyan' highlight='yellow' alreadyClicked={props.alreadyClicked} clicked={props.clickedAnswer} />
                    </Box>
                )
            }
        </Flex>
    );
}

export default Answers;
