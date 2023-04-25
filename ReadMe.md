**How to work in this file:**

alt+v for √
https://docs.github.com/de/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


** How to run the server:**
node --experimental-modules src/server/server.mjs

**How to run devServer:**
pnpm run dev


Notes on the current stage of data-infrastructure:

////MAIN.JSX:
//initialize  context-variables for indxa & fetched Data
export const contextData = React.createContext([]);
export const currentIndexa = React.createContext({});

///CONTENT.JSX
//shares with <Search /> and <Cards /> useState variables:

...with <Search />
a. setNotSearching useState setter Function, because errors when rendering Cards depenend on if the user is Searching
b. setSearchResults to share them with cards.

To-do:
- fix seedNgo script √
- prevent Search from chaotically jumping whenever I am typing √
- remove x-for (reset-default Button by Chrome) √
- cards behavior for mobile √
- CHANGE ^no img on mobile, links on Tap, reset on scroll. Animate (?)
- remove the same for other browsers
- populate DB
- add keywords to indexation
- show an adequate error message when no data
- fix payPal Icon
- fix reset when no character in search √
- fix card √
- update ResourceType should be an array, then update seed-scripts, card & indexation


