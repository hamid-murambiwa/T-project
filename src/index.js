import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './enter.png';
import Icon2 from './icons8-available-updates-96.png';
import Icon3 from './options.png';
import Icon4 from './icons8-delete-64.png';
import checking from './index.js';

class TDL {
  constructor() {
    this.createTDL();
    this.listOfItems = [
      {         
      task: 'water the garden',
      completed: false,
      index: 0,
      id: 'rrma',
    },
    {         
      task: 'clean the kitchen',
      completed: false,
      index: 1,
      id: 'rrma',
    }
  ];
    // this.checks = [];
    // this.id = [];
    // if (JSON.parse(localStorage.getItem('id') !== null)) {
    // this.id = JSON.parse(localStorage.getItem('id'));
    // }
    // if (JSON.parse(localStorage.getItem('checks') !== null)) {
    //   this.checks= JSON.parse(localStorage.getItem('checks'));
    //   }
    // if (localStorage.getItem('data-list') !== null) {
    //   this.listOfItems = JSON.parse(localStorage.getItem('data-list'));
    //   console.log(this.listOfItems);
    //   this.displayTask();
    // }
    this.displayTask();
  }
  createTDL() {
    const wrapper = document.createElement('section');
    wrapper.id = 'container';
    const container = document.createElement('div');
    container.id = 'CON';
    const firstCon = document.createElement('div');
    firstCon.id = 'Con';
    const heading = document.createElement('p');
    heading.innerText = "Today's To Do List";
    const resetButton = document.createElement('button');
    resetButton.className = 'RB';
    resetButton.addEventListener('click', () => {
      resetButton.className = 'Rbutton';
      // console.log(this.id);
      // this.id.forEach((id) => {
      //   if (document.getElementById(id) !== null) {
      //   console.log(document.getElementById(id));
      //   document.getElementById(id).parentElement.remove();
      //   const index = this.listOfItems.findIndex((list) => list.id === id);
      //    this.listOfItems.splice(index, 1);
      //    console.log(this.listOfItems);
      //    localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
      //   }
      // });
      // this.id = [];
      // localStorage.setItem('id', JSON.stringify(this.id));

      // this.checks = [];
      // localStorage.clear();
    });
    const resetIcon = document.createElement('img');
    resetIcon.src = Icon2;
    resetIcon.id = 'resetBTN';
    const secondCon = document.createElement('div');
    secondCon.id = 'Con';
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add to your list...';
    input.id = 'add';
    input.addEventListener('keydown', () => {

      if (event.keyCode === 13) {
        event.preventDefault();
      if (input.value !== this.listOfItems.id) {
        resetButton.className = 'RB';
        this.addTask();
        form.reset();
      console.log(this.id);
      }
    }
    });
    const enterBTN = document.createElement('button');
    enterBTN.id = 'enterBTN';
    enterBTN.addEventListener('click', () => {
      event.preventDefault();
      resetButton.className = 'RB';
      this.addTask();
      form.reset();
      console.log(this.id);
    });
    const enterIcon = document.createElement('img');
    enterIcon.src = Icon;
    enterIcon.id = 'enterIcon';
    const ul = document.createElement('ul');
    ul.id = 'list';
    const thirdCon = document.createElement('div');
    thirdCon.id = 'Con1';
    const clearBTN = document.createElement('button');
    clearBTN.innerText = 'Clear all completed';
    clearBTN.id = 'clearBTN';
    clearBTN.addEventListener('click', () => {
       this.clearAllCompleted();
    });

    enterBTN.appendChild(enterIcon);
    firstCon.appendChild(heading);
    resetButton.appendChild(resetIcon);
    firstCon.appendChild(resetButton);
    form.appendChild(input);
    secondCon.appendChild(form);
    secondCon.appendChild(enterBTN);
    thirdCon.appendChild(clearBTN);
    container.appendChild(firstCon);
    container.appendChild(secondCon);
    container.appendChild(ul);
    container.appendChild(thirdCon);
    wrapper.appendChild(container);
    document.body.appendChild(wrapper);
  }

  // addTask() {
  //   const input = { task: document.getElementById('add').value };
  //   console.log(input);

