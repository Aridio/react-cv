import React, { Fragment } from "react";

import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Spacer from "./components/Spacer";
import Skills from "./components/Skills";
import Title from "./components/Title";

import data from "./data/data";


function App() {
  return (
    <Fragment>
      <div className="page container mx-auto px-6 xl:px-0 pb-4">
        <div className="bg-white my-10 shadow-lg py-6 lg:py-10 px-12 lg:px-24">
          <Spacer size={8} />
          <Header data={data} />
          <Spacer size={8} />
          <div className="col grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-10"> 
            <div className="col--left col-span-1 lg:col-span-2 xl:col-span-1">
              <Title title={'Sobre mi'} />
              <Spacer size={5} />
              <AboutMe data={data.aboutMe} />
              <Spacer size={5} />
              <Title title={'Habilidades'} />
              <Spacer size={5} />
              <Skills data={data.skills}/>
            </div> 
            <div className="col--right col-span-1 lg:col-span-3 xl:col-span-2">
              <Title title={'Experiencia laboral'} />
              <Spacer size={5} />
              <WorkExperience data={data.workExperience} />
            </div> 
          </div>
          <Spacer size={8} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
