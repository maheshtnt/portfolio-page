import React from "react";
import githubIcon from '@/assets/githubIconWhite.svg';


function ProjectCard(title: string, desc: string, image: string, githubLink = "") {
    return (
        <div className="flex h-[40rem] items-center justify-center w-[600px]">
              <div className="hoverBase relative bg-popover-foreground text-background flex items-center justify-center flex-col rounded-xl shadow-black shadow-xl size-9/10">
                <div className="h-8/10 w-full flex flex-auto">
                    <img src={image} className="h-full w-full"></img>
                </div> 
                <div className="h-2/10 w-full flex flex-auto items-center align-middle">
                  <h3 className="text-4xl text-center w-full">{title}</h3>
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