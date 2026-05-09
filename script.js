function webhook(){
    fetch("https://surfaces-destinations-feed-shareware.trycloudflare.com/webhook", {
        method: "POST"
    });
}

function test(){
    now = new Date()
    alert("TEST SUCESSFULL: ["+ now.toLocaleTimeString()+"]")
}