//@flow
let projectData = [];
export const fetchProjects = () => {

    return JSON.parse(localStorage.getItem('projects') || this.state.projects);
}

export const setProjects = (projects: Array<void>) => {
    console.log(this.state)
    projectData.push(projects);
    localStorage.setItem('projects', JSON.stringify(projectData));
}