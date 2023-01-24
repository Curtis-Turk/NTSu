import { load } from "cheerio";
import fetch from "node-fetch";

const ntsRecentEpisodes = async () => {
  const response = await fetch("https://www.nts.live/latest");
  const html = await response.text();
  const $ = load(html);

  const episodeData = [];
  $(".nts-grid-v2-item__content").each((_, e) => {
    let episode = { episodeImage: "", episodeTitle: "" };
    episode.episodeTitle = $(e).find(".nts-grid-v2-item__header__title").text();
    episode.episodeImage = $(e).find(".nts-grid-picture__img").attr("src");
    episode.episodeUrl = $(e).find("a").attr("href");
    episodeData.push(episode);
  });

  return episodeData;
};

export default ntsRecentEpisodes;
