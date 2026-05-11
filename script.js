function webhook(){
    fetch("https://homeless-discussions-furnishings-additionally.trycloudflare.com/webhook", {
        method: "POST"
    });
}

function test(){
    now = new Date()
    alert("TEST SUCESSFULL: ["+ now.toLocaleTimeString()+"]")
}