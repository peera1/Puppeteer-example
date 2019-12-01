async function newFunction(page) {
  //username
  await page.type('#username', 'muUserName');
  await page.click('#login');
  //password
  await page.type('#password', 'myPassword');
  await page.click('#loginToolbar_LOGINLabel');
}
exports.newFunction = newFunction
