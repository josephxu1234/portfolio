import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from 'react-simple-card';
import { projects } from '../config/ProjectDescriptions';

function Projects() {
    return (
        <div className="bg-gray-800">
        <div className="flex flex-col items-center">

            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Projects
          </h1>

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 p-10">
                {projects.map(
                    (project) => (
                        <Card>
                            <ImageHeader imageSrc={project.image} />
                            <CardHeader>{project.title}</CardHeader>
                            <CardBody>
                                <i>{project.subtitle}</i>
                                <p>{project.description}</p>
                            </CardBody>
                            <CardFooter>
                                <a href={project.link} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    View
                            </a>

                            </CardFooter>
                        </Card>
                    )


                )}

            </div>
        </div>
        </div>
    );
}

export default Projects;