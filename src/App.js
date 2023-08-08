import './App.css';
import ReactLogo from './React-icon.png';
import MusicLogo from './music-logo.png';
import {useState} from 'react';
import Introduction from "./components/Introduction/Introduction.js";
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion';

function App() {

  const [isShownIntro, setIsShownIntro] = useState(true);
  const [isShownWeb, setIsShownWeb] = useState(false);
  const [isShownAI, setIsShownAI] = useState(false);

  const handleClick = elementNum => {

    setIsShownIntro(elementNum === 0 ? true : false)
    setIsShownWeb(elementNum === 1 ? true : false)
    setIsShownAI(elementNum === 2 ? true : false)

  }


  return (
    <div>
      <div className="App">
      <div className="field-nav-container">

        <div className="field-nav-button" onClick={() => handleClick(0)}>
          <div>Introduction</div>
        </div>

        <div className="field-nav-button" onClick={() => handleClick(1)}>
          <div>Web Development</div>
        </div>

        <div className="field-nav-button" onClick={() => handleClick(2)}>
          <div>Machine Learning</div>
        </div>

        </div>
        
        <AnimatePresence exitBeforeEnter>

        {/* HERE STARTS INTRODUCTION BLOCK */}

          {isShownIntro && 
            <motion.header 
              className="App-header"
              key="intro"
              initial = {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              exit = {{ 
                opacity: 0,
                transition: {duration:0.5, delay: 0}
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              >
              
              <Introduction />
              
            </motion.header>
          }

        {/* HERE STARTS WEB DEV BLOCK */}

          {isShownWeb &&
              <motion.header 
              className="App-header App-header-2"
              key="web"
              initial = {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              exit = {{ 
                opacity: 0,
                transition: {duration:0.5, delay: 0}
               }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              >
                <motion.div
                className="cardlist-web"
                >

                <motion.div
                 className="card-web-main"
                 initial = {{ opacity: 0, x: 300 }}
                 animate = {{ opacity: 1, x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.5,
                  } }}
                  
                  whileHover={{ scale: 1.2,
                    transition: {
                      duration: 0.2,
                      delay: 0
                    } }}
                 >

                  <motion.div
                  initial = {{ opacity: 0, y: 100 }}
                  animate = {{ opacity: 1, y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 1.4,
                    } }}
                  
                  >
                  <img className = "logo-image-web" src={MusicLogo} alt="Music"></img>
                    <div className = "logo-subtext">SoundFlow</div>
                  </motion.div>

                </motion.div>

                <motion.div
                 className="card-web-main"
                 initial = {{ opacity: 0, x: 300 }}
                 animate = {{ opacity: 1, x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.7,
                  } }}
                 
                  whileHover={{ scale: 1.2,
                    transition: {
                      duration: 0.2,
                      delay: 0
                    } }}
                 >

                  <motion.div
                  initial = {{ opacity: 0, y: 100 }}
                  animate = {{ opacity: 1, y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 1.6,
                    } }}
                  
                  >
                    <img className = "logo-image-web" src={ReactLogo} alt="React"></img>
                      <div className="logo-subtext">React Code Editor</div>
                  </motion.div>

                </motion.div>

                <motion.div 
                  className="card-web-main"
                  initial = {{ opacity: 0, x: 300 }}
                animate = {{ opacity: 1, x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.9,
                  } }}
                  
                  whileHover={{ scale: 1.2,
                    transition: {
                      duration: 0.2,
                      delay: 0
                    } }}
                  >

                  <motion.div
                  initial = {{ opacity: 0, y: 100 }}
                  animate = {{ opacity: 1, y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 1.8,
                    } }}
                  
                 >
                    Placeholder
                  </motion.div>

                </motion.div>

              </motion.div>
            </motion.header>
            }

        {/* HERE STARTS ML BLOCK */}

          {isShownAI &&
          <motion.header 
            className="App-header App-header-3"
            key="ai"
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            exit = {{ 
              opacity: 0,
              transition: {duration:0.5, delay: 0}
             }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            >
              <motion.div
                className="cardlist-ml"
                >

                <motion.div
                 className="card-ml-main"
                 initial = {{ opacity: 0, x: 300 }}
                 animate = {{ opacity: 1, x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.5,
                  } }}
                  
                  whileHover={{ scale: 1.2,
                    transition: {
                      duration: 0.2,
                      delay: 0
                    } }}
                 >

                  <motion.div
                  initial = {{ opacity: 0, y: 100 }}
                  animate = {{ opacity: 1, y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 1.4,
                    } }}
                  
                  >
                    Test 1
                  </motion.div>

                </motion.div>

                <motion.div
                 className="card-ml-main"
                 initial = {{ opacity: 0, x: 300 }}
                 animate = {{ opacity: 1, x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.7,
                  } }}
                 
                  whileHover={{ scale: 1.2,
                    transition: {
                      duration: 0.2,
                      delay: 0
                    } }}
                 >

                  <motion.div
                  initial = {{ opacity: 0, y: 100 }}
                  animate = {{ opacity: 1, y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 1.6,
                    } }}
                  
                  >
                    Test 2
                  </motion.div>

                </motion.div>

                <motion.div 
                  className="card-ml-main"
                  initial = {{ opacity: 0, x: 300 }}
                animate = {{ opacity: 1, x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.9,
                  } }}
                  
                  whileHover={{ scale: 1.2,
                    transition: {
                      duration: 0.2,
                      delay: 0
                    } }}
                  >

                  <motion.div
                  initial = {{ opacity: 0, y: 100 }}
                  animate = {{ opacity: 1, y: 0,
                    transition: {
                      duration: 0.6,
                      delay: 1.8,
                    } }}
                  
                 >
                    Test 3
                  </motion.div>

                </motion.div>

              </motion.div>

            
            
          </motion.header>
          }

        </AnimatePresence>

      </div>
    </div>
    
  );
}

export default App;
