function showPage(pageId) {

  const pages = document.querySelectorAll('.page');

  pages.forEach(function(page) {

    page.classList.remove('active');

  });

  document.getElementById(pageId)
    .classList.add('active');
}

function addTask() {

  const mapel =
    document.getElementById('mapelInput').value;

  const tugas =
    document.getElementById('tugasInput').value;

  const deadline =
    document.getElementById('deadlineInput').value;

  const taskList =
    document.getElementById('taskList');

  const taskDetail =
    document.getElementById('taskDetail');

  if (mapel !== '' && tugas !== '') {

    const li = document.createElement('li');

    li.textContent = mapel;

    taskList.appendChild(li);

    taskDetail.innerHTML =

      "Mata Pelajaran: " + mapel +

      "<br><br>Tugas: " + tugas +

      "<br><br>Deadline: " + deadline +

      "<br><br>Status: Belum Selesai";
  }
}