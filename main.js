const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"!", "@", "#", "$", "%" ]
const specialChars = ["!", "@", "#", "$", "%"]
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const genEl = document.getElementById("generate-el")
const inputEl = document.getElementById("input-el")
genEl.addEventListener("click", generate);
let pass = [];

let randSpecialChars = specialChars[Math.floor(Math.random() * specialChars.length)]
let randNums = nums[Math.floor(Math.random() * nums.length)]

const table ={};
table['randSpecialChars'] = randSpecialChars;
table['randNums'] = randNums;

function generate(){
    for(let i=0; i<10 && i<chars.length; i++){
        pass[i] = chars[Math.floor(Math.random() * chars.length)];
        inputEl.value = pass.join('');
};

    for(let i=0; i<pass.length; i++){
        if(specialChars.includes(pass[i])){
            return
        }
        else if(nums.includes(pass[i])){
            return
        }
        else{
            if(pass.includes(table['randSpecialChars'])=== false){
            pass.pop();
            pass.push(table['randSpecialChars'])}
            else if(pass.includes(table['randNums']==false)){
            pass.pop();
            pass.push(table['randSpecialChars'])
            }
            
        }
    }
};

//hashmap use