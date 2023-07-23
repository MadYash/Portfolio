import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    name: "EV Scooter Project",
    desc: "It is a website designed with vanila HTML, CSS And JavaScript. It was developed in intital days which has some really smooth transitions and good styling also responsive. It is build for stating some benefits of Ev Scooter as it is eco friendly and does not cause pollution",
    image: "/bg.jpg",
    gitHub: "https://github.com/MadYash/EV-Scooter-Project",
    link: "",
  },
  {
    name: "Todo APP",
    desc: "It is a Todo App which is made with Python (Flask) as a backend project. It is used to add a todo from any user without login and also do CRUD that is Create a todo edit a todo and delete title and description ",
    image: "/more.png",
    gitHub: "https://github.com/MadYash/Todo-App",
    link: "",
  },
];
const ProjectsSection = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
      <section id="projects">
        <h2 className=" text-center text-2xl my-10 ">
          Projects
          <hr className="w-6 h-1 mx-auto bg-teal-500 border-0 rounded" />{" "}
        </h2>{" "}
        <div className="flex flex-col space-y-28">
          {projects?.map((project, inx) => {
            return (
              <>
                <div key={inx}>
                  <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="md:w-1/2">
                      <Image
                        src={project?.image}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-75"
                        alt="project image"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                      <p>{project.desc}</p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.gitHub} target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-github hover:animate-bounce w-6 h-6 my-5"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                          </svg>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;
