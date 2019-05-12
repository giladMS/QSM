//Promise

let promise1 = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
  
  reject(new Error("Oppps...")); // ignored
});

promise1
.then(
	success => {
		console.log('Promise then success:', success);
		return success;
	},
	error => {
		console.log('Promise then error:', error);
		throw  error;
	},
	() => {
		console.log('Promise then finally:', error);
	}
 )
.then(
	success => {
		console.log('Promise chaning then success:', success);
		return success;
	},
	error => {
		console.log('Promise chaning then error:', error);
		throw  error;
	},
	() => {
		console.log('Promise chaning then finally:', error);
	}
 )
 .finally(() => console.log('Promise chaning finally:',"Promise Done"))
.catch(err => console.log('Promise chaning catch:',err))  // <-- .catch handles the error object
 
   fetch('https://reqres.in/api/users/2')
  .then(response => response.json())
  .then(json => console.log(json))
  
  let urls = ['https://reqres.in/api/users/1', 'https://reqres.in/api/users/2', 'https://reqres.in/api/users/3'];
  let promisesArr = urls.map(url => fetch(url));
  Promise.all(promisesArr)
  .then(responseArr => {
	  responseArr.forEach( result => console.log(result))
  });