import React from 'react';

function About() {
    return (
    <>
        {/* About Section */}
            <div className="container my-4" id="about">
                <div className="row  justify-content-center">
                    <div className="about-history col-md-8">
                        <h4 className="mb-3 bg-success title-history">Brief History</h4>
                        <p className="text-justify text-about">
                    <span className="tagudin"> Tagudin Campus</span> is the seat of governance in the South Cluster. It was known formerly as the 
                    Tagudin General Comprehensive High School, which started as the Tagudin High School and became a 
                    national high school by virtue of RA 4447, signed into law on June 19, 1965. After its integration into ISPSC, 
                    it became the College of Arts and Sciences. Today it houses the College of Teacher Education, the College of Business and 
                    Hospitality Management, the College of Arts and Sciences, and the College of Information Technology.
                    </p>
                </div>
            </div>
        </div>
    </>
    );
}

export default About;