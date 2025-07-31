const template = `
    
    <div class="nav-icons">
        <div class="icon-container">
            
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
