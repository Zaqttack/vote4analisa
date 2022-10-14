import { Grid, Text, Container, Title, Image, Button, MediaQuery } from '@mantine/core';

interface ContentProps {
    title: string,
    text: string,
    buttonUse?: boolean,
    buttonText?: string,
    buttonLink?: string,
    imageTitle?: string,
}

const ContentRight = ({title, text, buttonUse=false, buttonText, buttonLink='', imageTitle='team-spirit'}: ContentProps) => {
    //const theme = useMantineTheme();
    const addButton = buttonUse ? <Button color="orange" onClick={() => redirectToLink(buttonLink)}>{buttonText}</Button> : null

    return (
        <section id="section-three">
            <Container>
                <Grid justify="space-around">
                    <MediaQuery query="(max-width: 576px)" styles={{ display: 'none' }}>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <Image 
                                src={require(`../Images/${imageTitle}.svg`)} 
                                alt={imageTitle} 
                                style={{ width: '100%' }} 
                            />
                        </Grid.Col>
                    </MediaQuery>
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="white">
                                <Title order={1}>{title}</Title>
                                {text}    
                            </Text>
                        </div>
                        {addButton}
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    );

};

export default ContentRight;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
