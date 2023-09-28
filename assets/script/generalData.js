class GeneralData{
  constructor(){
  }

  async getData(){
    const generalDataResponse = await fetch('/data/general.json')
    this.generalData = await generalDataResponse.json()
    return
  }

  setName(){
    const elements = document.querySelectorAll('[data-ref="name"]')
    elements.forEach((element) => {
      element.innerText = this.generalData.name
    })
  }

  setDescription(){
    const elements = document.querySelectorAll('[data-ref="description"]')
    elements.forEach((element) => {
      element.innerText = this.generalData.description
    })
  }

  setAvatar(){
    const elements = document.querySelectorAll('[data-ref="avatar"]')
    elements.forEach((element) => {
      element.src = this.generalData.avatar_url
      element.alt = this.generalData.name
    })
  }

  setContactList(){
    const elements = document.querySelectorAll('[data-ref="contact-list"]')
    elements.forEach((element) => {
      const ul = element.querySelector("ul")
      this.generalData.contact.forEach((contact) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        if (contact.url) a.setAttribute('href', contact.url)
        const i = document.createElement('i')
        i.setAttribute('class', contact.icon_class)
        const span = document.createElement('span')
        span.innerText = contact.title
        a.appendChild(i)
        a.appendChild(span)
        li.appendChild(a)
        ul.appendChild(li)
      })
      })
    }

  async init(){
    await this.getData()
    this.setName()
    this.setDescription()
    this.setAvatar()
    this.setContactList()
  }
}

const generalData = new GeneralData();
generalData.init();