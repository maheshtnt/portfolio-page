import React from "react";
import githubIcon from '@/assets/githubIconWhite.svg';


function ProjectCard(title: string, desc: string, image: string, githubLink = "") {
    return (
        <div className="flex h-[40rem] items-center justify-center">
              <div className="hoverBase relative bg-foreground text-background flex items-center justify-center flex-col gap-6 rounded-xl shadow-sm size-9/10">
                <div className="absolute h-full w-full flex flex-auto">
                  {/* <div className="flex text-9xl text-justify items-center">
                    <div>Culinary<br />Compass</div>
                  </div> */}
                    <img src={image} className="h-full"></img>
                </div> 
                <div className="hoverTop absolute w-full h-full bg-foreground text-4xl text-justify items-center flex p-4">
                  <div className="text-justify items-center flex flex-col">
                    {desc}
                    {githubLink ? <a className="mt-5" href={githubLink}><img src={githubIcon} /></a> : null}
                  </div>
                </div>
              </div>
            </div>
    );
}

export default ProjectCard;