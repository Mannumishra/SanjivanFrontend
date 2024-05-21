import React, { useEffect } from 'react'
import './About.css'
import aboutbanre from '../Image/Sanjivan Anusandhan banner 6.jpg'
import aboutimg from '../Image/about.jpg'
import team from '../Image/team1.webp'
import team1 from '../Image/team2.webp'
import team2 from '../Image/team3.webp'


const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <section className='mainhome'>
                <div className="home">
                   <img src={aboutbanre} alt="" style={{width:"100%"}}/>
                </div>
            </section>
            <section>
                <div className='aboutmaindiv'>
                    <div className="aboutheadingg">
                        <p>Sanjivan Anusandhan Pvt. Ltd.: Authentic Ayurvedic Manufacturing Excellence in India</p>
                    </div>
                    <div className="abouttextdiv">
                        <img src={aboutimg} alt="" />
                        <p className='abouttext'>
                            SANJIVAN ANUSANDHAN PVT. LTD., founded by <mark>Late Vaidya Bhagat Ram Goel</mark> and led by <mark>Mr. Dinesh Goel and Ms. Monika Goel</mark>, is a distinguished Ayurvedic company specializing in the manufacturing of genuine Ayurvedic medicines and herbal products. Since its establishment, Sanjivan Anusandhan has been committed to providing authentic Ayurvedic treatments and medicines based on ancient Ayurvedic texts such as Charak Samhita, Shusrut Samhita, Ashtang Sangrah, Bhav Prakash Nighantu, and others. <br />
                            The company's journey began in the year <mark>1967</mark> with a vision to bridge the gap between traditional Ayurvedic wisdom and modern health challenges. Under the guidance of renowned Ayurvedic practitioner Dr. Baldeep Kour and Mr. Vishnu Datt Sharma, Sanjivan Anusandhan has formulated over 100 Ayurvedic formulations rooted in the principles of Tridosha balance and traditional manufacturing techniques.
                        </p>
                    </div>
                    <p className='abouttextt'>
                        Recognizing the importance of quality and authenticity, Sanjivan Anusandhan operates a state-of-the-art manufacturing unit sponsored by the Khadi and Village Industries Commission (KVIC) under the Prime Minister’s Employment Generation Programme, with a focus on empowering women entrepreneurship.
                    </p>
                    <p className='abouttextt'>
                        Today, Sanjivan Anusandhan Pvt. Ltd. stands as a trusted international Ayurvedic brand, known for its expertise in blending traditional Ayurvedic knowledge with modern health challenges. Each product undergoes stringent quality checks to comply with regulations set forth by the Ayush Ministry–Government of India, FSSAI, and USFDA, ensuring international manufacturing standards are met.
                    </p>
                    <p className='abouttextt'>
                        Sanjivan Anusandhan's commitment to purity extends to its products being free from chemicals, GMOs, synthetic colors, fragrances, and fillers (Excipients). The company's manufacturing facility holds Organic Certification from Lacon Germany for NPOP, NOP & EU recognized by APEDA Government of India. With a wide range of certified organic products, including spices, pulses, grains, oils, whole herbs, herbal powders, and juices, Sanjivan Anusandhan is poised to launch an Organic Grocery division.
                    </p>
                    <p className='abouttextt'>
                        In line with its values, Sanjivan Anusandhan Pvt. Ltd. ensures that all products are 100% vegetarian and free from animal by-products, adhering to cruelty-free practices.
                    </p>
                    <p className='abouttextt'>
                        Sanjivan Anusandhan Pvt. Ltd. continues its legacy of excellence in Ayurvedic solutions, honoring its founder's vision and guided by a commitment to holistic wellness.
                    </p>
                </div>
                <div className="team">
                    <div className="aboutheadingg">
                        <p>MEET OUR TEAM</p>
                    </div>
                    <div className="meatteam">
                        <div className="meetteammember">
                            <div className='divteamimage'>
                                <img src={team} alt="" className="teamimage" />
                            </div>
                            <div className="teamtext">
                                <p className='teamname'>Late Vaidya Bhagat Ram Goel</p>
                                <p className='teammember'>FOUNDER, SANJIVAN ANUSANDHAN PVT. LTD.</p>
                            </div>
                        </div>
                        <div className="meetteammember">
                            <div className='divteamimage'>
                                <img src={team1} alt="" className="teamimage" />
                            </div>
                            <div className="teamtext">
                                <p className='teamname'>Mr. Dinesh Goel</p>
                                <p className='teammember'>DIRECTOR, SANJIVAN ANUSANDHAN PVT. LTD.</p>
                            </div>
                        </div>
                        <div className="meetteammember">
                            <div className='divteamimage'>
                                <img src={team2} alt="" className="teamimage" />
                            </div>
                            <div className="teamtext">
                                <p className='teamname'>Ms. Monika Goel</p>
                                <p className='teammember'>CO-DIRECTOR, SANJIVAN ANUSANDHAN PVT. LTD.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About