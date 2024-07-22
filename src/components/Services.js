import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchservices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const servicesList = querySnapshot.docs.map((doc) => doc.data());
        setServices(servicesList);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };

    fetchservices();
  }, []);
  return (
    <section
      id="service"
      className="w-full pt-12 md:pt-24 lg:pt-60"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Services
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
            I provide expert software development services, creating custom
            mobile and web applications tailored to your business needs.
          </p>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6"
          id="DBServices"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="bg-background rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={service.imageURL}
                width="400"
                height="300"
                alt={service.title}
                className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-300"
                style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 md:text-md">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 md:text-sm lg:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
