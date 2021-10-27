export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1JBruJvB2MOrpScRb8cO7NI8WRABi6ki&q=${encodeURI(category)}&limit=5`;
    console.log(url);
    const resp = await fetch(url);
    const data = await resp.json();

    const gifs = data.data.map((g) => {
        return {
            id: g.id,
            title: g.title,
            url: g.images?.downsized_medium.url,
        };
    });

    return gifs;
};
