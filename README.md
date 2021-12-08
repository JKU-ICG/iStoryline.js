# iStoryline.js

![](https://travis-ci.com/tangtan/iStoryline.js.svg?branch=master)
![](https://img.shields.io/github/downloads/tangtan/iStoryline.js/total)
![](https://img.shields.io/github/package-json/v/tangtan/iStoryline.js)
![](https://img.shields.io/github/license/tangtan/iStoryline.js)

iStoryline.js is a JavaScript library for producing storyline visualizations with diverse sketchy styles. [Storyline visualization](https://xkcd.com/657/) is a fancy way to tell a story. Lines represent characters in the story. This fancy visualization naturally has some advantages in explaining the story:

- The overall trend of the lines can vividly represent the evolution of the plot.
- The interval between the lines can also display the relation of the characters.

![storylines](https://user-images.githubusercontent.com/18184786/88198333-2cea9600-cc76-11ea-83fa-bbf2676fc61d.png)

Example storyline visualizations created using iStoryline.js. The styles and visual labels are customized manually to embellish the storylines.
For more information, please check [our paper](http://www.tantang.org/publication/2018_infovis_istoryline/2018_infovis_istoryline.pdf) and the [supplement material](https://istoryline.github.io/).

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) or [yarn](https://yarnpkg.com/lang/en/docs/cli/add/) to install iStoryline.

```Shell
npm install i-storyline-js
```

or

```Shell
yarn add i-storyline-js
```

## Basic Usage

```JavaScript
import iStoryline from "i-storyline-js"
let iStoryliner = new iStoryline();

// generate storyline visualizations from the story script
let storyScriptUrl = './data/xml/Redcap.xml';

// graph can be drawed using any canvas or svg libraries
let graph = iStoryliner.load(storyScriptUrl);

// obtain the characters names
console.log(graph.characters);  // ['Red cap', 'Mother', 'Wolf', 'GrandMa']

// obtain the paths of the characters
console.log(graph.storylines);  // [[[x1, y1], [x2, y2], ...], ...]
```

### TODO

- provide the drawing APIs based on [canvas](https://www.w3schools.com/html/html5_canvas.asp) or [svg](https://www.w3schools.com/html/html5_svg.asp).

## Storyline Board

iStoryline.js provides a build-in editor for producing storyline visualizations.

1. Install Node.js (>= 10.0)

2. Install dependencies `npm i` or `yarn`

3. Start the editor `npm run start`

4. Please visit [localhost:8080](http://localhost:8080)

## Documentation

- [Story Script](https://github.com/tangtan/iStoryline.js/wiki/Story-Script)

- [Data Workflow](https://github.com/tangtan/iStoryline.js/wiki/Data-Workflow)

- [API Reference](https://github.com/tangtan/iStoryline.js/wiki/API-Reference)

- [Graph Drawing](https://github.com/tangtan/iStoryline.js/wiki/Graph-Drawing)

## Reference

1. **T. Tang**, S. Rubab, J. Lai, W. Cui, L. Yu, and **Y. Wu**. "iStoryline: Effective Convergence to Hand-drawn Storylines. IEEE Transactions on Visualization and Computer Graphics", 25(1):769-778, 2019.
2. S. Liu, **Y. Wu**, E. Wei, M. Liu, and Y. Liu. "StoryFlow: Tracking the Evolution of Stories. IEEE Transactions on Visualization and Computer Graphics", 19(12):2436–2445, 2013.

## Citation

We appreciate your citation if this library contributes to your work.

```bib
@article{iStoryline2018,
  title = {{iStoryline: Effective Convergence to Hand-drawn Storylines}},
  author = {Tang, Tan and Rubab, Sadia and Lai, Jiewen and Cui, Weiwei and Yu, Lingyun and Wu, Yingcai},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  volume = {25},
  number = {1},
  pages = {769--778},
  year = {2018},
  publisher = {IEEE}
}
```

## License

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
