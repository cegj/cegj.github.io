class PortfolioData{
  constructor(){
  }

  async getData(){
    const response = await fetch('/data/portfolio.json')
    this.data = await response.json()
    return
  }

  setProjects(){
    const elements = document.querySelectorAll('[data-ref="portfolio-items"]')
    elements.forEach((element) => {
      this.data.items.forEach((project) => {
        const divContainerHtml = document.createElement("div")
        divContainerHtml.setAttribute("class", "container")
        element.appendChild(divContainerHtml)
        const divContentHtml = document.createElement("div")
        divContentHtml.setAttribute("class", "portfolio-content")
        divContainerHtml.appendChild(divContentHtml)

        const imgHtml = document.createElement("img")
        imgHtml.setAttribute("class", "portfolio-img")
        imgHtml.setAttribute("src", project.img_url)
        divContentHtml.appendChild(imgHtml)

        const portfolioInfo = document.createElement("div")
        portfolioInfo.setAttribute("class", "portfolio-info")
        divContentHtml.appendChild(portfolioInfo)

        const h1TitleHtml = document.createElement("h1")
        h1TitleHtml.innerText = project.title
        portfolioInfo.appendChild(h1TitleHtml)

        const pDescriptionHtml = document.createElement("p")
        pDescriptionHtml.innerText = project.description
        portfolioInfo.appendChild(pDescriptionHtml)

        const labelsContainerHtml = document.createElement("div")
        labelsContainerHtml.setAttribute("class", "portfolio-labels")
        portfolioInfo.appendChild(labelsContainerHtml)

        project.labels.forEach((label) =>{
          const labelHtml = document.createElement("label")
          labelHtml.innerText = label
          labelsContainerHtml.appendChild(labelHtml)
        })

        const btnsContainerHtml = document.createElement("div")
        btnsContainerHtml.setAttribute("class", "portfolio-btns")
        portfolioInfo.appendChild(btnsContainerHtml)

        project.btns.forEach((btn) =>{
          const a = document.createElement("a")
          a.setAttribute("href", btn.url)
          a.setAttribute("target", "_blank")
          const i = document.createElement("i")
          i.setAttribute("class", btn.icon_class)
          const span = document.createElement("span")
          span.innerText = btn.title
          a.appendChild(i)
          a.appendChild(span)
          btnsContainerHtml.appendChild(a)
        })
      })
      })
  } 

  async init(){
    await this.getData()
    this.setProjects()
  }
}

const portfolioData = new PortfolioData();
portfolioData.init();