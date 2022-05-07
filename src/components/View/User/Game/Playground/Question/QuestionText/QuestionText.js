import Text from '../Text/Text';

const QuestionText = (props) => {
  return <Text question={true} text={props.index + 1 + '. ' + props.text} index={props.index} width={props.width} color='cyan' />
}

export default QuestionText;
