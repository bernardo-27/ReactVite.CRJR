import Announcements from './Announcements';
import React from 'react';

function Home() {
return (
    <>
    <div className="container my-5" id='home'>
        <div className="row justify-content-between">
            <div className="col-md-8 text-center">
                <div className="home-content">
                <h6 className="panthers bg-success rounded-top">Welcome Back, Panthers!</h6>
                    <p className="text-panthers">“𝐓𝐡𝐞 𝐬𝐭𝐚𝐫𝐭 𝐨𝐟 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐧𝐞𝐰 𝐛𝐫𝐢𝐧𝐠𝐬 "The vacay era has finally ended as we welcome the fresh start of our learning journey.
                    Welcome back, ISPSCians!" The vacay era has finally ended as we welcome the fresh start of our learning journey. 
                    Welcome back, ISPSCians! oray for another academic year that awaits to showcase our wit and perseverance.
                    </p> 
                </div>    
            </div>
            <div className="col-md-4 announcements">
                <Announcements />
            </div>
        </div>
    </div>
        {/* School News Section */}
        <div className="container news">
            <div className="row justify-content-start ">
                <div className="col-md-8">
                        <div className="news-content ">
                            <h4 className="bg-success title-news mb-3">School News</h4>
                                <h4>
                                    <a href="#" className="text-decoration-none text-primary m-5">
                                    ISPSC ranks in 2023 Global Top Innovative Universities 
                                    </a>
                                </h4>
                                <div className='d-flex align-items-start m-2'>
                                <img className="news-image me-3"
                                src="https://ispsctagudin.info/home/assets/img/ranked_ispsc.jpg"
                                alt="ISPSC Ranked"
                                width="90px"
                                />
                                <p className="text-news mt-3">
                                    With its innovative programs on student mobility and openness, crisis management, 
                                    and the fourth industrial revolution, the Ilocos Sur Polytechnic State College (ISPSC) 
                                    was ranked as one of the Global Top Innovative Universities in the May 2023 ranking of 
                                    The World University Rankings for Innovation (WURI).
                                </p>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    </>
);
}


export default Home;