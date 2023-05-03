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

**Currently working in update-prisma branch**

To-do:


- animate clap-out
- populate DB
- remove x in search for other browsers
- show an adequate error message when no data
- add select & delete to search bar

- add tags to seedDocs √
- update ResourceType should be an array (√)
- update seed-scripts, card & indexation (√?)

- redesign all the Icons √
- repair fetch, make project take local data when fetch fails √
- fix the card (why growing) √
- fix seedNgo script √
- prevent Search from chaotically jumping whenever I am typing √
- remove x-for (reset-default Button by Chrome) √
- cards behavior for mobile √
- fix payPal Icon √
- fix reset when no character in search √
- fix card √



