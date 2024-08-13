import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import BG from "../images/scheduleBG.jpg";

import Navbar from '../components/navbar'
import Footer from '../components/footer'

export function Schedule() {
    return (
    <>

    <div style={{ 
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <Navbar />
        
        <h1 className='page-header' style={{color:"white"}}>Schedule</h1>
        
        <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"
                        contentStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title text-3xl">DAY 1</h1>
                        <h4 className="vertical-timeline-element-subtitle">30th March</h4>
                        <p>

                            Been the first day of event it’s one of the most jam-packed days
                            with inauguration ceremony and 3 events
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"
                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}


                    >
                        <h2 >Day 1</h2>
                        <h2 className="vertical-timeline-element-title">1. Inauguration</h2>

                        <h4 className="vertical-timeline-element-subtitle">10:00 to 12:00 | Quadrangle</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300 "

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 1</h2>
                        <h2 className="vertical-timeline-element-title">2. Open Mic</h2>
                        <h4 className="vertical-timeline-element-subtitle">12:45 to 14:30 | Quadrangle A</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 1</h2>
                        <h2 className="vertical-timeline-element-title">3. Blind C</h2>
                        <h4 className="vertical-timeline-element-subtitle">13:00 to 15:00 | Lab ( A-Wing, IT dept.)</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 1</h2>
                        <h2 className="vertical-timeline-element-title">4. Bridge IT</h2>
                        <h4 className="vertical-timeline-element-subtitle">13:00 to 16:30 | Auditorium</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 1</h2>
                        <h2 className="vertical-timeline-element-title">5. Robo War</h2>
                        <h4 className="vertical-timeline-element-subtitle">13:00 to 15:00 | Lab ( A-Wing, IT dept.)</h4>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"
                        contentStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title text-3xl">DAY 2</h1>
                        <h4 className="vertical-timeline-element-subtitle">31st March</h4>
                        <p>

                            After a jam-packed day, during the second we got the star
                            of the show and more events lined. Listed as follows
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"
                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}


                    >
                        <h2 >Day 2</h2>
                        <h2 className="vertical-timeline-element-title">1. Compietitive coding contest</h2>

                        <h4 className="vertical-timeline-element-subtitle">
                            9:00 to 13:00 | Lab ( A-Wing, IT dept.)</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300 "

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 2</h2>
                        <h2 className="vertical-timeline-element-title">2. Neon Cricket</h2>
                        <h4 className="vertical-timeline-element-subtitle">9:00 to 13:00 | Physics Lab</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 2</h2>
                        <h2 className="vertical-timeline-element-title">3. Valorant</h2>
                        <h4 className="vertical-timeline-element-subtitle">10:00 to 16:30 | Lab ( A-Wing, IT dept.)</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 2</h2>
                        <h2 className="vertical-timeline-element-title">4. Business Plan Presentation</h2>
                        <h4 className="vertical-timeline-element-subtitle">13:00 to 16:00 | Comps Department classrooms</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 2</h2>
                        <h2 className="vertical-timeline-element-title">5.MegaHack</h2>
                        <h4 className="vertical-timeline-element-subtitle">TBA</h4>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"
                        contentStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(255, 69, 0)', color: '#fff' }}

                    >
                        <h1 className="vertical-timeline-element-title text-3xl">DAY 3</h1>
                        <h4 className="vertical-timeline-element-subtitle">1st April</h4>
                        <p>

                            After a very technical-packed day,
                            during the third and the final day we got more events lined. Listed as follows:
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"
                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}


                    >
                        <h2 >Day 3</h2>
                        <h2 className="vertical-timeline-element-title">1. Anime Quiz</h2>

                        <h4 className="vertical-timeline-element-subtitle">
                            9:00 to 13:00 | Auditorium</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300 "

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 3</h2>
                        <h2 className="vertical-timeline-element-title">2. Robo Soccer</h2>
                        <h4 className="vertical-timeline-element-subtitle">10:00 to 13:00 | Quadrangle A</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--event hover:scale-125 hover:ease-in-out duration-300"

                        contentStyle={{ color: '#ff4500' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 69, 0)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                    >
                        <h2>Day 3</h2>
                        <h2 className="vertical-timeline-element-title">3. Line Follower</h2>
                        <h4 className="vertical-timeline-element-subtitle">11:00 to 13:00 | Quadrangle B</h4>

                    </VerticalTimelineElement>


                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

                    />
                </VerticalTimeline>

                </div>
       
        <Footer />
      
    </>
    )
}

export default Schedule