function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let diff = 0,
        age = 0;
    now = Date.now();
    function Take(now){
        this.now = now;
    }
    birthday = new Take(birthday);

    birthday = Date.parse(birthday.now);
    diff = now - birthday;
    age = (diff / 1000 / 60 / 60 / 24 / 30 / 12);
    if (age > 18){
        console.log("Совершеннолетний клиент");
    }
    else{
        console.log("Несовершеннолетний клиент");
    }
    return age;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    let sound = animal.sound,
        result;
    if (typeof animal === 'undefined'){
        result = null;
    }
    else{
        result = animal.sound;
    }
    return result;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}


function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let roundAverage,
        i = 0,
        mark = 0;
    while (i < marks.length ) {
        mark += parseInt( marks[i]);
        i++;
    }
/*    console.log("roundAverage: ", Math.floor(mark / marks.length) ,
        Math.ceil(mark / marks.length), Math.round(mark / marks.length));*/
    roundAverage = Math.round(mark / marks.length);

    return roundAverage;
}