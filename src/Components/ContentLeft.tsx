import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

interface ContentProps {
    title: string,
    text: string,
    buttonUse?: boolean,
    buttonText?: string,
    buttonLink?: string,
    imageTitle?: string,
}

const ContentLeft = ({title, text, buttonUse=false, buttonText, imageTitle='team-spirit'}: ContentProps) => {
    //const theme = useMantineTheme();
    const addButton = buttonUse ? <Button color="orange">{buttonText}</Button> : null

    return (
        <section id="section-two">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="white">
                                <Title order={1}>{title}</Title>
                                {text}
                            </Text>
                        </div>
                        {addButton}
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image 
                            src={require(`../Images/${imageTitle}.svg`)}
                            alt={imageTitle}
                            style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default ContentLeft;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
