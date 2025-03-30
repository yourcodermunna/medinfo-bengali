function openChatbot() {
    alert("চ্যাটবট শীঘ্রই উপলব্ধ হবে!");
}

function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

}
