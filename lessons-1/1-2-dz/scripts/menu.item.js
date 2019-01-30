class MenuItem {
    constructor(href, title){
        this.href = href;
        this.title = title;
    }
    render(){
        return `<li><a href="${this.href}">${this.title}</a></li>`
    }
}

class SubMenu {
    constructor(href, title){
        this.href = href;
        this.title = title;
    }
    render(){
        return `<ul><li><a href="${this.href}">${this.title}</a></li></ul>`
    }
}