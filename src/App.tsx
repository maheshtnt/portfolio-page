import { useEffect, useState } from 'react';
import './App.css';
import githubIcon from '@/assets/githubIconWhite.svg';
import linkedinIcon from '@/assets/linkedinIconWhite.svg';
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



function App() {
  const [count, setCount] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  
  return (
    <>
      <div className="App content-center h-screen">
        <div className="flex justify-center flex-col">
          <div className="justify-center">
            <div className="h-[20vh]">
            </div>
            <div className="flex flex-col justify-center">
              <div className="Introduction text-left text-5xl">
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
                <img src={githubIcon} />
                <img src={linkedinIcon} />
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
              Shipped an in-house investor–fund portal (React, Node, REST) in collaboration with cross-functional teams, reducing user load times by 75%. 
              Built an S3→OutSystems ETL powered by SQS, cutting data processing time by 3×. 
              Deployed containerized AWS Lambda to trigger investor-data workflows on database events and notify users via SNS. 
              Optimized complex SQL (joins, window functions, subqueries) and streamlined the S3→Lambda data path, reducing migration time by 30%. 
            </div>
          </div>
          <div className="CarouselDiv text-left mt-[5rem]">
            <div className="font-bold text-4xl mb-[1rem]">
              Projects
            </div>
          <Carousel className="items-center px-[3rem]" setApi={setApi}>
            <CarouselContent className="h-[20rem]">
              <CarouselItem className="flex h-[20rem] items-center justify-center"><div className="bg-background text-foreground flex items-center justify-center flex-col gap-6 rounded-xl shadow-sm size-8/10"> <div>1</div> </div></CarouselItem>
              <CarouselItem className="flex h-[20rem] items-center justify-center"><div className="bg-background text-foreground flex items-center justify-center rounded-xl size-8/10"><div>2</div></div></CarouselItem>
              <CarouselItem className="flex h-[20rem] items-center justify-center"><div className="bg-background text-foreground flex items-center justify-center rounded-xl size-8/10"><div>3</div></div></CarouselItem>
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
    </>
  )
}

export default App
