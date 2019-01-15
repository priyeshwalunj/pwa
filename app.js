

window.addEventListener('load', async e => {
    await fetchTrending();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceWorker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});


async function fetchTrending() {
    const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=Ka7msy7yN6X6TId58SRS07QXLBcuvyBZ
&limit=25`);
    const json = await res.json();

    document.getElementById('block').innerHTML = json.data.map(createMeme).join('\n');
}  



function createMeme(e,i,a){
    const result = `
        <h3>${e.title}</h3>
        <img src="${e.images.original.url}">`;

    return result
}


 

