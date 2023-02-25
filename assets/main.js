const API = `https://youtube-v31.p.rapidapi.com/search?channelId=UCrNzIm96TGhywaqqQyJnCJw&part=snippet%2Cid&order=date&maxResults=5`

const id = null || document.getElementById("content")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0dc3636f6bmsh4d88bb2129a5ac8p12fe45jsnd3d9a733603f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const data =   await (await fetch(urlAPI, options))

    return data.json()
}

(async ()=>{
try {
    const videos = await fetchData(API)
    let view = `
    ${videos.items.map(e=>`
    <div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${e.snippet.thumbnails.high.url}" 
        alt="${e.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${e.snippet.title}
            </h3>
        </div>
    </div>
    `).slice(0,4).join('')}`

    id.innerHTML = view
} catch (error) {
    console.log(error);
}
})();