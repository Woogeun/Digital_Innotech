import axios from 'axios'


export default function requestServer (session, data, type, setFunction) {
	return async () => {
		const server = 'http://192.249.19.100:8000/'+ session + '/' + data + '/';
		
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

