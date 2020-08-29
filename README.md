<p align="center"><img src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg" width="300"></p>

<h1 align="center">YouTube Video Information</h1>

<p align="center">An app that retrieves information from YouTube videos</p>

## About

This app was made to retrieve information from youtube videos. This retrieves information such as:

* Video description
* Video like and dislike count (not abbreviated)
* Video view count (not abbreviated)

This app was also made for developers as a demonstration of the YouTube Data API, not just as an information retriever.

### Technologies

This project was made with `react`, `react-router`, and the [Youtube Data API](https://developers.google.com/youtube/v3/getting-started).

## Demo

You can see the live demo at <https://nickforthewin.github.io/yt-information>

## Running Locally

To run locally,

1. Type in the following command:

```
git clone https://github.com/nickforthewin/yt-information.git
```

2. Then, type in this command:

```
npm install
```

3. Make a file called `.env` in the root of the project. In the file, add the following line. Replace `your api key` with your YouTube Data API key.

```
REACT_APP_GOOGLE_API_KEY=your api key
```

4. Type `npm start` to start the development server.
