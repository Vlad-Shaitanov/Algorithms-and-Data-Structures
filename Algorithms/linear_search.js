"use strict";

/*===== 
Сложность O(n), где n - кол-во элементов 
=====*/

//Несортированный массив
const array = [1,6,4,9,3,8,2,7,5,0];
//Счетчик итераций
let count = 0;

const linearSearch = (array, item) =>{

	for(let i = 0; i <= array.length; i++){

		count += 1;

		if(array[i] === item){
			return `Индекс искомого элемента: ${i}`;
		}
	}
	//Если ничего не найдено
	return null;
};

console.log(linearSearch(array, 0));
console.log(`Количество итераций: ${count}`);