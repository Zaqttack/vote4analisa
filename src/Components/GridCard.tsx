import { useMantineTheme, Text, Grid, Card, Image, Badge, Button, Group } from '@mantine/core';

interface GridCardProps {
    imageTitle?: string,
    title: string,
    content: string,
    buttonUse?: boolean,
    buttonText?: string,
    buttonLink?: string,
}

const GridCard = ({imageTitle='team-spirit', title, content, buttonUse=false, buttonText='BUTTON TEXT', buttonLink=''}: GridCardProps) => {
    const theme = useMantineTheme();
    const addButton = buttonUse ? <Button variant="light" color="orange" fullWidth mt="14px">Find out</Button> : null

    return (
        <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                <Card.Section style={{ margin: 5 }}>
                    <Image src={require(`../Images/${imageTitle}.svg`)} alt={imageTitle} />
                </Card.Section>

                <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{title}</Text>
                </Group>

                <Text size="sm" style={{ whiteSpace: "pre-line" }}>{content}</Text>

                {addButton}
            </Card>
        </Grid.Col>
    );
};

export default GridCard;
