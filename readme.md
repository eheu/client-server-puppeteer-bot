# Client-Server Puppeteer Bot
Work-in-progress.
Roadmap:
- [X] Prototype
- [ ] Dashboard
- [ ] Create scripts from UI
- [ ] Save / Load / Share
- [ ] Authentication / Authorization

![](https://i.imgur.com/aU1PMxI.gif)

- Server only hosts puppeteer 
- Client does everything using `page.connect({})`

Usage:
```
git clone --recursive https://github.com/eheu/client-server-puppeteer-bot

# Terminal 1
cd client-server-puppeteer-bot/server
yarn
yarn start

# Terminal 2
cd client-server-puppeteer-bot/client
yarn
yarn start
```

Now browse to `http://localhost:1234/`.

# Credit
[entrpaher](https://github.com/entrptaher/playground-react-puppeteer/) for base template
