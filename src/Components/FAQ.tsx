import { Accordion, Text, Container, Title, Badge } from '@mantine/core';
import Question from './Question';

const FAQ = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-five">
            <Container>
                <div style={{ marginBottom: 30 }}>
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="orange">FAQs</Badge></div>
                    <Text color="white">
                        <Title order={1} style={{ marginTop: 10 }}>Frequently Asked Questions</Title>
                    </Text>
                </div>

                <Accordion variant="contained">
                    <Question 
                        question='What is the Spirit of the Roadrunner?'
                        questionAnswer='The Spirit of the Roadrunner serves as an ambassador for UTSA as an embodiment of academic achievement, campus involvement, and community service.'
                    />
                    <Question 
                        question='How do I vote?'
                        questionAnswer='Voting starts October 18th and ends on October 20th. UTSA Students can sign into RowdyLink and cast their vote there!'
                        iconChoice='cloud'
                    />
                    <Question 
                        question='How would you plan to put your platform into motion?'
                        questionAnswer={`I would love to use the rest of the Fall semester (& the winter break) to begin reaching out to local bosses who would be willing to share their story and career insight with students in the Spring semester. If students have any individuals in mind, or companies they would like to hear from, I want to start a running list of potentials bosses we can start inviting. I would like to coordinate with the Career Center, and other campus resources to ensure students have a wide range of professions and bosses with whom they can share a quick meal.`}
                        iconChoice='anchor'
                    />
                    <Question 
                        question='What motived you to run for the spirit of the roadrunner?'
                        questionAnswer='Fun fact: I really wanted to be Rowdy the Roadrunner Mascot, but I missed the audition :(. When I heard the applications for Spirit of the Roadrunner opened I thought this would be another great way to spread UTSA Pride and make an impact. Through my platform "Breakfast with the Boss," I believe that opening that line of communication with individuals, who have walked the bumpy path to success, would be a great way to uphold our Roadrunner creed and introduce students to explore paths they might not have considered.'
                        iconChoice='cloud'
                    />
                    <Question 
                        question='Are you a San Antonio native?'
                        questionAnswer={`I was born and raised in San Antonio! Sometimes it still feels like I'm being raised, but that's what happens when you have three older siblings!`}
                    />
                    <Question 
                        question='What’s your favorite hobby?'
                        questionAnswer={`I love stress baking because it's my proactive way of dealing with stress and procrastination. Plus, I get to share extravagant treats of deliciousness with my friends :)`}
                        iconChoice='anchor'
                    />
                </Accordion>
            </Container>
        </section>
    );
};

export default FAQ;
