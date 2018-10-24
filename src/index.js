const todoFormEl = document.querySelector('.todo-form')
 const todoListEl = document.querySelector('.todo-list')
const doneListEl = document.querySelector('.done-list')
todoFormEl.addEventListener('submit', e =>{
  e.preventDefault()
  addTodo(e.target.elements.todo.value)
  //input안의 내용을 초기화
  //1. '.value'에 값을 대입하기
  // e.target.elements.todo.value = ''
  //2.폼의 reset 메소드 활용하기
  e.target.reset()
})

function addTodo(newTodoText){

  //li 태그를 만들어서, 내용 채운 뒤에 문서 안에 삽입하기

  const todoItemEl = document.createElement('li')
  todoItemEl.style.marginTop = '20px'
  todoItemEl.textContent = newTodoText
  todoListEl.appendChild(todoItemEl)

  //리스트를 삭제 할 수 있는 버튼

  //삭제 버튼을 만들어서 문서 안에 넣기
  const removeButtonEl = document.createElement('button')
  removeButtonEl.textContent = '삭제'
  removeButtonEl.style.fontSize = '0'
  removeButtonEl.style.width = '40px'
  removeButtonEl.style.height = '20px'
  removeButtonEl.style.border = 'none'
  removeButtonEl.style.background= 'url("btn-sprite.png")'
  todoItemEl.appendChild(removeButtonEl)

  //삭제 버튼을 클릭했을 때 할일 항목이 삭제되도록 만들기
  removeButtonEl.addEventListener('click', e=>{
    todoListEl.removeChild(todoItemEl)
    doneListEl.appendChild(todoItemEl)
  })

  //순서를 위로 바꿀 수 있는 버튼
  const upButtonEl = document.createElement('button')
  upButtonEl.textContent = '위로'
  upButtonEl.style.fontSize = '0'
  upButtonEl.style.width = '40px'
  upButtonEl.style.height = '20px'
  upButtonEl.style.border = 'none'
  upButtonEl.style.background = 'url("btn-sprite.png") -40px 0'
  todoItemEl.appendChild(upButtonEl)
  upButtonEl.addEventListener('click', e=>{
    todoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling)
  })

   //순서를 아래로 바꿀 수 있는 버튼
  const downButtonEl = document.createElement('button')
  downButtonEl.textContent = '아래로'
  downButtonEl.style.fontSize = '0'
  downButtonEl.style.width = '40px'
  downButtonEl.style.height = '20px'
  downButtonEl.style.border = 'none'
  downButtonEl.style.background = 'url("btn-sprite.png") -80px 0'
  todoItemEl.appendChild(downButtonEl)
  downButtonEl.addEventListener('click', e=>{
    todoListEl.insertBefore(todoItemEl, (todoItemEl.nextElementSibling.nextElementSibling)
  )})
}



addTodo('시리얼 사기')
addTodo('클렌징 오일 사기')

// document.querySelector('.todo-input').addEventListener('keydown', e=>{
//   console.log('키가 눌렸을 때')
//   console.log('char:', e.char)
//   console.log('key:', e.key)
//   e.preventDefault()
// })

// document.querySelector('.todo-input').addEventListener('keyup', e=>{
//   console.log('키가 떼졌을 때')
//   console.log('char:', e.char)
//   console.log('key:', e.key)
// })

// document.querySelector('.todo-input').addEventListener('keypress', e=>{
//   console.log('keypress')
//   console.log('key:', e.key)
// })
