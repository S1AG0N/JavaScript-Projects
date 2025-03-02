function personalDetails() {
    var Dict= {
        name: "Phillip",
        surname: "Ziwada",
        surname2: "Mangombe",
        DOB: 21/05/1993
    };
    //renamed the second username so as to have the other one displaying. 
    delete Dict.surname2;
    document.getElementById("Dictionary").innerHTML=Dict.surname;
}
