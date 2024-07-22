import React from 'react';

const About = () => {
  
  return (
    <section
      id="about"
      className="w-full pt-12 md:pt-24 lg:pt-60 bg-muted"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container px-4 md:px-4 grid lg:grid-cols-2 lg:gap-4 md:gap-8 md:grid-row-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter lg:text-5xl md:text-4xl">
            About Me
          </h2>
          <p className="max-w-[600px] text-muted-foreground text-sm md:text-md lg:text-lg">
            As a frontend and Flutter developer, I specialize in creating
            responsive and user-friendly web and mobile applications using
            the latest technologies and best practices. I'm passionate about
            clean code, efficient workflows, and delivering high-quality
            solutions.
          </p>
          <div className="flex gap-4">
            <a
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              href="./images/Resume.pdf"
              download
              rel="ugc"
            >
              Resume
            </a>
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              href="#contact"
              rel="ugc"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            className="bg-background rounded-lg shadow-lg mt-36 md:mt-36 lg:mt-0"
            data-aos="zoom-in"
            data-aos-duration="3000"
            style={{ position: 'relative' }}
          >
            <img
              src="./images/picr.png"
              width="400"
              height="300"
              alt="Kundan Kumar"
              className="w-full h-auto object-center"
              style={{
                aspectRatio: '300 / 300',
                objectFit: 'contain',
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }}
            />
            <div className="p-4 mt-8" style={{ paddingTop: '200px' }}>
              <h3 className="text-lg font-semibold">KUNDAN KUMAR</h3>
              <p className="text-muted-foreground">Bihar, India</p>
              <p className="text-muted-foreground">devzkund@gmail.com</p>
            </div>
          </div>
          <div
            className="bg-background rounded-lg shadow-lg mt-36 lg:mt-0"
            data-aos="zoom-in"
            data-aos-duration="3000"
            style={{ position: 'relative' }}
          >
            <img
              src="./images/graduation.png"
              width="400"
              height="300"
              alt="Master In Computer Application"
              className="w-full h-auto object-center"
              style={{
                aspectRatio: '300 / 300',
                objectFit: 'cover',
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }}
            />
            <div className="p-4 mt-8" style={{ paddingTop: '200px' }}>
              <h3 className="text-lg font-semibold">Master In Computer Application</h3>
              <p className="text-muted-foreground">Chandigarh University</p>
              <p className="text-muted-foreground">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
