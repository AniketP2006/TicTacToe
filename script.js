const a0 = document.querySelector('[data-0-0]')
const a1 = document.querySelector('[data-0-1]')
const a2 = document.querySelector('[data-0-2]')

const b0 = document.querySelector('[data-1-0]')
const b1 = document.querySelector('[data-1-1]')
const b2 = document.querySelector('[data-1-2]')

const c0 = document.querySelector('[data-2-0]')
const c1 = document.querySelector('[data-2-1]')
const c2 = document.querySelector('[data-2-2]')



let flag = true
let itemGrid = [[a0,a1,a2],[b0,b1,b2],[c0,c1,c2]]

function clearGrid() {
    itemGrid.forEach(row => {
        row.forEach(button => {
            button.innerText = ''
        })
    })
}
// 02,11,20
function check(winner) {
    let w=0
    if(winner==a2.innerText && winner==b1.innerText && winner==c0.innerText){
                w=3
        }
    for(var i = 0 ; i < 3 ; i++){
        let x=0
        let y=0
        let z=0
        
        for(var j = 0 ; j < 3 ; j++){
            if(itemGrid[i][j].innerText == winner){
                x++
            }
            if(itemGrid[j][i].innerText == winner){
                y++
            }
            if(itemGrid[j][j].innerText == winner){
                z++
            }
        }
        
        if(x==3 || y==3 || z==3 || w==3) {
            itemGrid.forEach(row => {
                row.forEach(button => {
                    button.innerText=winner
                })
            })
            break
        }
        else{
            x=0
            y=0
        }
    }
}

clearGrid();

itemGrid.forEach(row => {
  row.forEach(button => {
    button.addEventListener('click', () => {
        if(button.innerText != 'O' && button.innerText != 'X'){
            if(flag){
                button.innerText = 'O'
                flag = false
                check('O')
            }
            else{
                button.innerText = 'X'
                flag = true
                check('X')
            }
        }
    })
  })
})