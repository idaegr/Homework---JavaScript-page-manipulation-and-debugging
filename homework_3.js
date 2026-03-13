//legg inn koden her// 1A) Split text into lines 
function splitLines(text) {
    let lines = text.split('\n');   //split text at every new line indicated by \n
    return lines;
}

let result = splitLines('A\nB\nC');
console.log(result)



// 1B) Text numbers to real numbers 
function textToNumbers(list) {
    return list.map(function(value){ 
        return Number(value);
    });
}

let textNumbers = textToNumbers(['1.2', '-3.4', '5.6']);
console.log(textNumbers); 

    // the map method applies a function to every element in the array. The 
    // Number () function is passed to the map() so each text valu eis converted 
    // to a number



// 1C) Sum pairs and show on webpage 
function showPairSums(numbers) {

    let list = document.getElementById('resultList');       // accesses the list in HTML

    for (let i = 0; i< numbers.length -1; i++) {            // loops through the numbers and stops on length-1

        let sum = numbers[i] + numbers[i + 1];              // calculates the sum 

        let li = document.createElement('li');              // creates a new list element like <li></li>

        li.textContent = numbers[i] + '+' + numbers[i + 1] + ' = ' + sum;   // concatinates text and numbers 

        list.appendChild(li);
    }
}

const numbers =[1, 2, 3, 4, 5];
showPairSums(numbers);



// 2) Interactive to-do list 
function addTask() {
    let taskText = document.getElementById('taskInput').value;

    if (taskText === '') {
        alert('please enter a todo-task!')
        return;
    }

    //create a due date for the task
    const date_input = document.getElementById('due_date');

    let date_string = date_input.value;
    let date=document.createElement('date');

    // adding 'due: ' only if a date is chosen 
    if (date_string !== '') {
        date.textContent='due: '+ date_string;
    }
    
    date.classList.add('date')

    //create a new list item
    let li = document.createElement('li');

    //checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    //create a span for the task text
    let span = document.createElement('span');
    span.textContent = taskText;

    //toggle completed style when checkbox is clicked
    checkbox.onchange = function() {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    };

    //create remove-button
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // add a button class for css
    removeButton.classList.add('removeButton')

    //add functionality to the button
    removeButton.onclick = function() {
    li.remove();
    };

    //append elements to list item 
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);
    li.appendChild(date);

    //append the list item to the ul
    document.getElementById('todoList').appendChild(li);

    //clear input
    document.getElementById('taskInput').value = '';
}
