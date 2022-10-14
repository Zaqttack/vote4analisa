import Hero from "../Components/Hero";
import ContentLeft from '../Components/ContentLeft';
import ContentRight from '../Components/ContentRight';
import About from '../Components/About';
import FAQ from '../Components/FAQ';

const Content = () => {
    return (
        <>
            <Hero />
            <ContentLeft 
                title='UTSA’s Breakfast with the Boss'
                text='My platform, this would be a campus wide event for students to connect with local bosses from all disciplines to learn about life after college. This event encourages upholding the “Supporting the fearless exploration of dreams and ideas in the advance of ingenuity, creativity, and discovery,” part of the Roadrunner Creed. Students would have the opportunity to share a quick meal with the bosses and learn how to be successful after leaving college. This event would promote the exploration of opportunities and inspire students to discover a path that encourages them to be fearless and creative.'
                imageTitle='abstract-platform'
            />
            <ContentRight 
                title='When is Voting?'
                text={'Voting starts October 18th and ends on October 20th. UTSA Students can sign into RowdyLink and cast their vote there!'} 
                imageTitle='election-day'
                buttonUse={true}
                buttonText='Get Notified'
                buttonLink='https://docs.google.com/forms/u/0/d/1gcbQVV4Rwr4xBxy4T24PAWFgnkKbLXCUYPJp9M2uTS0/viewform'
            />
            <About />
            <FAQ />
        </>
    )
};

export default Content;