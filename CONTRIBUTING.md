# CONTRIBUTING GUIDELINES


## Getting Started
> Hello world!

> Any changes made to `main` will **automatically** be deployed! 


## Adding Data
> Please refer to previous year files to see how everything is organized! 

> Any additional images should ideally be the `.webp` format!

### Board Images
> Everyone should have a headshot photo but it's okay if not!
1. Under `src/assets/`, make a new directory named `sh-[year]`.
2. Add in any heashots here.
3. Make sure the images are in `.webp` format for optimization!

### Year Data
> There's quite a few things that need to be added for the information to be archived for each new year of SparkHacks.

1. Under `src/data`, make a copy of the `sampleData.ts` file and rename it to `sh[year]Data.ts`.
2. Add in the basic information and statistics about the year. 
    * This information should be added after the event has already passed, one, to prevent spoilers, and two, to have accurate numbers.
    * The opening and closing slides should be imported as `.pdf` inside of the `public/slides` directory! When adding this information to the `.ts` file, use the path `slides/sh[year]-[opening/closing].pdf`.
3. Add in information about the board. 
    * When inputting the photo path, use format `sh-[year]/[person].webp`.
    * For anyone who doesn't have a haedshot, use the image located at `src/assets/easter-eggs/anonymous.webp`.
4. Now head into `src/teamWindowConfig.ts` and create a new property with the new info. 
    * The primary things that should be changed are the `id` and `title` for each of the teams.
    * Make sure the `id` is consistent with the format: `win-[year]-[team]`.
    * For more variability in the default positions of the windows, change the `x` and `y` properties.
5. Now go into `src/components/YearGrid.astro` and under the `years` array, add the new year and any info. 
    * Make sure the `win` property is consistent with the format: `win-[year]`.
    * The `color` can be any color that best symbolizes the theme for that year. 
    * For the icon in `YearGrid.astro`, just use a very basic SVG for it. I pulled them from svgrepo and placed them into the `svgBank.ts` as pure svg paths. Please try and optimize the paths before using them! 
    * If changes are to be made before the theme reveal, use the `question_mark` SVG in the `svgBank.ts`!
6. Now head into `src/components/info/InfoWindow.astro` and add a new element to the `teamDataMap`.
    * Make sure the logo and data gets imported at the top of this file.
    * Colors should follow the TailwindCSS convention for colors in a gradient format: `from-[color] to-[color]`. Again, use the color that best represents the theme for that year.
7. Under `src/components/info/Team.astro`, add a new item to the `photoMap` at the top.
    * This is just to ensure images are loaded in properly and for more image optimization.
8. Under `src/components/info/Winners.astro`, import the yearly data file at the top and add a new element to `dataMap` to grab the winners.
9. Under `src/components/internet/Sagas.astro`, add a new element to the `photoMap`.
10. Finally! We can go into `src/index.astro` and add in a new item for `yearWindows`. 
    * The color is determined by a preset map within `src/components/Window.astro`.
    * If new colors are to be added, simply add the TailwindCSS color gradient to the `headerColorMap` inside of the `src/components/Window.astro` file.


### Sagas
> Sagas from the SparkHacks Board is a fun little section to honor all the previous boards! It's filled with quotes about what it's like to be on the SparkHacks board.

All of the information for Sagas is stored within `src/components/internet/Sagas.astro`.

Simple add a new entry to `sparkSagas` list with the quote, the person, their headshot, and their role.
* For the role, I did their most recent role. 

<!-- it will be a mess -->
### New Teams 
> I do not anticipate new teams to be formed, but by the off-chance that new teams need to be added, there is a lot more that needs to be done. 

1. 



## Style Guidelines
> Primarily, we are using the DotGothic16 and Fredoka fonts.

> Many of the components have a thickened border and a drop-shadow style, which should already be implemented into the windows.

## Issues
Utilize the GitHub issues to keep track of any issues!

Use branches to develop fixes or changes. 

Create pull requests.

> Any changes made to `main` will **automatically** be deployed! Keep this in mind when developing!

## Additional Features
> Feel free to add on any additional features that would make the site more fun and interactive. Any silly bonus easter eggs, custom backgrounds, anything goes!

Some ideas that we had:

* Interactive paint app (SH Paint) like MS Paint 
* Interactive desktop pets
* Dark mode
* An animated "login" page
* A "now playing" window
* Other animations

## Contact
> For any questions, comments, or other inquiries, feel free to reach out to Josephine Lee. 
<details>
  <summary>Josephine Lee</summary>
    <ul>
        <li><a href="mailto:jbl.noetic@gmail.com" target="_blank">Email</a></li>
        <li><a href="https://www.linkedin.com/in/josephine-b-l/" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/abyssaldragonz" target="_blank">GitHub</a></li>
        <li><a href="https://discord.com/users/1202960209065152525" target="_blank">Discord</a></li>
    </ul>
</details>