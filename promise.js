// --1 PROMISE
const students = ["Nadira", "Luthfi", "Syauqi", "Ghozali"];

// // Jumlah student > 3, tunggu selama 3 detik lalu return students
// // Kalau student <= 3, tunggu selamat 4 detik lalu return "Jumlah student sedikit"

function jumlahStudent(students) {
  return new Promise((resolve, reject) => {
if (students.length > 3) {
  setTimeout(() => {
    resolve(students.slice(-1) );
  }, 3000);
} else {
  setTimeout(() => {
    reject("Jumlah student sedikit");
  }, 4000);
}
});
}

jumlahStudent(students)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise completed!"));
