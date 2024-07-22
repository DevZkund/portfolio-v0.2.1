import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsList = querySnapshot.docs.map((doc) => doc.data());
        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="w-full pt-12 md:pt-24 lg:pt-48"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            My Projects
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
            Check out some of the projects I've worked on and the technologies I
            used to bring them to life.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="DBProjects"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="bg-background rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={project.imageURL}
                width="400"
                height="300"
                alt={project.title}
                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-300"
                style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 md:text-md">
                  {project.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 md:text-sm lg:text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
