let boxArr=document.querySelectorAll('.card');
let container =document.querySelector('.container');
let audio = document.querySelector('audio');
let modal=document.querySelector('.modal');
let btn=modal.querySelectorAll('.btn');
play();

function play(){
    

let arr=[];
boxArr.forEach((e,i)=>{
       arr.push(i);
})


let count=0;

boxArr.forEach((item,i)=>{
      item.addEventListener('click',(e)=>{
        
        container.classList.add('play');
        item.classList.add('bg-x')
            if(container.classList.contains('play')){
                let h2=document.createElement('h2');
                h2.className="title";
                h2.innerHTML = "X";
                item.appendChild(h2);
                item.classList.add('x');
                item.style.pointerEvents="none";
            }
    
                let newArr=[];
           
           arr.forEach((itemli,li)=>{
              if(itemli==item.id){
                arr[li]=null;
              } 
           })
           resulGame()

              arr.forEach(function(son){
                  if(son !=null && son!='') newArr.push(son);
              })
              let r=Math.floor(Math.random()*newArr.length);
              console.log(arr ,"indexs boxat  "+ newArr[r], "random  "+r);

              if(newArr[r]==undefined){
                if((boxArr[0].classList.contains('bg-o') &&boxArr[1].classList.contains('bg-o')&&boxArr[2].classList.contains('bg-o')) ||( boxArr[0].classList.contains('bg-o') &&boxArr[3].classList.contains('bg-o')&&boxArr[6].classList.contains('bg-o')) ||(boxArr[0].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o'))||(boxArr[1].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o') ) || (boxArr[2].classList.contains('bg-o') &&boxArr[5].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o'))||(boxArr[6].classList.contains('bg-o') &&boxArr[7].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o'))||(boxArr[3].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[5].classList.contains('bg-o'))||(boxArr[1].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[7].classList.contains('bg-o'))||(boxArr[2].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[6].classList.contains('bg-o'))){
                    modal.classList.remove('none');
                    modal.querySelector('.modal-lose').classList.remove('none');
                    modal.querySelector('.modal-win').classList.add('none');
                    audio.src="song/10-Video-Game-Victory-Themes-Mini-Keyboard.m4a";
                    audio.play();
                
               }
            
               
            
                   else if((boxArr[0].classList.contains('x') &&boxArr[1].classList.contains('x')&&boxArr[2].classList.contains('x')) ||( boxArr[0].classList.contains('x') &&boxArr[3].classList.contains('x')&&boxArr[6].classList.contains('x')) ||(boxArr[0].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[8].classList.contains('x'))||(boxArr[1].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[7].classList.contains('x') ) || (boxArr[2].classList.contains('x') &&boxArr[5].classList.contains('x')&&boxArr[8].classList.contains('x'))||(boxArr[6].classList.contains('x') &&boxArr[7].classList.contains('x')&&boxArr[8].classList.contains('x'))||(boxArr[3].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[5].classList.contains('x'))||(boxArr[1].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[7].classList.contains('x'))||(boxArr[2].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[6].classList.contains('x'))){
                    modal.classList.remove('none');
                
                    modal.querySelector('.modal-lose').classList.add('none');
                    modal.querySelector('.modal-win').classList.remove('none');
                    audio.src="song/Final-Fantasy-VII-Victory-Fanfare-HD.m4a";
                    audio.play();
               }
              else{
                modal.classList.remove('none');
                modal.querySelector('.modal-lose').classList.contains('none')?true:modal.querySelector('.modal-lose').classList.add('none');
                modal.querySelector('.modal-win').classList.contains('none')?true:modal.querySelector('.modal-win').classList.add('none');
               
                document.querySelector('.modal-frenship').classList.remove('none');
              }
              }


         container.classList.remove('play')
        if(!container.classList.contains('play'))
                createEl(boxArr[newArr[r]]);
            newArr[r]='';
            newArr=newArr.filter(function(i){
                return i !='';
            })
            arr=newArr;
            function btnAdd(){
                modal.classList.add('none');
                container.classList.contains('play')?container.classList.remove('play'):true;
                console.log(boxArr[i].classList.contains('x'))
             
                   arr.forEach((e,i)=>{
                      arr[i]='';
                  }) 
                  console.log(arr)
                boxArr.forEach((item,i)=>{
                    
                    arr.push(item.id);
                  
                    if(boxArr[i].classList.contains('x')) {
                       
                        boxArr[i].classList.remove('bg-x');
                        
                        
                        boxArr[i].classList.remove('x');
                        boxArr[i].firstElementChild.remove();
                    }
                    if(boxArr[i].classList.contains('o')){
                     
                       boxArr[i].classList.remove('bg-o');
                       boxArr[i].classList.remove('o');
                       boxArr[i].firstElementChild.remove();
                    }
                     boxArr[i].style.pointerEvents="auto"
                        arr=newArr;
                
                });
                console.log(arr,newArr)
                audio.pause();
             }
            btn[0].addEventListener('click',btnAdd);
            btn[1].addEventListener('click',btnAdd)
            btn[2].addEventListener('click',btnAdd)
       
           
           
      })
})

