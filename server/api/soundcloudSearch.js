import puppeteer from "puppeteer";

// (async () => {
//   console.log("in anon func");
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto("https://developer.chrome.com/");

//   // Set screen size
//   await page.setViewport({ width: 1080, height: 1024 });

//   // Type into search box
//   await page.type(".search-box__input", "automate beyond recorder");

//   // Wait and click on first result
//   const searchResultSelector = ".search-box__link";
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

//   // Localte the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     "text/Customize and automate"
//   );
//   const fullTitle = await textSelector.evaluate((el) => el.textContent);

//   // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

//   await browser.close();
// })();

const soundcloudSearch = async ({ searchTitle, searchArtist }) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://soundcloud.com/");
  // await page.hover(".playableTile__artwork");

  await page.setViewport({ width: 1080, height: 1024 });

  await page.screenshot({ path: "initial-page.png" });

  // const cookieSettings = "onetrust-pc-btn-handler";
  const searchBoxSelector = ".headerSearch__input";
  await page.waitForSelector(searchBoxSelector);
  // await page.click(cookieSettings);
  await page.screenshot({ path: "cookie-page.png" });

  // console.log(searchBoxSelector);
  // await page.type(".headerSearch__input", `${searchTitle} ${searchArtist}`);
  // // const searchResultArtistSelector = ".soundTitle__usernameText";

  // const searchResultTitleSelector = ".sc-link-primary soundTitle__title";
  // await page.waitForSelector(searchResultTitleSelector);

  // console.log(searchResultTitleSelector);
  console.log("Inside soundcloud Search");
  await browser.close();
};

export default soundcloudSearch;
