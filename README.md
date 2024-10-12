This is Angelie, a web application that allows users to interact with their Spotify friends. For now, you can see what songs they are listening to, but in the future, you will be able to react to them with emojis and even send them messages! 

For the time being, Angelie needs a key to fetch your friend list. You can get one by logging in to your Spotify account on web. Learn more about this process at the section ['Getting the Key'](#getting-the-Key).

Angelie does not store any of your data on any remote server. All data is stored locally in your browser. In the [Roadmap](#roadmap) section, you can see what I plan to add in the future.


## [Getting the Key](#getting-the-Key)
<a id="getting-the-Key"></a>

1. Log in to your [Spotify account on web](https://open.spotify.com) and navigate to Dev Tools using F12 and go to the Application Tab. It might be hidden under the double dash menu as in the screenshot below
   ![Dev Tools](https://i.imgur.com/ySir4VC.png)
2. On the left, under cookies, select the spotify.com domain and copy the value of sp_dc
    ![Cookies](https://i.imgur.com/AVA6R3J.png)
3. Go to [Angelie](https://angelie.vercel.app) and paste the value in the field and click 'Login using sp_dc cookie'
    ![Login](https://i.imgur.com/WQ3L5Qa.png)

You can now see your friends' listening activity! This key will be saved on your device and will never be shared with anyone.

## Roadmap
<a id="roadmap"></a>

- [ ] Implement Login using Spotify OAuth: Allow users to log in to Angelie using their Spotify accounts for added security and convenience.
- [ ] Add emojis to react to songs
- [ ] Add a chat feature to send messages to your friends

## Tech Stack
Angelie is built using Next.js and TypeScript. Styling is done using Tailwind CSS and Shadcn UI. The app is hosted on Vercel. As this is a personal project, partly for learning purposes, any suggestion to improve the code is welcome!

## License
Angelie is licensed under the MIT License.

## Contact
If you have any questions or feedback, feel free to contact me [here](mailto:kreuntact@hotmail.com).