
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = $(".how__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = $(".how__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    tabName = '#'+tabName;
    $(tabName).get(0).style.display = "block";
    evt.currentTarget.className += " active";
}