function createEl(x){
    let h2=document.createElement('h2');
    h2.className="title";
    
     h2.innerHTML="O";
    x.appendChild(h2);
    x.style.pointerEvents="none";
    x.classList.add('bg-o');
    x.classList.add('o');
    resulGame()
}

if(!container.classList.contains('play')){
   boxArr.forEach(item =>{
        item.addEventListener('mouseenter',(e)=>{

            let div=document.createElement('div');
            div.className="hover-bg";
            let h2=document.createElement('h2');
            h2.innerHTML="X";
            div.append(h2);
            item.append(div);
        
        })
        item.addEventListener('mouseleave',(e)=>{
             document.querySelector('.hover-bg').remove();
         })
   })
}


}

function resulGame(){
    if((boxArr[0].classList.contains('x') &&boxArr[1].classList.contains('x')&&boxArr[2].classList.contains('x')) ||( boxArr[0].classList.contains('x') &&boxArr[3].classList.contains('x')&&boxArr[6].classList.contains('x')) ||(boxArr[0].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[8].classList.contains('x'))||(boxArr[1].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[7].classList.contains('x') ) || (boxArr[2].classList.contains('x') &&boxArr[5].classList.contains('x')&&boxArr[8].classList.contains('x'))||(boxArr[6].classList.contains('x') &&boxArr[7].classList.contains('x')&&boxArr[8].classList.contains('x'))||(boxArr[3].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[5].classList.contains('x'))||(boxArr[1].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[7].classList.contains('x'))||(boxArr[2].classList.contains('x') &&boxArr[4].classList.contains('x')&&boxArr[6].classList.contains('x'))){
        modal.classList.remove('none');
        audio.src="song/Final-Fantasy-VII-Victory-Fanfare-HD.m4a";
        audio.play();
        modal.querySelector('.modal-lose').classList.add('none');
        modal.querySelector('.modal-win').classList.remove('none');
   }
   else   if((boxArr[0].classList.contains('bg-o') &&boxArr[1].classList.contains('bg-o')&&boxArr[2].classList.contains('bg-o')) ||( boxArr[0].classList.contains('bg-o') &&boxArr[3].classList.contains('bg-o')&&boxArr[6].classList.contains('bg-o')) ||(boxArr[0].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o'))||(boxArr[1].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[7].classList.contains('bg-o') ) || (boxArr[2].classList.contains('bg-o') &&boxArr[5].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o'))||(boxArr[6].classList.contains('bg-o') &&boxArr[7].classList.contains('bg-o')&&boxArr[8].classList.contains('bg-o'))||(boxArr[3].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[5].classList.contains('bg-o'))||(boxArr[1].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[7].classList.contains('bg-o'))||(boxArr[2].classList.contains('bg-o') &&boxArr[4].classList.contains('bg-o')&&boxArr[6].classList.contains('bg-o'))){
        modal.classList.remove('none');
        modal.querySelector('.modal-lose').classList.remove('none');
        modal.querySelector('.modal-win').classList.add('none');
        audio.src="song/10-Video-Game-Victory-Themes-Mini-Keyboard.m4a";
                    audio.play();
      
       
   }
      
   
  
}