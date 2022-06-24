const d1 = document.getElementById("day");
const m1 = document.getElementById("month");
const y1 = document.getElementById("year");
const button = document.getElementById("button");
const answer = document.getElementById("answer");

let date = new Date();
let d2 = date.getDate();
let m2 = date.getMonth();
let y2 = date.getFullYear();

// let d1=16;
// let m1=6;
// let y1=1999;

const ageCalculate = (d1,d2,m1,m2,y1,y2)=>{
    if(isNaN(d1) || isNaN(m1) || isNaN(y1)){
        return -1;
    }
    if(m1==2 && d1>29){
        return -2;
    }
    if(y1>y2 || y1<1000){
        return -1;
    }
    let year = y2-y1;
    let month;
    let day;
    if(m2>m1 || (m2==m1 && d2>d1)){
        month = m2-m1;
    }else{
        month = (12-m1)+m2;
        year--;
    }
    if(d2>=d1){
        day = d2-d1;
    }else{
        if(m1==2){
            day=(28-d1)+d2;
            month--;
        }else if(m1==1 || m1==3 || m1==5 || m1==7 || m1==8 || m1==10 || m1==12){
            day=(31-d1)+d2;
            month--;
        }else{
            day=(30-d1)+d2;
            month--;
        }
    }
    let answer = [day,month,year];
    return answer;
}

const ageCalculateFunc = ()=>{
    if(ageCalculate(d1.value,d2,m1.value,m2+1,y1.value,y2)==-1){
        answer.innerHTML = "Please select Date and Month and enter correct Birth Year";
    }else if(ageCalculate(d1.value,d2,m1.value,m2+1,y1.value,y2)==-2){
        answer.innerHTML = "Please enter correct date. February can have max 29 Days."
    }else{
        let result = ageCalculate(d1.value,d2,m1.value,m2+1,y1.value,y2);
        answer.innerHTML = "Your Age is "+ result[2]+" Years "+result[1]+" Months "+result[0]+" Days ";
    }
    // const htmldata = `<b>${result[1]}</b>`;
    // answer.insertAdjacentHTML("afterbegin",htmldata); 
}

button.addEventListener('click',ageCalculateFunc);


// console.log(ageCalculate(d1,d2,m1,m2,y1,y2));