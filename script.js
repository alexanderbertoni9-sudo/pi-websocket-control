function webhook(){
    fetch("https://printable-billy-soccer-connectivity.trycloudflare.com/webhook", {
        method: "POST"
    });
}

function test(){
    now = new Date()
    alert("TEST SUCESSFULL: ["+ now.toLocaleTimeString()+"]")
}