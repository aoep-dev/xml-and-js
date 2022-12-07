const clientId = `6c751630bd3b4901b8afa28f1998f15a`;
const clientSecret = `b845b65651cb4dd1b4c13557192bb4f3`;

const getToken = async () => {
	const result = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
		},
		body: "grant_type=client_credentials",
	});

	const data = await result.json();
	return data.access_token;
};

const getGenres = async (token) => {
	const result = await fetch("https://api.spotify.com/v1/browse/categories?locale=sv_DO", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token,
		},
	});

	const data = await result.json();
	return data.categories.items;
};

const getPlaylistByGenre = async (token, genreId) => {
	const limit = 6;

	const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`,
		{
			method: "GET",
			headers: { Authorization: "Bearer " + token },
		}
	);

	const data = await result.json();
	return data.playlists.items;
};

const getTracksFromPlaylist = async (token, href) => {
	const limit = 7;

	const result = await fetch(href + `?limit=${limit}`,
		{
			method: "GET",
			headers: { Authorization: "Bearer " + token },
		}
	);

	const data = await result.json();
	return data.items;
};

const loadGenres = async () => {
	const token = await getToken();
	const genres = await getGenres(token);
	const list = document.getElementById(`genres`);

	genres.map(async ({ name, id, icons: [icon], href}) => {
		const playlists = await getPlaylistByGenre(token, id);

		if (playlists.length) {
			Promise.all(playlists
				.map(async ({ name, external_urls: { spotify }, images: [image], tracks }) => {
					const playListTracks = await getTracksFromPlaylist(token, tracks.href);
					console.log(playListTracks);
					let tracksList = '';
					
					if (playListTracks) {
						tracksList = playListTracks
							.map(({ track }) => {
								const artists = track.artists
									.map(({ name }) => name)
									.join(', ');
								return `<li>${track.name} - ${artists}</li>`})
							.join('');
					}
					return `
						<li>
								<a href="${spotify}" alt="${name}" target="_blank">
									<img src="${image.url}" width="180" height="180" alt="${name}"/>
								</a>
								<ol class="tracks">
									${tracksList}
								</ol>
						</li>`;
				}))
				.then(playlistsList => playlistsList.join(""))
				.then(playlistsList => {
					const html = `
						<article  class="genre-card">
							<img src="${icon.url}" width="${icon.width}" height="${icon.height}" alt="${name}"/>
							<div>
								<h2>${name}</h2>
								<ol id="pList">
									${playlistsList}
								</ol>
							</div>
						</article>`;

					list.insertAdjacentHTML("beforeend", html);
				})
		}
	});
};

loadGenres();