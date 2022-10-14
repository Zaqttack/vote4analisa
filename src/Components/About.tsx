import { Container, Text, Title, Grid } from '@mantine/core';
import GridCard from './GridCard';

const About = () => {

    return (
        <section id="section-four">
            <Container>
                <Text color="white" align="center">
                    <Title order={1} mb="30px">About Me!</Title>
                </Text>

                <Grid>
                    <GridCard 
                        title='Education'
                        content='A Computer Science student minoring in Digital Forensics.'
                        imageTitle='bio'
                    />
                    <GridCard 
                        title='Experience'
                        content={`
                        - Lead as a Science Mentor through the College of Sciences
                        - Director of Professional Development in the College of Sciences Dean's Student Board
                        - Director of the Association for Computing and Machinery's sub-organization Rowdy Creators
                        - Serve with the Catholic Student Associations Music Ministry.
                        `}
                        imageTitle='abstract-platform'
                    />
                    <GridCard 
                        title='Favorite Things'
                        content={`
                        - Cloudy with a chance of meatball is the BEST cartoon EVER. Fight me....Respectfully.... You got Flint, a mission, and, meatballs, what more could you want?
                        - Weiner dogs in hot dog costumes... 🐕
                        - Learning fun facts about people
                        - That sound the band makes when they're warming up for a concert... It is a beautiful chaos.
                        `}
                        imageTitle='favorites'
                    />
                </Grid>

            </Container>
        </section>
    );
};

export default About;