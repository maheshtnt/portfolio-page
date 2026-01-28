import { useEffect, useState, useRef } from 'react';
import './App.css';
import githubIcon from '@/assets/githubIconWhite.svg';
import linkedinIcon from '@/assets/linkedinIconWhite.svg';
import pythonIcon from '@/assets/PythonSvg.svg';
import javaIcon from '@/assets/JavaSvg.svg';
import CppIcon from '@/assets/CppSvg.svg';
import sqlIcon from '@/assets/SQLSvg.svg';
import JSIcon from '@/assets/JSSvg.svg';
import TSIcon from '@/assets/TSSvg.svg';
import reactIcon from '@/assets/ReactSvg.svg';
import tailwindIcon from '@/assets/TailwindSvg.svg';
import tensorflowIcon from '@/assets/TensorflowSvg.svg';
import pytorchIcon from '@/assets/PyTorchSvg.svg';
import kerasIcon from '@/assets/KerasSvg.svg';
import numpyIcon from '@/assets/NumpySvg.svg';
import linuxIcon from '@/assets/LinuxSvg.svg';
import dockerIcon from '@/assets/DockerSvg.svg';
import kubernetesIcon from '@/assets/KubernetesSvg.svg';
import awsIcon from '@/assets/AWSSvg.svg';
import culinaryCompassOld from '@/assets/CC_1.jpg';
import culinaryCompassNew from '@/assets/CC_New_2.png';
import RRSNew from '@/assets/RRS_1.jpeg';
import MUNew from '@/assets/MU_New.png';
import BGNoise from '@/assets/bg_noise.png'
import downArrow from '@/assets/downArrowSVG.svg'
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
import ProjectCardRevamped from '@/components/projectCardRevamped.tsx'


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
  
  const aboutRef = useRef(document.createElement("div"));
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <div className="App content-center h-screen p-[2rem] font-montserrat">
        <div className="flex justify-center flex-col max-w-4xl mx-auto">
          <div className="flex justify-center h-screen">
            <div className="flex flex-col justify-center">
              <div className="Introduction text-left text-6xl">
                Hi,<br/>
                <div className="mt-[1rem]">
                  I'm Sai Mahesh Vemulapalli
                </div>
                <div className="mt-[1rem] Rotator">
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
              <div onClick={scrollToAbout} className="know-more flex flex-col justify-center items-center mt-[6vh]">
                <h2>Know More</h2>
                <img className="w-[20px]"src={downArrow}></img>
              </div>
            </div>
          </div>

          {/* About Me Section */}
          <div ref={aboutRef} className="About text-left mt-[5rem]">
            <h2 className="font-bold text-4xl mb-[1rem]">
              About Me
            </h2>
            I’m a Software Engineer and M.S. Computer Science graduate from the University of Illinois - Chicago. 
            I like building end-to-end web products with clean React/Node interfaces backed by solid APIs, data pipelines, and cloud automation on AWS. 
            My focus is performance, reliability, and clear UX, and I’m comfortable working across the stack from SQL modeling to deployment.
          </div>

          {/* Experience Section */}
          <div className="Experience text-left mt-[5rem]">
            <h2 className="font-bold text-4xl mb-[1rem]">
              Experience
            </h2>
            <h3 className="flex flex-col text-2xl mt-[1rem]">
            <div className="font-bold text-amber-600">Software Developer</div>
            <div>Community Dreams Foundation | Aug 2025 - Current</div>
            </h3>
            <div className="mt-[1rem]">
              <ul className="list-disc">
                <li>Built an AI-powered internal support platform using agentic workflows to automate task execution and enterprise 
                  knowledge retrieval for cross-team operational requests.</li>

                <li>Architected modular LangGraph agents with centralized orchestration, reducing agent initialization latency by 
                  50% and improving task throughput via optimized routing and parallel execution.</li>

                <li>Implemented Slack-based workflows, Kanban task management, and internal wiki access using an MCP server, 
                  enabling standardized agent-to-tool communication.</li>

                <li>Deployed containerized services on Kubernetes, reducing deployment time by 45% and enabling scalable, parallel 
                  rollouts across teams.</li>
              </ul>
            </div>
            <h3 className="flex flex-col text-2xl mt-[1rem]">
            <div className="font-bold text-amber-600">Associate Software Engineer</div>
            <div>S&P Global | Jul 2022 - Mar 2023</div>
            </h3>
            <div className="mt-[1rem]">
              <ul className="list-disc">
                <li>Developed a new in-house web app solution using React, Node and RESTful APIs in Agile environment with 
                  different teams to enable interaction between Investors and Funds, resulting in 75% reduction in user load times</li>

                <li>Integrated AWS S3 data into Outsystems through an optimized ETL pipeline with error handling and diagnostic 
                  tools, achieving over 64% reduction in data processing time using SQS.</li>

                <li>Deployed AWS Lambda Serverless Functions packaged in containerized Linux environments to trigger investor 
                  data workflows in response to database events and notify users with SNS.</li>

                <li>Reduced data retrieval times by 30% by optimizing complex SQL queries with joins, window functions, and 
                  subqueries, improving user experience by reducing response times across the application.</li>
              </ul>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="w-full flex flex-col text-left mt-[5rem]">
            <div className="text-4xl font-bold">Technologies</div>
            <div>
                <div className="text-3xl mt-[1rem]">Programming and Databases</div>
                <div className="flex flex-row gap-8 mt-[1rem] text-base text-center">
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={pythonIcon}></img></div><div>Python</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={CppIcon}></img></div><div>C++</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={javaIcon}></img></div><div>Java</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={sqlIcon}></img></div><div>SQL</div></div>
                </div>

                <div className="text-3xl mt-[1rem]">Full Stack Development</div>
                <div className="flex flex-row gap-8 mt-[1rem] text-base text-center">
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={reactIcon}></img></div><div>React</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={JSIcon}></img></div><div>JavaScript</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={TSIcon}></img></div><div>TypeScript</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]"src={tailwindIcon}></img></div><div>TailWind</div></div>
                </div>
                
                <div className="text-3xl mt-[1rem]">Artificial Intelligence and ML</div>
                <div className="flex flex-row gap-8 mt-[1rem] text-base text-center">
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]" src={tensorflowIcon}></img></div><div>TensorFlow</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]" src={pytorchIcon}></img></div><div>PyTorch</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]" src={kerasIcon}></img></div><div>Keras</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img className="w-[50px]" src={numpyIcon}></img></div><div>NumPy</div></div>
                </div>

                <div className="text-3xl mt-[1rem]">Linux and Cloud Services</div>
                <div className="flex flex-row gap-8 mt-[1rem] text-base text-center">
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img src={linuxIcon}></img></div><div>Linux</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img src={dockerIcon}></img></div><div>Docker</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img src={kubernetesIcon}></img></div><div>Kubernetes</div></div>
                  <div className="skill-hover flex flex-col align-middle w-[80px]"><div className="flex justify-center"><img src={awsIcon}></img></div><div>AWS</div></div>
                </div>

            </div>
          </div>


          {/* Projects Section*/}
          <div className="text-left mt-[5rem]">
            <div className="font-bold text-4xl mb-[1rem]">
              Projects
            </div>
          <div className="grid gap-30 grid-cols-1 md:grid-cols-1 ">
            {ProjectCardRevamped(
              "Culinary Compass",
              "An intuitive and effective android application to help users understand the nutritional make up of restaurant menus",
              culinaryCompassNew,
              "https://github.com/maheshtnt/CulinaryCompass",
              true
            )}
            {ProjectCardRevamped(
              "Rapid Response System for Road Accidents",
              "A real-time road accident detection system using IoT and MQTT technology to provide immediate assistance to accident victims",
              RRSNew,
              "https://github.com/maheshtnt/CulinaryCompass",
              false
            )}
            {ProjectCard(
              "Malicious URL Detector",
              "A machine learning model trained to classify URLs as malicious or benign based on 16 different features extracted from the URLs, with a frontend web application for user interaction.",
              MUNew,
              "https://github.com/maheshtnt/Malicious-URL-Detector"
            )}
            {ProjectCard(
              "SoundFlow",
              "A web application that allows users to share and experience music tracks, ",
              MUNew,
              "https://github.com/maheshtnt/soundflow"
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
          
          <div className="h-[10rem] w-full flex flex-col gap-8 items-center">
              <div className="text-5xl">Contact Me</div>
              <div className="flex flex-row gap-5">
                <img src={githubIcon}></img>
                <img src={linkedinIcon}></img>
              </div>
          </div> 


          </div>
        </div>
      </div>
    </>
  )
}

export default App
