const template = `
    
    <div class="nav-icons">
        <div class="icon-container">
            <a href="/" aria-label="Home" class="header-jb">
                JB
            </a>

            <a href="resume.html" aria-label="Resume">
                <i class='far fa-file-alt'></i>
            </a>

            <a href="projects.html" aria-label="Projects">
                <i class='far fa-lightbulb'></i>
            </a>

            <a href="demo.html" aria-label="Demos">
                <i class="far fa-file-code"></i>
            </a>

            <a href="https://github.com/jlbeard84" aria-label="Github">
                <i class="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/joshua-beard-3087ab31/" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    </div>
    
`;

class HeaderComponent extends HTMLElement {

    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = template;
    }
}

customElements.define('header-component', HeaderComponent);
