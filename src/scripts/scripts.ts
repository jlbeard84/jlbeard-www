import * as Turbo from "@hotwired/turbo"

if (document != null) {
    const element = document.getElementById('resume-card');
    
    if (element != null) {
        element.onclick = function(e){
            Turbo.visit("/resume.html");
        }
    }
}
