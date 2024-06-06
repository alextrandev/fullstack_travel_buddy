# Travel buddy

This is a collaborating web application project called "ForeMap - travel buddy" that helps users plan trips by providing information on destinations, weather forecasts, and travel itineraries
**Live page [here](https://foremap.alextran.dev/)**

## Functions:
**Backend: serve as an API with endpoints for:**
- ```/api/destinations``` All popular destinations: will return name and image of each destination
- ```/api/destination/:city``` Single destinations: will fetch from various APIs and return infos about the destination
- ```/api/weather/:city``` Single destination weather: will return weather info of the destination
- ```/api/coordinates/:city``` Return city center coordinates and popular attraction coordinates
- ```/api/destination/:city/country```Return info about the country of origin of the destination

**Frontend: focus on user experience with beautiful design, animations, and mobile responsiveness**
Homepage
- Search bar for all destinations
- Destination roullete: give user 3 mystery destination cards to choose
- Popular destinations: a grid of recommended popular tourist destiantion
- Map: show all popular destinations in the world map for user to choose

Destination page:
- Landing section with a photo, short description of the city and Wikipedia link
- Attraction section feature popular attractions with names, pictures an wiki links
- Info and weather section: display helpful information for tourist purpose
- Itinerary planner with attraction locations show on map, route and suggested visit time

## Technologies used

Languages:

- PHP
- Javascript
- HTML
- CSS

Libraries and frameworks:
Backend:
- Symfony7
- Nelmio Cors Bundle
- Http-client

Frontend:
- React Vite
- Axios
- React-router-dom
- React/leaflet (map intergration)
- tsparticles (animation)
- ldrs (loading screen)

## Setup and usage

**To host project locally**
1. Clone the project: ``` git clone https://github.com/alextrandev/fullstack_travel_buddy.git```
2. Change to frontend directory: ```cd fullstack_travel_buddy/frontend```
3. Install frontend dependencies: ```npm i```
4. Host the frontend in local server: ```npm run dev -- --port=5173```
5. Open a new terminal, cd to backend folder.
6. Install backend dependencies: ```composer i```
7. Host the backend in local server: ```symfony serve --port=8000```

Frontend should run on local port: ```http://localhost:5173```
Backend should run on local port: ```https://127.0.0.1:8000```

## Screenshot
**Homepage**
![homepage screenshot](![Alt text](./frontend/Public/images/screenshots/homepage-screenshot.png))

**Homepage destination roullette**
![Homepage destination roullette screenshot](frontend/Public/images/screenshots/homepage-roullette-screenshot.png)

**Destination page**
![Destination page screenshot](frontend/Public/images/screenshots/destination-page-screenshot.png)

**Mobile version**
Homepage            |  Destination page
:-------------------------:|:-------------------------:
![homepage mobile screenshot](frontend/Public/images/screenshots/homepage-mobile-screenshot.png) |  ![destination page mobile screenshot](frontend/Public/images/screenshots/destination-page-mobile-screenshot.png)

## For development team

**To setup local development environment**
1. Clone the project: ``` git clone https://github.com/alextrandev/fullstack_travel_buddy.git```
2. Change to frontend directory: ```cd fullstack_travel_buddy/frontend```
3. Install frontend dependencies: ```npm i```
4. Host the frontend in local server: ```npm run dev -- --port=5173```. If it show port error, close all terminal and stop docker desktop containers
5. Open a new terminal, cd to backend folder.
6. Install backend dependencies: ```composer i```
7. Host the backend in local server: ```symfony serve --port=8000```.  If it show port error, close all terminal and stop docker desktop containers

Frontend should run on local port: ```http://localhost:5173```
Backend should run on local port: ```https://127.0.0.1:8000```

**Before working on a feature**
1. Remember to pull the changes from main branch ```git pull origin main```
2. Create a new branch with your name and the feature ```git checkout -b Branch-Name```
Branch name should be: ```PurposeOfTheBranch/NameOfTheBacklogItem-some-description```
Example:
- Working on a new feature FE-003 ```git checkout -b feature/FE-003-nav-bar```
- Fix a bug BF-011: ```git checkout -b bugfix/BF-011-nav-bar-have-too-much-padding```
3. Finish the coding and commit the changes
4. Push to online repo ```git push origin Branch-Name``` use the same branch name here. **Never push to main or any other branches**
5. Go to the github repo
6. Find the Create Pull Request button, add a reviewer and create the request.
7. Wait for the request to be accepted. In the meantime, you can create a new branch and work on something else.

**Testing the pull request  before merging**

1. Fetch changes `git fetch origin`
2. Checkout the branch `git checkout -b branch-name origin/branch-name`
3. Reinstall dependencies in both frontend and backend `npm i` and `composer i`
4. Host both front and backend if haven't
5. Test the changes
6. If everything is ok, go to github and merge the request

## Authors and acknowledgment

**Mentor and Client**
- [Margit Tennosaar](https://github.com/margittennosaar)
- [Santosh Kalwar](https://github.com/kalwar)

**Dev team**
- [Alex Tran](https://github.com/alextrandev) - Fullstack developer
- [Arina Belugina](https://github.com/Nanao907) - Frontend developer
- [Sheila Onyango](https://github.com/SheilaOnyango) - Frontend developer