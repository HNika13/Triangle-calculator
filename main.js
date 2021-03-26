function triangle1() {
    let a = Number(prompt("შეიყვანეთ A მნიშვნელობა:"));
    let b = Number(prompt("შეიყვანეთ B მნიშვნელობა:"));
    let c = Number(prompt("შეიყვანეთ C მნიშვნელობა:"));
    document.getElementById("outPutMain").innerHTML = "";
    if (a + b < c || a - b > c) {
        document.getElementById("outPutMain").innerHTML =
            "შეყვანილი მონაცამები არასწორია! 2 გვერდის ჯამი მეტი უნდა იყოს მე-3 ზე";
        document.getElementById("outPutP").innerHTML = "";
        document.getElementById("outPutS").innerHTML = "";
        document.getElementById("outPutH1").innerHTML = "";
        document.getElementById("outPutH2").innerHTML = "";
        document.getElementById("outPutH3").innerHTML = "";
        document.getElementById("outPutE1").innerHTML = "";
        document.getElementById("outPutE2").innerHTML = "";
        document.getElementById("outPutE3").innerHTML = "";
        document.getElementById("outPutB1").innerHTML = "";
        document.getElementById("outPutB2").innerHTML = "";
        document.getElementById("outPutB3").innerHTML = "";
        document.getElementById("outPutR1").innerHTML = "";
        document.getElementById("outPutR2").innerHTML = "";
    } else {
        if (a == 0 || b == 0 || c == 0) {
            document.getElementById("outPutP").innerHTML = "";
            document.getElementById("outPutS").innerHTML = "";
            document.getElementById("outPutH1").innerHTML = "";
            document.getElementById("outPutH2").innerHTML = "";
            document.getElementById("outPutH3").innerHTML = "";
            document.getElementById("outPutE1").innerHTML = "";
            document.getElementById("outPutE2").innerHTML = "";
            document.getElementById("outPutE3").innerHTML = "";
            document.getElementById("outPutB1").innerHTML = "";
            document.getElementById("outPutB2").innerHTML = "";
            document.getElementById("outPutB3").innerHTML = "";
            document.getElementById("outPutR1").innerHTML = "";
            document.getElementById("outPutR2").innerHTML = "";
            return (document.getElementById("outPutMain").innerHTML =
                "შეყვანილი მონაცამები არასწორია! 2 გვერდის ჯამი მეტი უნდა იყოს მე-3 ზე");
        }
        let p = (a + b + c) / 2;
        let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        let h1 = (2 * s) / a;
        let h2 = (2 * s) / b;
        let h3 = (2 * s) / c;
        let e1 = Math.sqrt(2 * a * a + 2 * b * b - c * c) / 2;
        let e2 = Math.sqrt(2 * b * b + 2 * c * c - b * b) / 2;
        let e3 = Math.sqrt(2 * a * a + 2 * c * c - b * b) / 2;
        let B1 = Math.sqrt(a * b - (a * b * c * c) / (a * a + b * b + 2 * a * b));
        let B2 = Math.sqrt(b * c - (b * c * a * a) / (b * b + c * c + 2 * b * c));
        let B3 = Math.sqrt(a * c - (a * c * b * b) / (a * a + c * c + 2 * a * c));
        let R = (a * b * c) / (4 * s);
        let r = s / p;
        document.getElementById("outPutP").innerHTML = `${p}` * 2;
        document.getElementById("outPutS").innerHTML = `${s}`;
        document.getElementById("outPutH1").innerHTML = `${h1}`;
        document.getElementById("outPutH2").innerHTML = `${h2}`;
        document.getElementById("outPutH3").innerHTML = `${h3}`;
        document.getElementById("outPutE1").innerHTML = `${e1}`;
        document.getElementById("outPutE2").innerHTML = `${e2}`;
        document.getElementById("outPutE3").innerHTML = `${e3}`;
        document.getElementById("outPutB1").innerHTML = `${B1}`;
        document.getElementById("outPutB2").innerHTML = `${B2}`;
        document.getElementById("outPutB3").innerHTML = `${B3}`;
        document.getElementById("outPutR1").innerHTML = `${R}`;
        document.getElementById("outPutR2").innerHTML = `${r}`;
    }
}

