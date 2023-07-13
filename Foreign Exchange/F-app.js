function joined(){
    let title = document.getElementById('title');
    console.log(title)
    title.innerText = 'Thanks for joining the masterclass live!'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function exchange(){
    let usd = document.getElementById('usd').value;
    let inr = usd * 74.5;
    var header = "$ "+usd+" converter to INR equals: \n"
    document.getElementById('result_header').innerText = header
    document.getElementById('rupee').innerText = "₹  " + inr
}