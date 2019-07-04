//DOM ELEMENTS 
const inpTitle   = document.querySelector('#title');
const inpAuthor  = document.querySelector('#author');
const inpYear    = document.querySelector('#year');
const btnAdd     = document.querySelector('.btn-primary');
const table      = document.querySelector('#book-list');


//variables
let out = '';
let id  = '';



btnAdd.addEventListener('click', event => {
    event.preventDefault()
    
    // console.log(id)
    if (inpTitle.value !== '' && inpAuthor.value !== '' && inpYear.value !== ''){
        //Id 
        for (let i = 0; i < 10; i++) {
            id += (Math.floor(Math.random() * 10))
        }
        out = `<tr>
                    <th>${inpTitle.value}</th>
                    <th>${inpAuthor.value}</th>
                    <th>${inpYear.value}</th>
                    <th>${id}</th>
                    <th> <button class="btn btn-danger pull-right">Remove</button></th>  
                   
                </tr>`
        table.innerHTML += out
        id = ''
        inpTitle.value = ''
        inpAuthor.value = ''
        inpYear.value = ''
        

    }
    const btnRemove  = document.querySelector('.btn-danger')
    btnRemove.addEventListener('click', event => {
        event.target.parentElement.parentElement.remove()
    })
})
