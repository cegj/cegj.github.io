class ResumeData{
  constructor(){
  }

  async getData(){
    const response = await fetch('/data/resume.json')
    this.data = await response.json()
    return
  }

  setPresentation(){
    const elements = document.querySelectorAll('[data-ref="presentation"]')
    elements.forEach((element) => {
      const p = element.querySelector("p")
      p.innerText = this.data.presentation
    })
  }

  setFormalEducation(){
    const elements = document.querySelectorAll('[data-ref="education-formal"]')
    elements.forEach((element) => {
      this.data.education.formal.forEach((formalEducation) => {
        const divContainerHtml = document.createElement("div")
        divContainerHtml.setAttribute("class", "entry-container")
        const divTitleHtml = document.createElement("div")
        divTitleHtml.setAttribute("class", "entry-title")
        divContainerHtml.appendChild(divTitleHtml)
        const h3TitleHtml = document.createElement("h3")
        h3TitleHtml.innerText = formalEducation.title
        divTitleHtml.appendChild(h3TitleHtml)
        formalEducation.labels.forEach((label) =>{
          const labelHtml = document.createElement("label")
          labelHtml.innerText = label
          divTitleHtml.appendChild(labelHtml)
        })
        const pDateHtml = document.createElement("p")
        pDateHtml.setAttribute("class", "date college")
        pDateHtml.innerText = formalEducation.date
        divContainerHtml.appendChild(pDateHtml)
        const pInstitutionHtml = document.createElement("p")
        pInstitutionHtml.setAttribute("class", "institution college")
        pInstitutionHtml.innerText = formalEducation.institution
        divContainerHtml.appendChild(pInstitutionHtml)
        const pDescriptionHtml = document.createElement("p")
        pDescriptionHtml.setAttribute("class", "entry-description")
        pDescriptionHtml.innerText = formalEducation.description
        divContainerHtml.appendChild(pDescriptionHtml)
        element.appendChild(divContainerHtml)
      })
      })
  }

  setProjects(){
    const elements = document.querySelectorAll('[data-ref="projects"]')
    elements.forEach((element) => {
      this.data.projects.forEach((project) => {
        const divContainerHtml = document.createElement("div")
        divContainerHtml.setAttribute("class", "entry-container")
        const divTitleHtml = document.createElement("div")
        divTitleHtml.setAttribute("class", "entry-title")
        divContainerHtml.appendChild(divTitleHtml)
        const h3TitleHtml = document.createElement("h3")
        h3TitleHtml.innerText = project.title
        divTitleHtml.appendChild(h3TitleHtml)
        project.labels.forEach((label) =>{
          const labelHtml = document.createElement("label")
          labelHtml.innerText = label
          divTitleHtml.appendChild(labelHtml)
        })
        const pDateHtml = document.createElement("p")
        pDateHtml.setAttribute("class", "date")
        pDateHtml.innerText = project.date
        divContainerHtml.appendChild(pDateHtml)
        const pDescriptionHtml = document.createElement("p")
        pDescriptionHtml.setAttribute("class", "entry-description")
        pDescriptionHtml.innerText = project.description
        divContainerHtml.appendChild(pDescriptionHtml)
        element.appendChild(divContainerHtml)
      })
      })
  } 

  setExperiences(){
    const elements = document.querySelectorAll('[data-ref="experiences"]')
    elements.forEach((element) => {
      this.data.experiences.forEach((experience) => {
        const divContainerHtml = document.createElement("div")
        divContainerHtml.setAttribute("class", "entry-container")
        const divTitleHtml = document.createElement("div")
        divTitleHtml.setAttribute("class", "entry-title")
        divContainerHtml.appendChild(divTitleHtml)
        const h3TitleHtml = document.createElement("h3")
        h3TitleHtml.innerText = experience.title
        divTitleHtml.appendChild(h3TitleHtml)
        experience.labels.forEach((label) =>{
          const labelHtml = document.createElement("label")
          labelHtml.innerText = label
          divTitleHtml.appendChild(labelHtml)
        })
        const pDateHtml = document.createElement("p")
        pDateHtml.setAttribute("class", "date college")
        pDateHtml.innerText = experience.date
        divContainerHtml.appendChild(pDateHtml)
        const pInstitutionHtml = document.createElement("p")
        pInstitutionHtml.setAttribute("class", "institution college")
        pInstitutionHtml.innerText = experience.company
        divContainerHtml.appendChild(pInstitutionHtml)
        const pDescriptionHtml = document.createElement("p")
        pDescriptionHtml.setAttribute("class", "entry-description")
        pDescriptionHtml.innerText = experience.description
        divContainerHtml.appendChild(pDescriptionHtml)
        element.appendChild(divContainerHtml)
      })
      })
  }  

  setQualifications(){
    const elements = document.querySelectorAll('[data-ref="qualifications"]')
    elements.forEach((element) => {
      this.data.education.qualifications.forEach((qualification) => {
        const divContainerHtml = document.createElement("div")
        divContainerHtml.setAttribute("class", "entry-container one-line")
        const divTitleHtml = document.createElement("div")
        divTitleHtml.setAttribute("class", "entry-title")
        divContainerHtml.appendChild(divTitleHtml)
        const h3TitleHtml = document.createElement("h3")
        h3TitleHtml.innerText = qualification.title
        divTitleHtml.appendChild(h3TitleHtml)
        qualification.labels.forEach((label) =>{
          const labelHtml = document.createElement("label")
          labelHtml.innerText = label
          divTitleHtml.appendChild(labelHtml)
        })
        const pHoursHtml = document.createElement("p")
        pHoursHtml.setAttribute("class", "hours")
        pHoursHtml.innerText = qualification.hours
        divTitleHtml.appendChild(pHoursHtml)
        const pDateHtml = document.createElement("p")
        pDateHtml.setAttribute("class", "date")
        pDateHtml.innerText = qualification.date
        divTitleHtml.appendChild(pDateHtml)
        const pInstitutionHtml = document.createElement("p")
        pInstitutionHtml.setAttribute("class", "institution")
        pInstitutionHtml.innerText = qualification.institution
        divTitleHtml.appendChild(pInstitutionHtml)
        element.appendChild(divContainerHtml)
      })
      })
  } 
  
  setLanguages(){
    const elements = document.querySelectorAll('[data-ref="languages"]')
    elements.forEach((element) => {
      const grid = document.createElement("div")
      grid.setAttribute("class", "grid-3")
      this.data.languages.forEach((language) => {
        const divContainerHtml = document.createElement("div")
        divContainerHtml.setAttribute("class", "entry-container")
        const divTitleHtml = document.createElement("div")
        divTitleHtml.setAttribute("class", "entry-title")
        divContainerHtml.appendChild(divTitleHtml)
        const h3TitleHtml = document.createElement("h3")
        h3TitleHtml.innerText = language.title
        divTitleHtml.appendChild(h3TitleHtml)
        language.labels.forEach((label) =>{
          const labelHtml = document.createElement("label")
          labelHtml.innerText = label
          divTitleHtml.appendChild(labelHtml)
        })
        const pDescriptionHtml = document.createElement("p")
        pDescriptionHtml.setAttribute("class", "entry-description")
        pDescriptionHtml.innerText = language.description
        divContainerHtml.appendChild(pDescriptionHtml)
        grid.appendChild(divContainerHtml)
      })
      element.appendChild(grid)
      })
  }

  setSkills(){
    const elements = document.querySelectorAll('[data-ref="skills"]')
    elements.forEach((element) => {
      const divContainerHtml = document.createElement("div")
      this.data.skills.forEach((skill) => {
        const labelHtml = document.createElement("label")
        labelHtml.innerText = skill
        divContainerHtml.appendChild(labelHtml)
      })
      element.appendChild(divContainerHtml)
    })
  }


  async init(){
    await this.getData()
    this.setPresentation()
    this.setFormalEducation()
    this.setProjects()
    this.setExperiences()
    this.setQualifications()
    this.setLanguages()
    this.setSkills()

  }
}

const resumeData = new ResumeData();
resumeData.init();