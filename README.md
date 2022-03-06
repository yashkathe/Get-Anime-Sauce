# Get Anime Sauce

This web app helps you trace back the exact scene and episode from where the anime screenshot is taken from.

## Powered by trace moe

This web app uses the trace moe api.

Trace.moe is an Anime Scene Search Engine that helps users to trace back the original anime
by a screenshot. It searches in ~30000 hours of anime and find the best matching scene.
It can tell the anime, the episode and the exact time that scene appears. [Read more](https://trace.moe/about)

[Official trace moe docs](https://soruly.github.io/trace.moe-api/#/docs)  
[Official repository](https://github.com/soruly/trace.moe)

## Hosted on Netlify ✔️

https://getsauce.netlify.app/

## Screenshots

- Paste an Image URL

![ link ](https://raw.githubusercontent.com/yashkathe/Get-Anime-Sauce/master/src/assets/readmegifs/1url.gif "Add")

- Or directly upload an image

![ Local Photo ](https://raw.githubusercontent.com/yashkathe/Get-Anime-Sauce/master/src/assets/readmegifs/2upload.gif "Add")

- Also optimised for mobile devies

![ Local Photo ](https://raw.githubusercontent.com/yashkathe/Get-Anime-Sauce/master/src/assets/readmegifs/3mobile.gif "Add")

## Run this project on your machine

- Clone this repository or download the zip file

```bash
  git clone https://github.com/yashkathe/Get-Anime-Sauce
```

- From within the project directory, \
  run this command to download the node modules

```bash
  npm install
```

- Start the development server on local host

```bash
  npm start
```

## Folder Structure

| Component Name    | Parent Directory   | Description                                  |
| :---------------- | :----------------- | :------------------------------------------- |
| ImageResponse.js  | /Components/Form   | Shows Image when user uploads an image       |
| UploadForm.js     | /Components/Form   | Contains form to upload image and insert Url |
| ReceivedResult.js | /Components/Result | Displays result                              |
| ResultCard.js     | /Components/Result | Child of ReceivedResult.js                   |
| Errormsg.js       | /Components        | Displays error if any                        |
| Parent.js         | /Components        | Wrapper of UploadForm.js                     |
| Card.js           | /UI                | Card Wrapper                                 |
| Header.js         | /UI                | Header for this app                          |
| MetaTag.js        | /UI                | code from react-meta-tags                    |
| Spinner.js        | /UI                | Spinner component                            |

### Hooks and Store

| Component Name    | Parent Directory | Description                                    |
| :---------------- | :--------------- | :--------------------------------------------- |
| varients-store.js | /Store           | contains varients for framer motion Components |
| use-http.js       | /Hooks           | useHttp hook to send request to the api        |

All folders have same common directory src\*

## Feedback

If you have any feedback, please reach out to me at katheyash@yahoo.com