  //   const ul = document.getElementById('list');
  //   ul.style.display = "grid";
  //   const li = document.createElement('li');
  //   li.className = 'Task';
  //   li.draggable = 'true';
  //   const conBTN = document.createElement('button');
  //   conBTN.className = 'CB';
  //   conBTN.draggable = 'true';

  //   const checkBoxCon = document.createElement('div');
  //   checkBoxCon.className = 'CBC';
  //   const checkBox = document.createElement('input');
  //   checkBox.className = 'cBox';
  //   checkBox.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  //   console.log(`${checkBox.id}`);
  //   this.checkBox = checkBox.id;
  //   checkBox.type = 'checkbox';

  //   this.id.push(checkBox.id);
  //   localStorage.setItem('id', JSON.stringify(this.id));
  //   const label = document.createElement('input');
  //   label.className = 'tasks';
  //   label.value = input.task;
  //   label.addEventListener('keydown', (event) => {
  //     if (event.keyCode === 13) {
  //       const index = this.listOfItems.findIndex((list) => list.task === input.task);
  //       this.listOfItems.splice(index, 1);
  //       console.log(index);
  //       console.log(this.listOfItems);
  //       const idCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  //       checkBox.id = idCode;
  //       console.log(idCode);
  //    this.listOfItems.push({
  //     task: label.value,
  //     completed: checkBox.checked,
  //     index: this.listOfItems.length,
  //     id: idCode,
  //    });
  //    console.log(this.listOfItems);
  //    localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
  //    this.id.splice(index, 1);
  //    this.id.push(idCode);
  //    localStorage.setItem('id', JSON.stringify(this.id));
  //    console.log(this.id);
  //   }
  //   });
  //   checkBox.addEventListener('click', () => {
  //     if (checkBox.checked) {
  //       console.log(checkBox.checked);
  //       label.remove();
  //       const del = document.createElement('del');
  //       del.innerText = input.task;
  //       checkBoxCon.appendChild(del);
  //       const result = 0;
  //       this.checks.forEach((check) => {
  //             if (check == checkBox.id) {
  //               result++
  //             }
  //       });
  //       if (result === 0) {
  //         this.checks.push(checkBox.id);

  //         console.log(checkBox.id);
  //       }

  //     } else {
  //       this.checks.pop();
  //       checkBoxCon.removeChild(checkBoxCon.childNodes[0]);
  //       checkBoxCon.appendChild(label);
  //     }
  //   });
  //   const optionsBTN = document.createElement('button');
  //   optionsBTN.className = 'optionsBTN';

  //   const optionsIcon = document.createElement('img');
  //   optionsIcon.className = 'optionsIcon';
  //   optionsIcon.src = Icon3;

  //   conBTN.addEventListener('click', () => {
  //     optionsIcon.src = Icon4;
  //     conBTN.style.backgroundColor = 'rgba(0, 151, 151, 0.631)';

  //     optionsBTN.addEventListener('click', () => {
  //       conBTN.parentElement.remove();
  //       const index = this.listOfItems.findIndex((list) => list.id === checkBox.id);
  //       this.listOfItems.splice(index, 1);
  //       console.log(this.listOfItems);
  //       localStorage.setItem('data-list', JSON.stringify(this.listOfItems));

  //       const indexID = this.id.findIndex((id) => id === checkBox.id);
  //       this.id.splice(indexID, 1);
  //       console.log(this.id);
  //       localStorage.setItem('id', JSON.stringify(this.id));

  //       const checksID = this.checks.findIndex((check) => check === checkBox.id);
  //       this.checks.splice(checksID, 1);
  //       console.log(this.checks);
  //     });
  //   });

  //   optionsBTN.appendChild(optionsIcon);
  //   checkBoxCon.appendChild(label);
  //   conBTN.appendChild(checkBoxCon);
  //   conBTN.appendChild(optionsBTN);
  //   li.appendChild(checkBox);
  //   li.appendChild(conBTN);

  //   ul.appendChild(li);

  //   this.listOfItems.push({
  //     task: input.task,
  //     completed: checkBox.checked,
  //     index: this.listOfItems.length,
  //     id: checkBox.id,
  //   });

  //   localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
  // }
  
