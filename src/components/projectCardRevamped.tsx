import React from "react";
import BGNoise from '@/assets/bgnoise.png';
import githubIcon from '@/assets/githubIconWhite.svg';


function ProjectCardRevamped(title: string, desc: string, image: string, githubLink = "", iconImage: string = githubIcon, rightOriented = false) {

  if (rightOriented) {
    return (
      <div className="project-card-top sticky">
        <div className="project-card w-full flex flex-row rounded-4xl p-10 sticky">
          <div className="project-text text-center pr-5 relative">
                <div className="text-left items-center flex flex-col h-full justify-center">
                  <h3 className="text-4xl text-left w-full font-bold mb-5 text-amber-600">{title}</h3>
                  {desc}
                  {githubLink ? <a className="mt-5" href={githubLink}><img src={iconImage} /></a> : null}
                </div>
          </div>
          <div className="flex items-center justify-center pl-10 relative">
            <div className="project-image bg-transparent text-background flex items-center justify-center flex-col rounded-xl">
              <div className="flex flex-auto w-[400px] h-[400px]">
                  <img src={image} className="h-full w-full"></img>
              </div> 
              {/* <div className="h-2/10 w-full flex flex-auto items-center align-middle">
                <h3 className="text-4xl text-center w-full">{title}</h3>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="project-card-top sticky">
        <div className="project-card w-full flex flex-row rounded-4xl p-10 sticky">
          <div className="flex items-center justify-center pr-10 relative">
            <div className="project-image bg-popover-foreground text-background flex items-center justify-center flex-col rounded-xl">
              <div className="flex flex-auto w-[400px] h-[400px]">
                  <img src={image} className="h-full w-full"></img>
              </div> 
              {/* <div className="h-2/10 w-full flex flex-auto items-center align-middle">
                <h3 className="text-4xl text-center w-full">{title}</h3>
              </div> */}
            </div>
          </div>
          <div className="project-text text-center pl-5 relative">
                <div className="text-left items-center flex flex-col h-full justify-center">
                  <h3 className="text-4xl text-left w-full font-bold mb-5 text-amber-600">{title}</h3>
                  {desc}
                  {githubLink ? <a className="mt-5" href={githubLink}><img src={githubIcon} /></a> : null}
                </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCardRevamped;