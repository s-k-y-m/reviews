var axios = require('axios');
const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3002/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('component rendering correctly', async () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
  });

  test('initial title is correct', async () => {
    var logo = '.logo';
    const title = await page.$eval(logo, e => e.textContent);
    expect(title).toEqual('Zagat');
  });

  test('google reviews text is rendering', async () => {
    var googleRating = '.googleReviewText h3';
    const text = await page.$eval(googleRating, e => e.textContent);
    expect(text).toEqual('GOOGLE REVIEWS');
  });

  //reviews-container

  test('there exists a div with class reviews-container', async () => {
    var reviewClass = '.reviews-container';
    const reviewsContainer = await page.$eval(
      reviewClass,
      el => (el ? true : false)
    );
    expect(reviewsContainer).toBe(true);
  });

  test('check if 5 reviews are rendering', async () => {
    const reviewCount = await page.$$eval(
      '.reviews',
      reviews => reviews.length
    );
    expect(reviewCount).toEqual(5);
  });
});

describe('User interaction working correctly', () => {
  test('See More button clicked', async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' });
    await page.click('.seeMore');
  });
});

// describe('fetchRestaurants', async () => {
//   // beforeEach(async () => {
//   //   await page.goto(pageUrl, { waitUntil: 'networkidle2' });
//   // });

//   test('getting reviews from database', () => {
//     // expect.assertions(1);

//     return axios.get('http://localhost:3002/restaurants/name').then(data => {
//       var restaurantData = data.data;
//       expect(typeof restaurantData.reviews).toEqual('array');
//     });
//   });
// });
