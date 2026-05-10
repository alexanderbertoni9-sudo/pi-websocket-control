function webhook(){
    fetch("https://creator-auctions-luggage-eva.trycloudflare.com/webhook", {
        method: "POST"
    });
}

function test(){
    now = new Date()
    alert("TEST SUCESSFULL: ["+ now.toLocaleTimeString()+"]")
}