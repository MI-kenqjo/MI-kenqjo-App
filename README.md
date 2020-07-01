# PWATest
app for Hakqlo community

# for Developers:
please use "double spaces" indentation when code.
you should change settings of indentation in order to do this.
If you don't know how to, ask in our Discord channel.

We are using WebPack

## file structure
├── css/
│   ├── 
│   └──
├── dist/   ->compiled files

## First step

```bash
npm i
```
## TODO
For details, please see our google keep

- add xtermjs
- develop gesture triggering library
- firebase authentication

- push notification(Using API & using IOS way)
## commands 
### npm 
- `npm run build` - builds optimized files in dist/
- `npm run start` - runs dev server. it's useful. please use this when yu want to develop and see the changes instantly.
- `npm run watch` - this is similar to above but it does not start a server and open browser. use this when you don't need to see the changes in browser.
- `npm run deploy` - it runs `npm run build` and deploys to Github Page.
### git 
for the most cases you only type those three commands to upload your changes to github. (this uploads developing source to github, and `npm run deploy` will only upload the compiled ones.(i.e. files in dist/))
- `git add . `
- `git commit -a -m 'your message'` (replace 'your message' to your message)
- `git push origin master`

if you need to type in github password every single time, 
you should GOOGLE like this :'github ssh' and see articles. if you are done with the ssh setting, your problems should be solved. goodluck:wink:. lol
## To test PWA locally, 
use the following command to enable https local hosting.

Firstly, install mkcert. -> https://github.com/FiloSottile/mkcert (you can find some instructions for installing)
then run the following command.
```bash
mkcert -install
```
in your project directory, run:
```bash
mkcert 0.0.0.0 localhost 127.0.0.1 ::1
```
Two files generated in your directory, and rename it.

0.0.0.0+3-key.pem -> key.pem

0.0.0.0+3.pem -> cert.pem

then you can make a https server locally.
```bash
http-server -S -C cert.pem -o
```
source: https://qiita.com/walkers/items/b90a97a99bbb27f6550f
