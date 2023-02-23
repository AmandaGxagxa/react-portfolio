import acceleration from './Acceleration.png'
import ginkgo from './ginkgo.png'
import forge from './forge.png'
import tfg from './tfg.png'
import styled from 'styled-components'


function Experience() {
const Wrapper = styled.section`
min-height: 100vh;
background-color: #ffafcc;
display: flex;
justify-content: center;
align-items: center;

`
const ExpImg = styled.img.attrs((props) => ({
    src: props.src,
  }))`

  max-width: 100%;
  width: 60%;
  object-fit: contain;
  `




    return (

        <Wrapper className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>EXPERIENCE</h2>
                </div>
                <div className="col-md-3">
                    {/* <!-- Accelerstion --> */}
                    <ExpImg src={acceleration} alt="acceleration" />
                    <p> ACCELERATION - Associate <br />January 2019- December 2019,
                        Salesforce Email marketing Quality Assurer - 3months
                        Adobe Analytics Developer- 9months</p>


                </div>
                <div className="col-md-3">
                    <ExpImg src={ginkgo} alt="ginkgo" />
                    <p> GINKGO AGENCY MEDIA <br />
                        Feruary 2020 Content uploader</p>
                </div>
                <div className="col-md-3">

                    <ExpImg src={forge} alt="forge" />
                    <p>FORGE TECHNOLOGIES -2016 - 2017 <br /> Web Developer intern
                        Turning designed pages into web pages using HTML, CSS.
                        Adding functionalities using Javascript and JQuery.

                    </p>
                </div>
                <div className="col-md-3">
                    {/* <!-- TFG --> */}
                    <ExpImg src={tfg} alt="tfg" />
                    <p>TFG LABS : CURRENTLY <br />Software engineer apprentice<br /></p>
                </div>
            </div>
        </Wrapper>


    )
}

export default Experience;