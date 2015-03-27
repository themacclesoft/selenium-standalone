module.exports = {
  baseURL: 'http://selenium-release.storage.googleapis.com',
  version: '2.45.0',
  drivers: {
    chrome: {
      version: '2.14',
      arch: process.arch,
      baseURL: 'http://chromedriver.storage.googleapis.com'
    }
  }
};
