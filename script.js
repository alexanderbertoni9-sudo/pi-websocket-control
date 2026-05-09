function webhook(){
    fetch("https://aspect-hay-preference-partial.trycloudflare.com",{
        method: "POST"
    });
    return 200;
}

function test(){
    now = new Date()
    alert("TEST SUCESSFULL: ["+ now.toLocaleTimeString()+"]")
}