

export default function requestServer (session, data, type, setFunction) {
	return async () => {
		const server = 'http://127.0.0.1:8000/';
		const res = await fetch(server + session + '/' + data);

		if (type === 'text') {
			const text = await res.text();
			setFunction(text);
		} else if (type === 'image') {
			const image = await res.blob();
			const url = URL.createObjectURL(image);
			setFunction(url);	
		} else if (type === 'image-list') {

		} else if (type === 'json') {
			const json = await res.json();
			setFunction(json);
		} 
	}
}

