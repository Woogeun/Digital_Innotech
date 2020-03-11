import axios from 'axios'


function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
    	}
	}
	return "";
}


function requestServer (session, data, type, setFunction) {
	return async () => {
		const server = 'http://127.0.0.1:8000/'+ session + '/' + data + '/';
		
		if (type === 'text') {
			axios
				.get(server)
				.then(function(res) {
					const text = res.data;
					setFunction(text);
				})
				.catch(function(error) {
					console.log("GET error in text " + server);
					setFunction("ERROR");
				});
		} else if (type === 'image') {
			axios
				.get(server, {
					responseType: 'blob'
				})
				.then(function(res) {
					const image = res.data;
					const url = URL.createObjectURL(image);
					setFunction(url);	
				})
				.catch(function(error) {
					console.log("GET error in image " + server);
					setFunction(null);
				});
			
		} else if (type === 'json') {
			axios
				.get(server)
				.then(function(res) {
					const json = res.data;
					setFunction(json);
				})
				.catch(function(error) {
					console.log("GET error in json " + server);
					setFunction({});
				});
			
		} else if (type === 'zip') {

		} 
	}
}

function updateServer (session, data, type) {
	const server = 'http://127.0.0.1:8000/'+ session + '/' + data + '/';
	
	if (type === 'text') {
		axios
			.post(server, {
				data: 'Hello world'
			})
			.then(function(res) {
				const text = res.data;
			})
			.catch(function(error) {
				console.log("POST update error in text " + server);
			});
	} else if (type === 'image') {
		axios
			.post(server, {
				responseType: 'blob'
			})
			.then(function(res) {
				const image = res.data;
				const url = URL.createObjectURL(image);
			})
			.catch(function(error) {
				console.log("POST update error in image " + server);
			});
		
	} else if (type === 'json') {
		axios
			.post(server)
			.then(function(res) {
				const json = res.data;
			})
			.catch(function(error) {
				console.log("POST update error in json " + server);
			});
		
	} else if (type === 'zip') {

	} 
}

function uploadServer (session, data, type) {
	const server = 'http://127.0.0.1:8000/'+ session + '/' + data + '/';
	
	if (type === 'text') {
		axios
			.post(server, {
				message: 'Hello world'
			})
			.then(function(res) {
				console.log("POST upload success in text" + server);
			})
			.catch(function(error) {
				console.log("POST upload error in text " + server);
			});
	} else if (type === 'image') {
		axios
			.post(server, {
				responseType: 'blob'
			})
			.then(function(res) {
				console.log("POST upload success in image " + server);
			})
			.catch(function(error) {
				console.log("POST upload error in image " + server);
			});
		
	} else if (type === 'json') {
		axios
			.post(server)
			.then(function(res) {
				console.log("POST upload success in json " + server);
			})
			.catch(function(error) {
				console.log("POST upload error in json " + server);
			});
		
	} else if (type === 'zip') {

	} 
}

function deleteServer (session, data, type) {
	const server = 'http://127.0.0.1:8000/'+ session + '/' + data + '/';
	
	if (type === 'text') {
		axios
			.post(server)
			.then(function(res) {
				console.log("POST delete success in text " + server);
			})
			.catch(function(error) {
				console.log("POST delete error in text " + server);
			});
	} else if (type === 'image') {
		axios
			.post(server, {
				responseType: 'blob'
			})
			.then(function(res) {
				console.log("POST delete success in image " + server);
			})
			.catch(function(error) {
				console.log("POST delete error in image " + server);
			});
		
	} else if (type === 'json') {
		axios
			.post(server)
			.then(function(res) {
				console.log("POST delete success in json " + server);
			})
			.catch(function(error) {
				console.log("POST delete error in json " + server);
			});
		
	} else if (type === 'zip') {

	} 
}

export {requestServer, updateServer, uploadServer, deleteServer};
