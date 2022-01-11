$("#btnSend").click( function () {
    alert("Review Sent by: " + $("#txtName").val() +
        ", with " + $("#txtStars").val() +
        " stars given. \n " +
        "Explanation: " + $("#txtWhy").val());
    $("#picGame").fadeToggle();
})

