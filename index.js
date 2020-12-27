
const puppeteer =require("puppeteer");
const data = require("./config.json");
let numberOfImage =process.argv[2];
(async  () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/', { waitUntil: "networkidle2" });
    await page.type("input._2hvTZ.pexuQ.zyHYP", data.username, {delay: 200});
    await page.type('input[name="password"]',data.password,{delay:200});
    await Promise.all([
      page.waitForNavigation({ waitUntil: "networkidle2" }),
      page.click("button[type='submit']"),
  ]);
  await page.type("input[placeholder='Search']","half._._.blood._._.prince",{delay:200}); //type username whose you want to like. (eg:-here half._._.blood._._.prince is a username)
  await page.waitForSelector(".drKGC .fuqBx a",{visible:true});
  await Promise.all([
    page.waitForNavigation({ waitUntil: "networkidle2" }),
    page.click(".drKGC .fuqBx a.yCE8d .z556c"),
  ]);
  await page.waitForSelector(".Nnq7C.weEfm");
  await page.click(".Nnq7C.weEfm .v1Nh3.kIKUG._bz0w .KL4Bh");
  let i=0;
  do{
      await page.waitForSelector(".fr66n button",{visible:true});
      await page.click(".fr66n button");
      await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        await page.click("._65Bje.coreSpriteRightPaginationArrow"),
      ]);
      i++;
   }
   while(i<numberOfImage) ;
  })();