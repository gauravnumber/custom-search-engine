function mapOfURL(sitename, yourSearch) {
  const sites = new Map();
  sites.set(
    "anime",
    `https://www3.gogoanimes.fi/search.html?keyword=${yourSearch}`
  );

  sites.set("kdrama", `https://runasian.net/search?keyword=${yourSearch}`);
  sites.set("movie", `https://moviesmod.biz/search/${yourSearch}`);

  const url = sites.get(sitename);

  return url;
}

function serve(sitename) {
  let yourSearch = document.getElementById(sitename).value;

  const url = mapOfURL(sitename, yourSearch);
  window.location.assign(url);
}
