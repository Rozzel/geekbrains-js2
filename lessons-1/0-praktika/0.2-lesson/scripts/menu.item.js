class MenuItem {
    constructor(href, title){
        this.href = href;
        title.title = title;
    }
    render(){
        return `<li><a href="${this.href}">${this.title}</a></li>`
    }
}