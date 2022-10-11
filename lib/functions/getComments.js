import puppeteer from 'puppeteer'

const runScraper = async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
  const page = await browser.newPage()
  await page.goto('https://old.reddit.com/r/stocks/comments/');

  // Get the "viewport" of the page, as reported by the page.
  const divs = await page.$$eval('div.md', divs => {
    const innerText = divs?.map((div, index) => {
      return div.innerText || null
    })
    return innerText
  })
  await browser.close()
  return divs
};

// const commentScraperApi = async (req, res) => {
//     const data = await runScraper();
//     res.status(200).json({ data: data })
// }

export default runScraper