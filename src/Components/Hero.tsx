import { Text, Container, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const Hero = () => {
    //const theme = useMantineTheme();

    return (
        <section id="hero">
            <Container fluid>
                <div className="hero-content">
                    <div style={{ marginBottom: 2 }}>
                        <Text transform="uppercase" weight={600} color="orange">
                            <h1 className='pre-title'>
                                Analisa Rojas
                            </h1>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 5 }}>
                        <Text weight={600} color="white">
                            for
                        </Text>
                    </div>

                    <div style={{ marginBottom: 15 }}>
                        <Text>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                <h2 className="title">
                                    Spirit of the Roadrunner
                                </h2>
                            </MediaQuery>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="white">
                            UTSA's Spirit of the Roadrunner Candidate
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-two" smooth duration={500}>
                            <Button color="orange" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Tell me more</Button>
                        </Link>

                        <Button variant="default" radius="lg" size="md" onClick={() => redirectToLink('https://docs.google.com/forms/d/e/1FAIpQLSdmvCOJ3i1f3tIJMSeT7Uu6UhOgYdUvzKWcnxstYsQAedIWqA/viewform')}>Get Notified</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};
