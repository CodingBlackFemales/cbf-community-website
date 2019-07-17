# cbf-community-website

### This is the repository for the Coding Black Females community website

---

## To test your changes to the website before raising a PR (Pull Request)

## Prerequisites

- Node.js (including NPM) - learn more about Node.js [`here`](https://nodejs.org/)

## Node.js installation

### How do i know if i have nodeJS installed

In your command line terminal (e.g. iTerm or Terminal), TYPE:

`node -v`

This should tell you which Node.js version you have installed. ✅

If not, please install it to continue. There are various ways to install Node.js

---

### How to install Node.js

The simplest way is to download Node.js pre-built installer [`here`](https://nodejs.org/en/download/)

### Alternatively, you can install from the command line terminal using Homebrew

If you use [`Homebrew`](https://brew.sh/) for example, TYPE:

`brew install node`

In any case, please choose whichever method suits you.

---

## How to get these files on your computer so you can work on it locally

If you have not already done so ...
Git clone this repo e.g. TYPE:

`git clone https://github.com/CodingBlackFemales/cbf-community-website.git`

more info on this from here: [`Git-Basics-Getting-a-Git-Repository`](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

---

## Steps to run to CBF community website locally

Now for the fun bit 😅 - launching 🚀 the webserver locally 💻

In the command line do the following, TYPE:

- `cd cbf-community-website` - to go into the CBF Community Website project folder

- `cd functions` - to go into the [`functions/`](https://github.com/CodingBlackFemales/cbf-community-website/blob/master/functions/) folder

- [`npm install`](https://docs.npmjs.com/cli/install) - to install all the required node modules from [`package.json`](https://github.com/CodingBlackFemales/cbf-community-website/blob/master/functions/package.json)
- `npm run local` or `node index.js` - this will launch the website locally

If all went well 🤞🏿 you can now view your local version of cbf community website here:

## http://localhost:3000 🎊

#### If you have any problems or suggestions let us know so we can update this README

### That's it! Happy coding black females

# 👩🏿‍💻

## Credits

Bootstrap theme cloned from Start Bootstrap's [Stylish Portfolio](https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio)

---

## Pushing to github

#### Are you being prompted to enter your username and password when trying to push to github on your command line? Then follow these steps:

1. On github go to your personal `settings` then click on `developer settings`
2. Click on the tab `personal access tokens`
3. Generate a new access token
4. Click the box for repo when given options
5. Make sure to enter a note, you can make it something like `Mac terminal`
6. Scroll to the bottom and click the button `generate new token`
7. Remember to save this token somewhere safe
8. Go back to your command line and when prompted to enter your username enter your github username, for your password enter the personal access token we just generated
9. Voila!
