import React from 'react';
import Box_3d from './Box_3d';

const Home = () => {
  return (
    <div>
      <div className="container flex flex-col sm:flex-row justify-between items-center px-5 h-screen bg-indigo-600">
        {/* Card Section - Left Side */}
        <div className="card sm:w-[50%] h-[100%] sm:h-[90%] p-4 shadow-lg rounded-xl overflow-y-auto bg-white mt-5">
          <div className="card-body p-5">
            <h1 className="text-center text-red-700 font-bold text-2xl md:text-4xl mb-6">
              Get Your Academic Resources Here!
            </h1>
            <p className="text-justify leading-relaxed text-gray-700 text-lg mb-5">
              Discover a wide range of academic resources designed to support your educational journey. Our platform offers valuable materials for B.Tech students, including notes, assignments, past papers, and project ideas.
            </p>
            <ul className="list-disc pl-6 space-y-3 font-medium text-gray-700">
              <li>Comprehensive lecture notes for all subjects</li>
              <li>Assignments and detailed solutions</li>
              <li>Previous year question papers for exam prep</li>
              <li>Innovative project ideas and guidelines</li>
              <li>Curated online resources and references</li>
              <li>Proven study tips and academic strategies</li>
            </ul>
          </div>

          {/* Table Section */}
          <div className="mt-8">
            <h2 className="text-center text-blue-600 font-bold text-2xl mb-4">
              Academic Resources Overview
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="px-4 py-2 border border-gray-300">Resource</th>
                    <th className="px-4 py-2 border border-gray-300">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">Lecture Notes</td>
                    <td className="px-4 py-2 border border-gray-300">
                      Detailed notes for all semesters and subjects.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Assignments</td>
                    <td className="px-4 py-2 border border-gray-300">
                      Assignments with step-by-step solutions.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">Question Papers</td>
                    <td className="px-4 py-2 border border-gray-300">
                      Previous year papers for practice.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">Project Ideas</td>
                    <td className="px-4 py-2 border border-gray-300">
                      Innovative project concepts with guidelines.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-300">Online Resources</td>
                    <td className="px-4 py-2 border border-gray-300">
                      Links to useful online materials and references.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3D Box Section - Right Side */}
        <div className="h-[80%] sm:h-[90%] hidden sm:flex w-[40%] justify-center items-center rounded-xl mt-8 sm:mt-0">
          <Box_3d />
        </div>
      </div>
    </div>
  );
};

export default Home;