function triangle2() {
    document.getElementById("outPutMain").innerHTML = "";
    let a = Number(prompt("შეიყვანეთ A მნიშვნელობა:"));
    let b = Number(prompt("შეიყვანეთ B მნიშვნელობა:"));
    let C = Number(prompt("შეიყვანეთ C მნიშვნელობა:"));
    if (C >= 180) {
        return (document.getElementById("outPutMain").innerHTML =
            "შეყვანილი მონაცამები არასწორია! კუთხე უნდა იყოს 180_ზე ნაკლები");
    } else {
        let deg = Math.cos((Math.PI / 180) * C);
        let c = Math.sqrt(a * a + b * b - 2 * a * b * deg);
        document.getElementById("outPutMain").innerHTML = "";
        if (a + b < c || a - b > c) {
            document.getElementById("outPutMain").innerHTML =
                "შეყვანილი მონაცამები არასწორია! 2 გვერდის ჯამი მეტი უნდა იყოს მე-3 ზე";
            document.getElementById("outPutSide").innerHTML = "";
            document.getElementById("outPutSide1").innerHTML = "";
            document.getElementById("outPutP").innerHTML = "";
            document.getElementById("outPutS").innerHTML = "";
            document.getElementById("outPutH1").innerHTML = "";
            document.getElementById("outPutH2").innerHTML = "";
            document.getElementById("outPutH3").innerHTML = "";
            document.getElementById("outPutE1").innerHTML = "";
            document.getElementById("outPutE2").innerHTML = "";
            document.getElementById("outPutE3").innerHTML = "";
            document.getElementById("outPutB1").innerHTML = "";
            document.getElementById("outPutB2").innerHTML = "";
            document.getElementById("outPutB3").innerHTML = "";
            document.getElementById("outPutR1").innerHTML = "";
            document.getElementById("outPutR2").innerHTML = "";
        } else {
            if (a == 0 || b == 0 || c == 0) {
                document.getElementById("outPutSide").innerHTML = "";
                document.getElementById("outPutSide1").innerHTML = "";
                document.getElementById("outPutP").innerHTML = "";
                document.getElementById("outPutS").innerHTML = "";
                document.getElementById("outPutH1").innerHTML = "";
                document.getElementById("outPutH2").innerHTML = "";
                document.getElementById("outPutH3").innerHTML = "";
                document.getElementById("outPutE1").innerHTML = "";
                document.getElementById("outPutE2").innerHTML = "";
                document.getElementById("outPutE3").innerHTML = "";
                document.getElementById("outPutB1").innerHTML = "";
                document.getElementById("outPutB2").innerHTML = "";
                document.getElementById("outPutB3").innerHTML = "";
                document.getElementById("outPutR1").innerHTML = "";
                document.getElementById("outPutR2").innerHTML = "";
                return (document.getElementById("outPutMain").innerHTML =
                    "შეყვანილი მონაცამები არასწორია! 2 გვერდის ჯამი მეტი უნდა იყოს მე-3 ზე");
            }
            let p = (a + b + c) / 2;
            let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            let h1 = (2 * s) / a;
            let h2 = (2 * s) / b;
            let h3 = (2 * s) / c;
            let e1 = Math.sqrt(2 * a * a + 2 * b * b - c * c) / 2;
            let e2 = Math.sqrt(2 * b * b + 2 * c * c - b * b) / 2;
            let e3 = Math.sqrt(2 * a * a + 2 * c * c - b * b) / 2;
            let B1 = Math.sqrt(a * b - (a * b * c * c) / (a * a + b * b + 2 * a * b));
            let B2 = Math.sqrt(b * c - (b * c * a * a) / (b * b + c * c + 2 * b * c));
            let B3 = Math.sqrt(a * c - (a * c * b * b) / (a * a + c * c + 2 * a * c));
            let R = (a * b * c) / (4 * s);
            let r = s / p;
            document.getElementById(
                "outPutSide"
            ).innerHTML = `მიღებული C გვერდი = ${Math.ceil(c)}`;
            document.getElementById("outPutSide1").innerHTML = "";
            document.getElementById("outPutP").innerHTML = `${p}` * 2;
            document.getElementById("outPutS").innerHTML = `${s}`;
            document.getElementById("outPutH1").innerHTML = `${h1}`;
            document.getElementById("outPutH2").innerHTML = `${h2}`;
            document.getElementById("outPutH3").innerHTML = `${h3}`;
            document.getElementById("outPutE1").innerHTML = `${e1}`;
            document.getElementById("outPutE2").innerHTML = `${e2}`;
            document.getElementById("outPutE3").innerHTML = `${e3}`;
            document.getElementById("outPutB1").innerHTML = `${B1}`;
            document.getElementById("outPutB2").innerHTML = `${B2}`;
            document.getElementById("outPutB3").innerHTML = `${B3}`;
            document.getElementById("outPutR1").innerHTML = `${R}`;
            document.getElementById("outPutR2").innerHTML = `${r}`;
        }
    }
}

