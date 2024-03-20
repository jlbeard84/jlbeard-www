const template = `
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-icons">
            <a href="https://github.com/jlbeard84" aria-label="Github">
                <i class="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/joshua-beard-3087ab31/" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
            </div>
        </div>
    </nav>
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
