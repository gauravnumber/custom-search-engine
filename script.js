function mapOfURL(sitename, yourSearch) {
  const sites = new Map();
  sites.set(
    "anime",
    `https://www3.gogoanimes.fi/search.html?keyword=${yourSearch}`
  );

  sites.set("kdrama", `https://runasian.net/search?keyword=${yourSearch}`);
  sites.set("movie", `https://moviesmod.biz/search/${yourSearch}`);
  sites.set("my-drama-list", `https://mydramalist.com/search?q=${yourSearch}`);
  sites.set(
    "my-anime-list",
    `https://myanimelist.net/anime.php?q=${yourSearch}&cat=anime`
  );
  sites.set(
    "anime-planet",
    `https://www.anime-planet.com/anime/all?name=${yourSearch}`
  );
  sites.set("truecaller", `https://www.truecaller.com/search/in/${yourSearch}`);
  sites.set(
    "annas-archive",
    `https://annas-archive.org/search?index=&q=${yourSearch}&sort=&lang=en`
  );
  sites.set(
    "pdfdrive",
    `https://www.pdfdrive.com/search?q=${yourSearch}&pagecount=&pubyear=&searchin=en`
  );

  const url = sites.get(sitename);

  return url;
}

function serve(sitename) {
  let yourSearch = document.getElementById(sitename).value;

  const url = mapOfURL(sitename, yourSearch);
  window.location.assign(url);
}
