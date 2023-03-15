// import './About.css'

import styled from 'styled-components'
import css from '../img/css.png'
import git from '../img/git.png'
import html from '../img/html.png'
import java from '../img/java.png'
import js from '../img/js.png'
import node from '../img/node.png'
import react from '../img/react.png'

function Skills() {
    const Wrapper = styled.section`

min-height: 100vh;
background-color: #F7F7F7;
display: flex;
justify-content: center;
align-items: center;
`
    const SkillImg = styled.img.attrs((props) => ({
        src: props.src,
    }))`
  max-width: 65px;
  border-radius: 5px;
  margin: 10px;

  `
    const Text = styled.p`

  line-height: 180%;
  `



    return (
        <Wrapper className="container"id="skills">
            <div className="row">
                <div className="col-md-12">
                    <h2>SKILLS</h2>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <Text>I have an NQF LEVEL 5 in IT (Software Development), and I have experience in HTML, CSS,
                        JavaScript and Java. I use Git version control to host my projects on Github.
                        With these skills I create interative and responsive web experiences. I have some <a href="#projects">projects</a>
                        that I created using all the mentioned skills.
                        I did Java OCA learning, getting to understand Java concepts (primitive, inheritance,
                        polymophism, method and more). I also created some small Java projects which are also on
                        <a href="https://github.com/AmandaGxagxa?tab=repositories&q=&type=&language=java&sort="
                            target="_blank" rel="noreferrer" >Github</a>.
                    </Text>
                    <div className="col-md-1"></div>
                </div>
                <div className="col-md-12 ">
                    <SkillImg src={html} alt="HTML Developer" />
                    <SkillImg src={css} alt="CSS Developer" />
                    <SkillImg src={js} alt="JavaScript Developer" />
                    <SkillImg src={node} alt="NodeJS Developer" />
                    <SkillImg src={git} alt="Git Version Control" />
                    <SkillImg src={java} alt="Java Developer" />
                    <SkillImg src={react} alt="React Developer" />
                </div>

            </div>
        </Wrapper>)
}
export default Skills;