import React from 'react';
import Box_3d from './Box_3d';

const Home = () => {
    return (
        <div>
            <div className="container flex flex-col sm:flex-row justify-between items-center px-5 h-screen w-screen">
                {/* Card Section */}
                <div className="card  sm:w-[40%] h-[100%] sm:h-[90%] p-5 shadow-md rounded-xl overflow-y-auto bg-white">
                    <div className="card-body p-4">
                        <h1 className="text-center text-red-700 font-bold text-3xl mb-4">
                            Get your academic resources here.....!
                        </h1>
                        <p className="text-justify leading-relaxed text-gray-600 text-base">
                            Here you can find all the resources for your academics. This app
                            contains a comprehensive collection of resources for B.Tech
                            students, including lecture notes, assignments, previous year
                            question papers, and project ideas. Stay organized and make the
                            most of your academic journey with these valuable materials.
                        </p>
                        <ul className="list-disc pl-5 mt-4 font-medium text-gray-700">
                            <li>Lecture notes for all subjects</li>
                            <li>Assignments and solutions</li>
                            <li>Previous year question papers</li>
                            <li>Project ideas and guidelines</li>
                            <li>Online resources and references</li>
                            <li>Study tips and strategies</li>
                        </ul>
                    </div>
                </div>

                {/* 3D Box Section */}
                <div className="h-[80%] sm:h-[90%] hidden sm:flex w-[40%]  justify-center items-center rounded-xl mt-8 sm:mt-0">
                    <Box_3d />
                </div>
            </div>
        </div>
    );
};

export default Home;
