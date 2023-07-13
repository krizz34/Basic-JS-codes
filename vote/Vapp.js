function joined(){
    let title = document.getElementById('title');
    console.log(title)
    title.innerText = 'Thanks for joining the masterclass live!'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function check(){
    let age = document.getElementById('age');
    let eligibility = ""
    if(age.value >= 18){
        eligibility = "You are eligible to cast your vote"
    }
    else{
        eligibility = "You are not eligible to cast your vote"
    }
    document.getElementById('result').innerText = eligibility
}