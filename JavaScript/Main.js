document.getElementById("activeonload").click();
document.title = "Personal Website | Gitlab";
function navtwotab(evt, navtwotab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(navtwotab).style.display = "block";
    evt.currentTarget.className += " active";
    document.title = (navtwotab);
}
document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
function setname() {
    var setName = prompt("Enter Your Name", "");
    localStorage.setItem("SpiderGaminName", setName);
    document.getElementById("getname").innerHTML = localStorage.getItem("SpiderGaminName");
}