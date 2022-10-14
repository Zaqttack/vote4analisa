import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';
import GridCard from './GridCard';

const About = () => {
    const theme = useMantineTheme();

    return (
        <section id="section-four">
            <Container>
                <Text color="white" align="center">
                    <Title order={1} mb="30px">About me!</Title>
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
                        - Director of Professional Development in the College of Sciences Dena Student Board
                        - Director of the Association for Computing and Machinery’s sub-organization Rowdy Creators
                        - Serve with the Catholic Student Associations Music Ministry.
                        `}
                        imageTitle='abstract-platform'
                    />
                    <GridCard 
                        title='Favorite Things'
                        content='I have lived in San Antonio my whole life and serve the world as a macron savant. '
                        imageTitle='favorites'
                    />
                </Grid>

            </Container>
        </section>
    );
};

export default About;