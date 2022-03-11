//--2 ASYNC AWAIT
function totalStudent(student) {
  return new Promise((resolve, reject) => {
    if (student.length > 3) {
      setTimeout(() => {
        resolve(student);
      }, 3000);
    } else {
      setTimeout(() => {
        reject("Jumlah Siswa Sedikit");
      }, 4000);
    }
  });
}

function checkStudent(student, name) {
  return new Promise((resolve, reject) => {
    if (student.includes(name)) {
      setTimeout(() => {
        resolve(name);
      }, 3000);
    } else {
      setTimeout(() => {
        reject(name + "  not found!");
      }, 1000);
    }
  });
}

const students = ["Nadira", "Luthfi", "Syauqi", "Ghozali", "Stephanie"];

async function findStudent() {
  try {
    const result = await totalStudent(students);
    const result2 = await checkStudent(result, "Nadira");

    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Promise completed!");
  }
}

findStudent();
