const { newFunction } = require("./newFunction")
const puppeteer = require('puppeteer')
const screenshot = 'wfo_results.png'

try {
  (async () => {
    const browser = await puppeteer.launch({ headless: false, slowMo: 10, args: ['--start-fullscreen'] })

    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://10.10.10.10/wqa/')

    await newFunction(page)

    await page.waitForSelector('#idForSelector', { timeout: 60000 }) // wait 60 sec and sample each sec for element existence
    page.evaluate("Ext.ComponentQuery.query('#idForSelector')[0].el.dom.click()")

    await page.screenshot({ path: screenshot })

    console.log('See screenshot: ' + screenshot)
    await browser.close()
    console.log('Success')
  })()
} catch (err) {
  console.error(err)
}



