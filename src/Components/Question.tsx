import { Accordion } from '@mantine/core';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";

interface QuestionProps {
    question: string,
    questionAnswer: string,
    iconChoice?: string,
}

const Question = ({question, questionAnswer, iconChoice}: QuestionProps) => {
    //const theme = useMantineTheme();
    const quesitonValue = `${question.slice(-4)}-${questionAnswer.slice(-4)}`;

    const chooseIcon = () => {
        switch(iconChoice) {
            case 'coffee':
                return <FiCoffee size={20} color={"#f76707"} />;
            case 'cloud':
                return <FiCloudSnow size={20} color={"#f76707"} />;
            case 'anchor':
                return <FiAnchor size={20} color={"#f76707"} />;
            default:
                return <FiCoffee size={20} color={'#f76707'} />;
        }
    } 

    return (
        <Accordion.Item value={quesitonValue} className='FAQ-question'>
            <Accordion.Control icon={chooseIcon()} className='FAQ-text'>
                {question}
            </Accordion.Control>
            <Accordion.Panel>{questionAnswer}</Accordion.Panel>
        </Accordion.Item>
    );

};

export default Question;
