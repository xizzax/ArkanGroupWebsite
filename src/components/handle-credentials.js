let username = "admin";
let password = "12345";

//export the following function
export  function change_username(u){
    username = u;

    console.log("changed");
    window.alert("Successfully changed credentials");
}

export function change_password(p){
    password = p;

    console.log("changed");
    window.alert("Successfully changed credentials");
}

