import { Button, Badge, Burger, Drawer, Title, Anchor, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    //const theme = useMantineTheme();
    const [opened, setOpened] = React.useState(false);
    const title = opened ? 'Close navigation' : 'Open navigation';

    return (
        <header>
            <div className="content-desktop">
                <div>
                    <Badge size="lg" radius={10} color="orange">ANALISA ROJAS</Badge>
                </div>
                <div className="navbar">
                    <div className="navbar-item"><Link to="section-two" smooth duration={500}>Campaign</Link></div>
                    <div className="navbar-item"><Link to="section-four" smooth duration={500}>Me</Link></div>
                    <div className="navbar-item"><Link to="section-five" smooth duration={500}>FAQS</Link></div>

                    <Button color="orange" onClick={() => redirectToLink('https://docs.google.com/forms/d/e/1FAIpQLSdmvCOJ3i1f3tIJMSeT7Uu6UhOgYdUvzKWcnxstYsQAedIWqA/viewform')}>Get Notified</Button>
                </div>
            </div>

            <div className="content-mobile">
                <div className="burger-button">
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        title={title}
                        size="sm"
                    />
                </div>

                <Drawer
                    transition="rotate-right"
                    transitionDuration={250}
                    transitionTimingFunction="ease"
                    overlayOpacity={0.55}
                    position="right"
                    closeButtonLabel="Close drawer"
                    title="Menu"
                    padding="xl"
                    opened={opened}
                    onClose={() => setOpened(false)}
                >
                    <div className="menu">
                        <div className="menu-items">
                            <div className="menu-item"><Link to="section-two" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Campaign</Title></Link></div>
                            <div className="menu-item"><Link to="section-four" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>Me</Title></Link></div>
                            <div className="menu-item"><Link to="section-five" smooth duration={500} onClick={() => setOpened(false)}><Title order={2}>FAQs</Title></Link></div>
                        </div>

                        <div className="menu-items">
                            <Text>Vote Now!</Text>

                            <Anchor href="https://rowdylink.utsa.edu/submitter/election/start/559036">
                                Here!
                            </Anchor>
                        </div>
                    </div>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};