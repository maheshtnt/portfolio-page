import { useEffect, useState } from 'react';
import './App.css';
import githubIcon from '@/assets/githubIconWhite.svg';
import linkedinIcon from '@/assets/linkedinIconWhite.svg';
import culinaryCompassNew from '@/assets/CC_1.jpg';
import RRSNew from '@/assets/RRS_1.jpeg';
import MUNew from '@/assets/MU_1.jpg';
import { RotatingText } from "@/components/ui/shadcn-io/rotating-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ProjectCard from '@/components/projectCard.tsx'


function App() {
  const [count, setCount] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  
  return (
    <>
      <div className="App content-center h-screen">
        <div className="flex justify-center flex-col">
          <div className="justify-center">
            <div className="flex flex-col justify-center mt-[18vh]">
              <div className="Introduction text-left text-6xl">
                Hi,<br/>
                <div className="mt-[1rem]">
                  I'm Sai Mahesh Vemulapalli
                </div>
                <div className="mt-[1rem]">
                <RotatingText 
                  className="py-2"
                  text={["Developer", "Designer", "Engineer"]}
                  duration={2000}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />          
                </div>
              </div>
              <div className="flex gap-6 mt-[2rem]">
                <a href="https://github.com/maheshtnt"><img src={githubIcon} /></a>
                <a href="https://www.linkedin.com/in/sai-mahesh-vemulapalli/"><img src={linkedinIcon} /></a>
              </div>
            </div>
          </div>
          <div className="About text-left mt-[5rem]">
            <h2 className="font-bold text-4xl mb-[1rem]">
              About
            </h2>
            I’m a Software Engineer and M.S. Computer Science graduate from the University of Illinois - Chicago. 
            I like building end-to-end web products—clean React/Node interfaces backed by solid APIs, data pipelines, and cloud automation on AWS. 
            My focus is performance, reliability, and clear UX, and I’m comfortable working across the stack from SQL modeling to deployment.
          </div>
          <div className="Experience text-left mt-[5rem]">
            <h2 className="font-bold text-4xl mb-[1rem]">
              Experience
            </h2>
            <h3 className="font-bold text-3xl mt-[1rem]">
            Associate Software Engineer — S&P Global (Jul 2022 – Mar 2023)
            </h3>
            <div className="mt-[1rem]">
              <ul className="list-disc">
                <li>Developed an in-house investor–fund portal (React, Node, REST) with cross-functional teams, reducing user load times by 75%.</li>

                <li>Built an automated S3→OutSystems ETL pipeline powered by SQS, cutting data processing time by 3×.</li>

                <li>Deployed containerized AWS Lambda functions to trigger investor-data workflows on database events and notify users via SNS.</li>

                <li>Optimized complex SQL queries (joins, window functions, subqueries) and streamlined the S3→Lambda data path, reducing migration time by 30%.</li>
              </ul>
            </div>
          </div>
          <div className="text-left mt-[5rem]">
            <div className="font-bold text-4xl mb-[1rem]">
              Projects
            </div>
          <div className="grid grid-cols-2">
            {ProjectCard(
              "Culinary Compass",
              "An intuitive and effective android application to help users understand the nutritional make up of restaurant menus",
              culinaryCompassNew,
              "https://github.com/maheshtnt/CulinaryCompass"
            )}
            {ProjectCard(
              "Rapid Response System for Road Accidents",
              "A real-time road accident detection system using IoT and MQTT technology to provide immediate assistance to accident victims",
              RRSNew,
              "https://github.com/maheshtnt/CulinaryCompass"
            )}
            {ProjectCard(
              "Malicious URL Detector",
              "A machine learning model trained to classify URLs as malicious or benign based on 16 different features extracted from the URLs, with a frontend web application for user interaction.",
              MUNew,
              "https://github.com/maheshtnt/Malicious-URL-Detector"
            )}
            {/* <div className="flex h-[40rem] items-center justify-center">
              <div className="hoverBase relative bg-foreground text-background flex items-center justify-center flex-col gap-6 rounded-xl shadow-sm size-9/10">
                <div className="absolute h-full w-full flex flex-auto">
                    <img src={culinaryCompassNew} className="h-full"></img>
                </div> 
                <div className="hoverTop absolute w-full h-full bg-foreground rounded-xl text-4xl text-justify items-center flex">
                  <div className="text-justify items-center flex flex-col">
                    An intuitive and effective android application to help users understand the nutritional make up of restaurant menus
                    <a className="mt-5" href="https://github.com/maheshtnt/CulinaryCompass"><img src={githubIcon} /></a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex h-[40rem] items-center justify-center">
              <div className="bg-background text-foreground flex items-center justify-center rounded-xl size-9/10">
                <div>
                  2
                </div>
              </div>
            </div>
            <div className="flex h-[40rem] items-center justify-center">
              <div className="bg-background text-foreground flex items-center justify-center rounded-xl size-9/10">
                <div>
                  3
                </div>
              </div>
            </div>
          </div>



          <div className='CarouselDiv px-[5rem]'>
            <Carousel className="items-center" setApi={setApi}>
              <CarouselContent>
                <CarouselItem className="flex h-[40rem] items-center justify-center">
                  <div className="hoverBase relative bg-foreground text-background flex items-center justify-center flex-col gap-6 rounded-xl shadow-sm size-9/10">
                    <div className="absolute h-full w-full flex flex-auto">
                      <div className="flex text-9xl text-justify items-center">
                        <div>Culinary<br />Compass</div>
                      </div>
                        <img src={culinaryCompassNew} className="h-full"></img>
                    </div> 
                    <div className="hoverTop absolute w-full h-full bg-foreground rounded-xl text-4xl text-justify items-center flex">
                      <div className="text-justify items-center flex flex-col">
                        An intuitive and effective android application to help users understand the nutritional make up of restaurant menus
                        <a className="mt-5" href="https://github.com/maheshtnt/CulinaryCompass"><img src={githubIcon} /></a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex h-[40rem] items-center justify-center">
                  <div className="bg-background text-foreground flex items-center justify-center rounded-xl size-9/10">
                    <div>
                      2
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem className="flex h-[40rem] items-center justify-center">
                  <div className="bg-background text-foreground flex items-center justify-center rounded-xl size-9/10">
                    <div>
                      3
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-transparent" />
              <CarouselNext className="bg-transparent" />
            </Carousel>
              {/* <div className="flex gap-3 justify-center">
                <Button onClick={() => api?.scrollTo(current - 1)}>Left</Button>
                <Button onClick={() => api?.scrollTo(current + 1)}>Right</Button>
            </div> */}
          </div>
          
          
          </div>
        </div>
      </div>
    </>
  )
}

export default App