function triangle3() {
    document.getElementById("outPutMain").innerHTML = "";
    let a = Number(prompt("შეიყვანეთ A მნიშვნელობა:"));
    let B = Number(prompt("შეიყვანეთ B მნიშვნელობა:"));
    let C = Number(prompt("შეიყვანეთ C მნიშვნელობა:"));
    if (B + C >= 180) {
        return (document.getElementById("outPutMain").innerHTML =
            "შეყვანილი მონაცამები არასწორია! 2 კუთხის ჯამი უნდა იყოს 180_ზე ნაკლები.");
    } else {
        let deg = Math.cos((Math.PI / 180) * C);
        let deg1 = Math.sin((Math.PI / 180) * B);
        let deg2 = Math.sin((Math.PI / 180) * (B + C));
        console.log("sinB=", deg1);
        let b = (a * deg1) / deg2;
        console.log("b", b);
        let c = Math.sqrt(a * a + b * b - 2 * a * b * deg);
        document.getElementById("outPutMain").innerHTML = "";
        if (a + b < c || a - b > c) {
            document.getElementById("outPutMain").innerHTML =
                "შეყვანილი მონაცამები არასწორია! 2 გვერდის ჯამი მეტი უნდა იყოს მე-3 ზე";
            document.getElementById("outPutSide").innerHTML = "";
            document.getElementById("outPutSide1").innerHTML = "";
            document.getElementById("outPutP").innerHTML = "";
            document.getElementById("outPutS").innerHTML = "";
            document.getElementById("outPutH1").innerHTML = "";
            document.getElementById("outPutH2").innerHTML = "";
            document.getElementById("outPutH3").innerHTML = "";
            document.getElementById("outPutE1").innerHTML = "";
            document.getElementById("outPutE2").innerHTML = "";
            document.getElementById("outPutE3").innerHTML = "";
            document.getElementById("outPutB1").innerHTML = "";
            document.getElementById("outPutB2").innerHTML = "";
            document.getElementById("outPutB3").innerHTML = "";
            document.getElementById("outPutR1").innerHTML = "";
            document.getElementById("outPutR2").innerHTML = "";
        } else {
            if (a == 0 || b == 0 || c == 0) {
                document.getElementById("outPutSide").innerHTML = "";
                document.getElementById("outPutSide1").innerHTML = "";
                document.getElementById("outPutP").innerHTML = "";
                document.getElementById("outPutS").innerHTML = "";
                document.getElementById("outPutH1").innerHTML = "";
                document.getElementById("outPutH2").innerHTML = "";
                document.getElementById("outPutH3").innerHTML = "";
                document.getElementById("outPutE1").innerHTML = "";
                document.getElementById("outPutE2").innerHTML = "";
                document.getElementById("outPutE3").innerHTML = "";
                document.getElementById("outPutB1").innerHTML = "";
                document.getElementById("outPutB2").innerHTML = "";
                document.getElementById("outPutB3").innerHTML = "";
                document.getElementById("outPutR1").innerHTML = "";
                document.getElementById("outPutR2").innerHTML = "";
                return (document.getElementById("outPutMain").innerHTML =
                    "შეყვანილი მონაცამები არასწორია! 2 გვერდის ჯამი მეტი უნდა იყოს მე-3 ზე");
            }
            let p = (a + b + c) / 2;
            let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            let h1 = (2 * s) / a;
            let h2 = (2 * s) / b;
            let h3 = (2 * s) / c;
            let e1 = Math.sqrt(2 * a * a + 2 * b * b - c * c) / 2;
            let e2 = Math.sqrt(2 * b * b + 2 * c * c - b * b) / 2;
            let e3 = Math.sqrt(2 * a * a + 2 * c * c - b * b) / 2;
            let B1 = Math.sqrt(a * b - (a * b * c * c) / (a * a + b * b + 2 * a * b));
            let B2 = Math.sqrt(b * c - (b * c * a * a) / (b * b + c * c + 2 * b * c));
            let B3 = Math.sqrt(a * c - (a * c * b * b) / (a * a + c * c + 2 * a * c));
            let R = (a * b * c) / (4 * s);
            let r = s / p;
            document.getElementById(
                "outPutSide"
            ).innerHTML = `მიღებული C გვერდი = ${Math.ceil(c)}`;
            document.getElementById(
                "outPutSide1"
            ).innerHTML = `მიღებული B გვერდი = ${Math.ceil(b)}`;
            document.getElementById("outPutP").innerHTML = `${p}` * 2;
            document.getElementById("outPutS").innerHTML = `${s}`;
            document.getElementById("outPutH1").innerHTML = `${h1}`;
            document.getElementById("outPutH2").innerHTML = `${h2}`;
            document.getElementById("outPutH3").innerHTML = `${h3}`;
            document.getElementById("outPutE1").innerHTML = `${e1}`;
            document.getElementById("outPutE2").innerHTML = `${e2}`;
            document.getElementById("outPutE3").innerHTML = `${e3}`;
            document.getElementById("outPutB1").innerHTML = `${B1}`;
            document.getElementById("outPutB2").innerHTML = `${B2}`;
            document.getElementById("outPutB3").innerHTML = `${B3}`;
            document.getElementById("outPutR1").innerHTML = `${R}`;
            document.getElementById("outPutR2").innerHTML = `${r}`;
        }
    }
}

function triangle(value) {
    let choose = 0;
    if (value == "varianti1") choose = 1;
    if (value == "varianti2") choose = 2;
    if (value == "varianti3") choose = 3;
    switch (choose) {
        case 1:
            document.getElementById("choosenVarianti").innerHTML =
                "თქვენ აირჩიეთ ვარიანტი 1 სადაც არის , 3 გვერდი";
            document.getElementById("outPutSide").innerHTML = "";
            triangle1();
            break;
        case 2:
            document.getElementById("choosenVarianti").innerHTML =
                "თქვენ აირჩიეთ ვარიანტი 2 სადაც არის , 2 გვერდი და 1 კუთხე";
            document.getElementById("outPutSide").innerHTML = "";
            triangle2();
            break;
        case 3:
            document.getElementById("choosenVarianti").innerHTML =
                "თქვენ აირჩიეთ ვარიანტი 3 სადაც არის , 1 გვერდი და 2 კუთხე";
            document.getElementById("outPutSide").innerHTML = "";
            triangle3();
            break;
        default:
            document.getElementById("choosenVarianti").innerHTML =
                "მიმართეთ კოდის ავტორს , ტექნიკური შეცდომა";
            break;
    }
}
