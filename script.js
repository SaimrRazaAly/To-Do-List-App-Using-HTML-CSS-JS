let input = document.getElementById('input');
// let btn = document.getElementById('btn');
let lsit = document.getElementById('list');
let array = [];

const obj = {
    add() {
        if (input.value) {
            array.push(input.value);
            input.value = ''
            // console.log(array)
        }
        else {
            alert("You Have not entered someting ")
        }

        this.addinglist()
    },
    addinglist() {

        lsit.innerHTML = '';
        array.forEach((value) => {
            list.innerHTML += `<li>${value}</li>`;
        })
    }


}

