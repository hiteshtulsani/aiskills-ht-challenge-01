function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var aboutContent = document.getElementById("aboutContent");
    var contactContent = document.getElementById("contactContent");
    member.style.color = "#fff";
    skills.style.color = "#000";
    projects.style.color = "#000";
    about.style.color = "#000";
    contact.style.color = "#000";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    aboutContent.style.display = "none";
    contactContent.style.display = "none";
}