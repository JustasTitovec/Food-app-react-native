import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer UbNpS5msH33Fw_ehdzZDWYe4bNYE6PH3d3IN-fe12CjfAhtDjmTz3UjC5oVjdk59YtkPoowZCUi8PhTiHF8uuLH62BlGBU8bV8jHf5F3Y8ZmY8KR1FvglMbvRaICYXYx',
  },
});
