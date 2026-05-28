
import styled from 'styled-components'


const Headline = styled.h2`
    color: red;
    font-weight: lighter;
    & span {
        font-weight: bold;
    }
`


const About = () => {
    return (
        <div>
            <Headline className="md:text-6xl text-3xl">About the <span>site</span></Headline>
        </div>
    );
};

export default About;