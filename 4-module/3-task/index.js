function highlight(table) {
 
  //зачеркивание если ячейка age<18
 for (let i = 0; i < table.rows.length; i++) {      
      row = table.rows[i];
      cell = row.cells[1];
      value = parseFloat(cell.textContent);

      if(value < 18){
          row.style.textDecoration = 'line-through';
      }       
  }
  
  //класс в зависимости от значения
  for (let i = 0; i < table.rows.length; i++) {      
      row = table.rows[i];
      cell = row.cells[2];
      value = cell.textContent;

      if(value == 'm'){
          row.classList.add("male");
      } else if(value == 'f'){
        row.classList.add("female");
      }
  }

  //класс в зависимости от значения атрибута
  for (let i = 0; i < table.rows.length; i++) {      
      row = table.rows[i];
      cell = row.cells[3];
      value = cell.getAttribute('data-available');

      if(value == 'true'){
          row.classList.add("available");            
      } else if(value == 'false'){
          row.classList.add("unavailable");
      } else {
          row.hidden = true;
      }
  }

}
