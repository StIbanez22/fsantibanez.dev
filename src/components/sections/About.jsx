import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

 const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Typescript",
    "Next.js",
 ];

    const backendSkills = [
    "Node.js",
    "Firebase",
    "AWS",
    "Docker",
    "Python",
 ];

    return (
        <section 
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Frontend developer with a passion for crafting beautiful and functional web experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-cl p-6 hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4">Frontend</h3>
                     <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                        </span>
                        ))}
                     </div>
                    </div>
                
                    <div className="rounded-cl p-6 hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4">Backend</h3>
                     <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                        </span>
                        ))}
                     </div>
                    </div>
                </div>    
             </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4"> 📚 My Learning Journey </h3>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        <strong>Self-Taught Web Development</strong> - Continuous Learning
        <p className="text-sm text-gray-400 mt-1">
          Actively learning HTML, CSS, JavaScript, and modern frameworks like React through online courses, tutorials, and documentation.
        </p>
      </li>
      <li>
        <strong>Online Courses & Certifications:</strong>
        <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1 mt-2">
          <li>[Nombre del curso/Plataforma] - Ej. "The Complete JavaScript Course 2024: From Zero to Expert!" (Udemy)</li>
          <li>[Nombre del curso/Plataforma] - Ej. "React - The Complete Guide (incl Hooks, React Router, Redux)" (Academind/Udemy)</li>
          <li>[Nombre de la certificación, si tienes alguna] - Ej. FreeCodeCamp Responsive Web Design Certification</li>
        </ul>
      </li>
      <li>
        Relevant Skills Acquired: Responsive Design, API Integration, Version Control (Git), Problem Solving.
      </li>
    </ul>
  </div>
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4"> 💻 Personal Projects </h3>
    <div className="space-y-4 text-gray-300">
      <div>
        <h4 className="font-semibold">
          Project Name 1 (e.g., "E-commerce Store Front")
        </h4>
        <p>
          A brief description of your project. For example: "Developed a responsive e-commerce front-end using React and Tailwind CSS, featuring product listings, a shopping cart, and user authentication (mock)."
        </p>
        <p className="text-sm text-gray-400 mt-1">
          **Technologies used:** React, Tailwind CSS, [Other relevant tech like Firebase, REST APIs (mock), etc.]
          <a href="[Link al proyecto en vivo]" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">Live Demo</a> |
          <a href="[Link al repositorio de GitHub]" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">GitHub Repo</a>
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          Project Name 2 (e.g., "Interactive To-Do App")
        </h4>
        <p>
          Another brief description of your project. For example: "Built a dynamic to-do application with vanilla JavaScript, allowing users to add, edit, and delete tasks, with data persistence using local storage."
        </p>
        <p className="text-sm text-gray-400 mt-1">
          **Technologies used:** HTML, CSS, JavaScript, Local Storage
          <a href="[Link al proyecto en vivo]" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">Live Demo</a> |
          <a href="[Link al repositorio de GitHub]" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">GitHub Repo</a>
        </p>
      </div>

      <div>
        <h4 className="font-semibold">
          Project Name 3 (e.g., "Portfolio Website")
        </h4>
        <p>
          "This very portfolio website, designed and developed from scratch to showcase my skills and projects using modern web technologies."
        </p>
        <p className="text-sm text-gray-400 mt-1">
          **Technologies used:** Next.js, Tailwind CSS, Vercel (Deployment)
          <a href="[Link al repositorio de GitHub de tu portfolio]" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">GitHub Repo</a>
        </p>
      </div>

    </div>
  </div>
</div>              
            </div>
          </RevealOnScroll>
        </section>

    );
};
