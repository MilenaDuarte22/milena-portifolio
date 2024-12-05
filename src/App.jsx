import { useState } from "react";
import "./App.css";
import About_me from "./components/About_me";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import workData from "./components/workData";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredWork, setFilteredWork] = useState(workData);

  const handleWorkfilter = (item) => {
    setActiveFilter(item);

    let filtered = [];

    if (item === "All") {
      filtered = workData;
    } else {
      filtered = workData.filter((workItem) => workItem.tag.includes(item));
    }

    setFilteredWork(filtered);
  };

  const work = filteredWork.map((item) => (
    <Work
      key={item.id}
      title={item.title}
      descript={item.descript}
      img={item.coverImg}
      tag={item.tag}
      technologies={item.technologies}
    />
  ));
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About_me />

      <Info />
      <Skills />

      <section className="portifolio__section" id="portifolio">
        <div className="portifolio__container">
          <h2 className="work__title">
            My Creative <span> Portfolio</span>
          </h2>
          <div className="work__filter">
            {["UX/UI", "Frontend", "Backend", "All"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleWorkfilter(item)}
                className={`work-filter__item app__flex p-text ${
                  activeFilter === item ? "active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="portifolio__items">{work}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
