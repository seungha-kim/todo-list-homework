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

  // *** 코멘트 ***
  // Parcel과 같은 빌드 도구들은 **HTML이나 CSS 코드**를 분석해서 이 파일들이 필요로 하는 이미지를 연결시키는 기능을 갖고 있습니다.
  // 아래처럼 **JavaScript에서 동적으로 배경이미지를** 넣는 경우, 최종 빌드 결과물에 btn-sprite.png 파일이 포함되지 않습니다. (npm run build 명령을 실행해서 직접 확인해보세요!)
  // 이 문제를 해결하려면, 스타일 관련 코드를 모두 CSS로 옮기시면 됩니다. 
  // 아직 배우지는 않았지만, 빌드 도구를 쓸 때에는 **이미지를 사용할 때도 정해진 방법대로 사용해야 한다**는 사실에 유념해주세요!
 
  //삭제 버튼을 만들어서 문서 안에 넣기
  const removeButtonEl = document.createElement('button')
  removeButtonEl.textContent = '삭제'
  removeButtonEl.classList.add('button', 'remove-button')
  todoItemEl.appendChild(removeButtonEl)

  //삭제 버튼을 클릭했을 때 할일 항목이 삭제되도록 만들기
  removeButtonEl.addEventListener('click', e=>{
    todoListEl.removeChild(todoItemEl)
    doneListEl.appendChild(todoItemEl)
  })

  //순서를 위로 바꿀 수 있는 버튼
  const upButtonEl = document.createElement('button')
  upButtonEl.textContent = '위로'
  upButtonEl.classList.add('button', 'up-button')
  todoItemEl.appendChild(upButtonEl)
  upButtonEl.addEventListener('click', e=>{
    todoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling)
  })

   //순서를 아래로 바꿀 수 있는 버튼
  const downButtonEl = document.createElement('button')
  downButtonEl.textContent = '아래로'
  downButtonEl.classList.add('button', 'down-button')
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
