module.exports = {
clickElement: async function (page, selector) {
    
      await page.waitForSelector(selector);
      await page.click(selector);
    },

}