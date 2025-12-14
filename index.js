let fio = document.querySelector(".fio");
let telephone = document.querySelector(".tel");
let add = document.querySelector("#add");
let del = document.querySelector("#delete");
let inject = document.querySelector("#inject");
let clear = document.querySelector("#clear");
let date = new Date();

add.addEventListener("click", ()=>{
    if (fio.value.trim() != "" && telephone.value.trim() != "" && fio.value.length >= 2 && telephone.value.length == 11 && telephone.value[0]=="8") {
        window.localStorage.setItem(fio.value, [telephone.value, date.toLocaleDateString(), date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})]);
    }
});

inject.addEventListener("click", ()=>{
    if (localStorage.length != 0) {
        document.querySelector(".print").innerHTML = "";
        document.querySelector(".print").style.display = "flex";
        for (let i = 0; i<localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key).split(",");

            let q = document.createElement("div");
            q.className = "text__div";
            q.innerText = key+" "+value[0]+" "+value[1]+" "+value[2];
            document.querySelector(".print").append(q);
        }
    }
});

del.addEventListener("click", ()=>{
    if (confirm("Вы точно хотите очистить хранилище?")) {
        window.localStorage.clear();
        document.querySelector(".print").innerHTML = "";
        document.querySelector(".print").style.display = "none";
    }
});