"use strict";

/* 
Task 1: Modify Text Content
- Locate the paragraph inside the `task1` div.
- Change its text content to: "This text has been modified by JavaScript." 
*/

const task1p = document.querySelector('#task1 p');
task1p.textContent = "This text has been modified by JavaScript."

/* 
Task 2: Add a New List Item
- Locate the unordered list inside the `task2` div.
- Create a new list item with the text "List Item 4".
- Append this new list item to the end of the existing list. 
*/ 

const task2ul = document.querySelector('#task2 ul');
const newListItem = document.createElement('li');

newListItem.textContent = "List Item 4"
task2ul.appendChild(newListItem);

/* 
Task 3: Swap Paragraphs
- Locate the two paragraphs inside the `task3` div.
- Swap their positions so that the second paragraph comes before the first one. 
*/

const task3Div = document.getElementById('task3');
const paragraphs = task3Div.querySelectorAll('p');

task3Div.insertBefore(paragraphs[1], paragraphs[0]);

/* 
Task 4: Change Class Name
- Locate the paragraph inside the `task4` div.
- Add a new class name to this paragraph: "highlight".
- Ensure the paragraph has no other class names. 
*/

const task4p = document.querySelector('#task4 p');

task4p.className = "highlight";

/* 
Task 5: Remove an Element
- Locate the paragraph inside the `task5` div.
- Remove this paragraph from the DOM. 
*/

const task5p = document.querySelector('#task5 p');

task5p.remove();

/* 
Task 6: Change Element Style
- Locate the paragraph with the id `task6-para`.
- Change its style to have a background color of yellow and text color of red. 
*/

const task6p = document.querySelector('#task6 p');

task6p.style.backgroundColor = "yellow";
task6p.style.color = "red";

/* 
Task 7: Insert an Element After
- Locate the paragraph inside the `task7` div.
- Create a new paragraph with the text "New paragraph inserted after.".
- Insert this new paragraph immediately after the existing paragraph. 
*/


const task7Div = document.getElementById('task7');
const task7p = task7Div.querySelector('p');
const newP7 = document.createElement('p');

newP7.textContent = "New paragraph inserted after.";

task7Div.insertBefore(newP7, task7p.nextSibling);


/* 
Task 8: Insert an Element Before
- Locate the paragraph inside the `task8` div.
- Create a new paragraph with the text "New paragraph inserted before.".
- Insert this new paragraph immediately before the existing paragraph. 
*/

const task8Div = document.getElementById('task8');
const task8p = task8Div.querySelector('p');
const newP8 = document.createElement('p');

newP8.textContent = "New paragraph inserted before.";

task8Div.insertBefore(newP8, task8p);

/* 
Task 9: Replace Child Element
- Locate the `container` div inside the `task9` div.
- Replace its existing paragraph with a new paragraph with the text "New content". 
*/

const container = document.querySelector('#task9 #container');
const task9p = container.querySelector('p');
const newP9 = document.createElement('p');

newP9.textContent = "New content";
container.replaceChild(newP9, task9p);

/* 
Task 10: Move Element to Another Div
- Locate the paragraph inside the `task10` div.
- Move this paragraph to the div with the id `destination`. 
*/

const task10p= document.querySelector('#task10 p');
const destination = document.getElementById('destination');

destination.appendChild(task10p);