
import styled from 'styled-components'


const Headline = styled.h2`
    font-size: 50px;
    color: red;
    font-weight: lighter;
    & span {
        font-weight: bold;
    }
`


const About = () => {
    return (
        <div>
            <Headline>About the <span>site</span></Headline>
        </div>
    );
};

export default About;