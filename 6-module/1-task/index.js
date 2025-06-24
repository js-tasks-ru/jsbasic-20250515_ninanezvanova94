/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
/*export default class UserTable {
  constructor(rows) {
  }
}*/
//
//class UserTable {
export default class UserTable {
  constructor(rows) {//принимает массив 
    
    this.rows = rows;//сохраняет данные
    this.tableElement = null;
    this.createTable();    
  }

  get elem() {//геттер, который возвращает ссылку
    return this.tableElement;
  }

  createTable() {

   if(this.tableElement && 'innerHTML' in this.tableElement){
      this.tableElement.innerHTML = '';
    } else {
      this.tableElement = document.createElement('table');//создает элемент table
    }

    if(this.rows.length===0){      
      this.tableElement = null;
      //this.tableElement.remove();
      return;
    }

    // Добавляем заголовки
    let headerRow = document.createElement('thead');//создает заголовочную строку
    let headerRow1 = document.createElement('tr');//создает заголовочную строку
    let headers = Object.keys(this.rows[0]);//определяет заголовки таблицы, используя ключи первого объекта в массиве
    
    headers.forEach(header => {
      let th = document.createElement('th');
      th.textContent = header;
      headerRow1.appendChild(th);//в каждую строку добавляются ячейки заголовка
    });

    //заголовок для кнопки удаления
    let actionTh = document.createElement('th');
    actionTh.textContent = '';
    headerRow1.appendChild(actionTh);
    headerRow.appendChild(headerRow1);
    this.tableElement.appendChild(headerRow);

    let tbody = document.createElement('tbody');

    // Для каждого объекта в массиве data
    this.rows.forEach((item,index) => {
      let row = document.createElement('tr');//создается строка таблицы

      headers.forEach(header => {//для каждого заголовка
      let cell = document.createElement('td');//создается ячейка
      cell.textContent = item[header];//устанавливает текст ячейки равным значению свойства объекта, соответствующего заголовку
      row.appendChild(cell);//добавляет ячейку в строку
    });     

     // Добавление кнопки в конце строки
      let buttonCell = document.createElement("td");
      let button = document.createElement("button");
      button.textContent = 'Х';
      button.addEventListener("click", () => {
        this.deleteRow(index);
      });
      buttonCell.appendChild(button);
      row.appendChild(buttonCell);
      tbody.appendChild(row);
      
    });
      this.tableElement.appendChild(tbody);
  }   

  deleteRow(index){
    this.rows.splice(index, 1);
      this.createTable();
  }
  

}

