for(let x=0; x<8; x++){
    let div1 = document.createElement('div');
    div1.setAttribute("id",'div-1');
    document.body.appendChild(div1);
    if(x % 2 == 0){
        div1.style.backgroundColor = 'white';
    }else{
        div1.style.backgroundColor = 'black';
    };

        for(let y=0; y<8; y++){
        let div2 = document.createElement('div');
        div2.setAttribute("id",'div-2');
        div1.appendChild(div2);
        if(x % 2 == 0 && y % 2 !==0){
            div2.style.backgroundColor = 'white';
        }else if(x % 2 == 0 && y % 2 ==0){
            div2.style.backgroundColor = 'black';
        }else if(x % 2 !== 0 && y % 2 ==0){
            div2.style.backgroundColor = 'white';
        }
    };
}


