if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => console.log("Service worker: registered"))
      .catch((err) => console.log(`Service worker: Error: ${err}`));
  });
}

function mapOfURL(sitename, yourSearch) {
  const sites = new Map();
  sites.set(
    "anime",
    `https://www3.gogoanimes.fi/search.html?keyword=${yourSearch}`
  );

  sites.set("kdrama", `https://runasian.net/search?keyword=${yourSearch}`);
  sites.set("bollywood", `https://topmovies.fans/search/${yourSearch}`);
  sites.set("movie", `https://moviesmod.info/search/${yourSearch}`);
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
    `https://annas-archive.org/search?index=&q=${yourSearch}&sort=&lang=en&ext=pdf`
  );
  sites.set(
    "pdfdrive",
    `https://www.pdfdrive.com/search?q=${yourSearch}&pagecount=&pubyear=&searchin=en`
  );

  sites.set("oceanofpdf", `https://www.oceanofpdf.com/?s=${yourSearch}`);

  sites.set(
    "translate",
    `https://translate.google.com/?hl=hi&sl=en&tl=hi&text=${yourSearch}&op=translate`
  );

  sites.set(
    "an1",
    `https://an1.com/?story=${yourSearch}&do=search&subaction=search`
  );
  sites.set("apkdone", `https://apkdone.com/?s=${yourSearch}`);
  sites.set("apkmb", `https://apkmb.com/?s=${yourSearch}`);
  sites.set("phind", `https://phind.com/search?q=${yourSearch}`);
  sites.set("flipkart", `https://www.flipkart.com/search?q=${yourSearch}`);
  sites.set("whatsapp", `https://wa.me/${yourSearch}`);

  const url = sites.get(sitename);

  return url;
}

function serve(sitename) {
  let yourSearch = document.getElementById(sitename).value;

  const url = mapOfURL(sitename, yourSearch);
  window.location.assign(url);
}

document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementsByTagName("input");
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const sitename = input[i].getAttribute("id");
        serve(sitename);
      }
    });
  }
});
