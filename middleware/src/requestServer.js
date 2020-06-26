import axios from 'axios'

const _server = 'http://192.249.19.100:8000/';
// const _server = 'http://localhost:8000/';

function requestServer (session, data, type, setFunction) {
	return async () => {
		const server = _server+ session + '/' + data + '/';
		
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

		} else if (type === 'pdf') {
			axios
				.get(server, {
					responseType: 'blob'
				})
				.then(function(res) {
					const pdf = res.data;
					const url = URL.createObjectURL(pdf);
					setFunction(url);	
				})
				.catch(function(error) {
					console.log("GET error in pdf " + server);
					setFunction(null);
				});
		}
	}
}

function updateServer (session, data, type, content) {
	const server = _server+ session + '/' + data + '/';

	if (type === 'text') {
		axios
			.post(server, {
				type: type,
				mode: 'update',
				content: content
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
				type: type,
				mode: 'update',
				content: content
			})
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
			.post(server, {
				type: type,
				mode: 'update',
				content: content
			})
			.then(function(res) {
				const json = res.data;
			})
			.catch(function(error) {
				console.log("POST update error in json " + server);
			});
		
	} else if (type === 'zip') {

	} else if (type === 'pdf') {
		
	}
}

function uploadServer (session, data, type, content) {
	const server = _server+ session + '/' + data + '/';
	
	if (type === 'text') {
		axios
			.post(server, {
				type: type,
				mode: 'upload',
				content: content
			})
			.then(function(res) {
				console.log("POST upload success in text" + server);
			})
			.catch(function(error) {
				console.log("POST upload error in text " + server);
			});
	} else if (type === 'image') {
		const data = new FormData();
		data.append('content', content);
		data.append('id', content.name)
		data.append('mode', 'upload');
		data.append('type', type);

		axios
			.post(server, data,
				{
				headers: {
					'content-type': `multipart/form-mixed;boundary=${data._boundary}`
					// 'content-type': content.type
				}
			})
			.then(function(res) {
				console.log("POST upload success in image " + server);
			})
			.catch(function(error) {
				console.log("POST upload error in image " + server);
			});
		
	} else if (type === 'json') {
		axios
			.post(server, {
				type: type,
				mode: 'upload',
				content: content
			})
			.then(function(res) {
				console.log("POST upload success in json " + server);
			})
			.catch(function(error) {
				console.log("POST upload error in json " + server);
			});
		
	} else if (type === 'zip') {

	} else if (type === 'pdf') {
		const data = new FormData();
		data.append('content', content);
		data.append('id', content.name);
		data.append('mode', 'upload');
		data.append('type', type);

		axios
			.post(server, data,
			{
				headers: {
					'content-type' : 'multipart/form-data'
				}
			})
			.then(function(res) {
				console.log("POST upload success in pdf " + server);
			})
			.catch(function(error) {
				console.log("POST upload error in pdf " + server);
			});
	}

}

function deleteServer (session, data, type, content) {
	const server = 'http://192.249.19.100:8000/'+ session + '/' + data + '/';
	
	if (type === 'text') {
		axios
			.post(server, {
				type: type,
				mode: 'delete',
				content: content
			})
			.then(function(res) {
				console.log("POST delete success in text " + server);
			})
			.catch(function(error) {
				console.log("POST delete error in text " + server);
			});
	} else if (type === 'image') {
		axios
			.post(server, {
				type: type,
				mode: 'delete',
				content: content
			})
			.then(function(res) {
				console.log("POST delete success in image " + server);
			})
			.catch(function(error) {
				console.log("POST delete error in image " + server);
			});
		
	} else if (type === 'json') {
		axios
			.post(server, {
				type: type,
				mode: 'delete',
				content: content
			})
			.then(function(res) {
				console.log("POST delete success in json " + server);
			})
			.catch(function(error) {
				console.log("POST delete error in json " + server);
			});
		
	} else if (type === 'zip') {

	} else if (type === 'pdf') {
		
	}
}

export {requestServer, updateServer, uploadServer, deleteServer};
