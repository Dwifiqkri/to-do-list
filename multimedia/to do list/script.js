// AMBIL DATA LOCAL STORAGE

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];




// FORM TAMBAH TUGAS

const taskForm = document.getElementById("taskForm");


if(taskForm){


taskForm.addEventListener("submit", function(e){


e.preventDefault();



const subject =
document.getElementById("subject").value;


const description =
document.getElementById("description").value;


const deadline =
document.getElementById("deadline").value;



const status =
document.getElementById("status").value;



const task = {


id: Date.now(),

subject: subject,

description: description,

deadline: deadline,

status: status


};



tasks.push(task);



localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);



window.location.href="success.html";


});


}






// TAMPILKAN TABEL TUGAS


const taskTable =
document.getElementById("taskTable");



if(taskTable){



if(tasks.length === 0){


taskTable.innerHTML = `

<tr>

<td colspan="5">

Belum ada tugas

</td>

</tr>

`;


}

else{


taskTable.innerHTML="";



tasks.forEach((task,index)=>{



taskTable.innerHTML += `


<tr>


<td>${index+1}</td>



<td>${task.subject}</td>



<td>${task.deadline}</td>



<td>

<span class="status ${task.status == "Selesai" ? "done" : ""}">

${task.status}

</span>

</td>



<td>



<button

onclick="detailTask(${task.id})"

class="btn">

Detail

</button>




<button

onclick="editTask(${task.id})"

class="btn edit">

Edit

</button>





<button

onclick="deleteTask(${task.id})"

class="btn">

Hapus

</button>



</td>


</tr>


`;



});



}



}








// HAPUS TUGAS


function deleteTask(id){


let confirmDelete =
confirm("Hapus tugas ini?");



if(confirmDelete){



tasks =
tasks.filter(task=>task.id !== id);



localStorage.setItem(

"tasks",

JSON.stringify(tasks)

);



location.reload();



}



}







// DETAIL


function detailTask(id){



localStorage.setItem(
"selectedTask",
id
);



window.location.href="detail.html";


}







// EDIT TUGAS


function editTask(id){



localStorage.setItem(

"editTask",

id

);



window.location.href="add-task.html";


}