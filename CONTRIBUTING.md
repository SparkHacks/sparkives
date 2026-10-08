# CONTRIBUTING GUIDELINES


## Getting Started
> Hello!

> Any changes made to `main` will **automatically** be deployed! 


## Adding Data
> Please refer to previous year files to see how everything is organized! 

> Any additional images should ideally be the `.webp` format!

### Board Images
> Everyone should have a headshot photo but it's okay if not!
1. Under `src/assets/`, make a new directory named `sh-[year]`.
2. Add in any heashots or team photos here.
3. Make sure the images are in `.webp` format for optimization!

### Year Data
> There's quite a few things that need to be added for the information to be archived for each new year of SparkHacks.

1. Under `src/data`, make a copy of the `sampleData.ts` file and rename it to `sh[year]Data.ts`.
2. Add in the basic information and statistics about the year. 
    * This information should be added after the event has already passed, one, to prevent spoilers, and two, to have accurate numbers.
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
6. Now head into `src/components/info/InfoWindow.astro` and add a new element to `teamDataMap`.
    * Make sure the logo and data gets imported at the top of this file!
    * 
    * Colors should follow the TailwindCSS convention for colors in a gradient format: `from-[color] to-[color]`. Again, use the color that best represents the theme for that year.

###



## Style Guidelines
> Primarily, we are using the DotGothic16 and Fredoka fonts.

> Many of the components have a thickened border and a drop-shadow style, which should already be implemented into the windows.

## Issues
Utilize the GitHub issues to keep track of any issues!

Use branches to develop fixes or changes. 

Create pull requests.

> Any changes made to `main` will **automatically** be deployed! Keep this in mind when developing!

## Additional Features
> 

## Contact
> For any questions, comments, or other inquiries, feel free to reach out to Josephine Lee. 
<details>
  <summary>Josephine Lee</summary>
    &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/josephine-b-l/" target="_blank">
    LinkedIn
  </a>
</details>