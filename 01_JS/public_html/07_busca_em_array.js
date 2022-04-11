var jonas = {
    nome : "Jonas Bloch",
    empresa: "TV Manchete"
};

var david = {
    nome : "David",
    empresa : "Umbler"
};

var erik = {
    nome : "Erik Fig",
    empresa : "Udemy"
};

var users = [jonas, david, erik];

var usuario = users.find(user => user.nome === "Jonas Bloch");

console.log(usuario);

