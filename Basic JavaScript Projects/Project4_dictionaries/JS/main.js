function personalDetails() {
    var Dict= {
        name: "Phillip",
        surname: "Ziwada",
        surname2: "Mangombe",
        DOB: 21/05/1993
    };
    delete Dict.surname2;
    document.getElementById("Dictionary").innerHTML=Dict.surname;
}
