import React from 'react'

function ProjectCard({
    projectHeading="Project heading",
    projectfront="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2dyYW1taW5nfGVufDB8fDB8fHww",
    aboutproject="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, asperiores",
    ProjectTech="HTML,CSS,JS"
}) {
    return (
        <div className='border-5 border-white h-10 w-5'>
            <h1>{projectHeading}</h1>
            <div>
                <img src={projectfront} alt="" />
            </div>
            <div>
                <p>{aboutproject}</p>
                <h3>{ProjectTech}</h3>
            </div>
            <div>
                <button>Project</button>
                <button>Code</button>
            </div>
        </div>
    )
}

export default ProjectCard
