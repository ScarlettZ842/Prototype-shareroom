function showUoAContacts(){
    var coll = document.getElementsByClassName("uoa-group");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

function showCanvasContacts(){
    var coll = document.getElementsByClassName("canvas-group");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

function shareFile(buttonName){
    var modal = document.getElementById("myShareModal");

    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closeModal(modalId, spanName){
    var modal = document.getElementById(modalId);

    modal.style.display = "none";
}

function confirmShare(){
    // close the current modal
    var modal1 = document.getElementById("myShareModal");

    modal1.style.display = "none";

    // open the successful modal
    var modal2 = document.getElementById("mySuccessfulModal");
    console.log(modal2);

    modal2.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
}