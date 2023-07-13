function joined(){
    let title = document.getElementById('title');
    console.log(title)
    title.innerText = 'Thanks for joining the masterclass live!'
    let btn = document.getElementById('btn')
    btn.style.display = 'none'
}

function create_table(){
    let num = document.getElementById('num').value;
    let result = ""
    var header = "The multiples of " +num+ " are as follows: \n"
    document.getElementById('table_header').innerText = header
    for(let i=1;i<=10;i++){
        result += num + 'x' + i + '=' + num*i + '\n';
    }
    document.getElementById('result').innerText = result
}