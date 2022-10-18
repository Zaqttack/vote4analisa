import { useMantineTheme, Container, Grid, Text, Button, Image } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    
    return (
        <footer style={{ backgroundColor: theme.colors.orange[6]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text size="xl" weight={700} color="white" mb="10px">Analisa Rojas</Text>

                        <Text color="white" mb="20px">
                            Running for <i>your</i> 2023 Spirit of the Roadrunner!
                        </Text>

                        <Button variant="white" color="black" onClick={() => redirectToLink('https://rowdylink.utsa.edu/submitter/election/start/559036')}>Vote Now!</Button>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Image 
                            src={require(`../Images/analisa-work.jpg`)}
                            alt='analisa-work.jpg'
                        />
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};