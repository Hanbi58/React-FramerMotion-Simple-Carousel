import "./App.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import images from "./images";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="App">
      <motion.div
        className="carousel"
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div
              className="item"
              key={image}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