  displayTask() {
    this.listOfItems.forEach((listOfItems, index012) => {
      const ul = document.getElementById('list');
      ul.style.display = "flex";
      const li = document.createElement('li');
      li.className = 'Task';
      li.setAttribute('data-index', index012);
      const conBTN = document.createElement('button');
      conBTN.className = 'CB';
      conBTN.draggable = 'true';

      const checkBoxCon = document.createElement('div');
      checkBoxCon.className = 'CBC';
      const checkBox = document.createElement('input');
      checkBox.className = 'cBox';
      checkBox.id = listOfItems.id;
      checkBox.type = 'checkbox';
      checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
          // this.checks.push(checkBox.id);
          listOfItems.completed = 'true';
          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
          // console.log(checkBox.id);
          console.log(listOfItems.completed);
        } else {
          listOfItems.completed = 'false';
          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
        }
      });
      const label = document.createElement('input');
      label.className = 'tasks';
      label.value = listOfItems.task;
      let taskInCon = listOfItems.task;
      label.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          console.log(taskInCon);
          const index = this.listOfItems.findIndex((list) => list.task === taskInCon);
          this.listOfItems.splice(index, 1);
          console.log(index);
          console.log(this.listOfItems);
          const idCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
          checkBox.id = idCode;
          console.log(idCode);
          const labelValue = label.value;
       this.listOfItems.unshift({
        task: labelValue,
        id: idCode,
       });
       console.log(this.listOfItems);
       localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
      //  this.id.splice(index, 1);
      //  this.id.push(idCode);
      //  localStorage.setItem('id', JSON.stringify(this.id));
      //  console.log(this.id);
      }
      });
      console.log(listOfItems);
      const optionsBTN = document.createElement('button');
      optionsBTN.className = 'optionsBTN';
          optionsBTN.addEventListener('click', () => {
      console.log('button works');
    });
    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        console.log(checkBox.checked);
        label.remove();
        const del = document.createElement('del');
        del.innerText = listOfItems.task;
        checkBoxCon.appendChild(del);
      //   const result = 0;
      //   this.checks.forEach((check) => {
      //         if (check == checkBox.id) {
      //           result++
      //         }
      //   });

      // } else {
      //   this.checks.pop();
      //   checkBoxCon.removeChild(checkBoxCon.childNodes[0]);
      //   checkBoxCon.appendChild(label);
      // }
      }
    });
      const optionsIcon = document.createElement('img');
      optionsIcon.className = 'optionsIcon';
      optionsIcon.src = Icon3;

      conBTN.addEventListener('click', () => {
        optionsIcon.src = Icon4;
        conBTN.style.backgroundColor = 'rgba(0, 151, 151, 0.631)';
        optionsBTN.addEventListener('click', () => {
          conBTN.parentElement.remove();
          const index = this.listOfItems.findIndex((list) => list.id === checkBox.id);
          this.listOfItems.splice(index, 1);
          console.log(this.listOfItems);
          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
  
          // const indexID = this.id.findIndex((id) => id === checkBox.id);
          // this.id.splice(indexID, 1);
          // console.log(this.id);
          // localStorage.setItem('id', JSON.stringify(this.id));
  
          // const checksID = this.checks.findIndex((check) => check === checkBox.id);
          // this.checks.splice(checksID, 1);
          // console.log(this.checks);

        });
      });
  
      optionsBTN.appendChild(optionsIcon);
      checkBoxCon.appendChild(label);
      conBTN.appendChild(checkBoxCon);
      conBTN.appendChild(optionsBTN);
      li.appendChild(checkBox);
      li.appendChild(conBTN);
      ul.appendChild(li);
    });
  }

//   clearAllCompleted() {
//      console.log(this.checks);

//      this.checks.forEach((check) => {
//       console.log(this.checks);
//       console.log(this.id);
       
//        document.getElementById(check).parentElement.remove();
//        const index = this.listOfItems.findIndex((list) => list.id === check);
//         this.listOfItems.splice(index, 1);
//         console.log(this.listOfItems);
//         localStorage.setItem('data-list', JSON.stringify(this.listOfItems));

//         const indexID = this.id.findIndex((id) => id === check);
//         if (this.id[indexID] === check) {
//           this.id.splice(indexID, 1);
//           console.log(this.id[indexID]);
//           localStorage.setItem('id', JSON.stringify(this.id));
//         }

//      });
//      this.checks = [];
// }

}

export const tdl = new TDL();
console.log(tdl.listOfItems);
// localStorage.clear();
