function webhook(){
    fetch("https://north-substitute-manager-zus.trycloudflare.com/webhook", {
        method: "POST"
    });
}

function test(){
    now = new Date()
    alert("TEST SUCESSFULL: ["+ now.toLocaleTimeString()+"]")
}