# Selected Publications

This repository collects the publications in CASTLE Research Group. 

CASTLE members can push their new publications in this repository. 
The publication website of CASTLE homepage will fetch data in this repository and display the publications [here](http://sccpu2.cse.ust.hk/castle/publication/).

## Add Your Publications

1. Create your JSON file under `collection` folder, e.g., firstName_lastName.json
2. Add your publication with the following schema: 

```bash
[
  {
    "title": "Title of your paper",
    "date": "date of publication, e.g., 2021-12-31, following ECMA date string format: https://262.ecma-international.org/11.0/#sec-date-time-string-format",
    "authors": [
      "First Author", "Second Author"
    ],
    "venue": "Full name of the conference or journal name",
    "venueShort": "abbreviation of conference or journal, e.g., ESEC/FSE",
    "tags": [ 
      "Tag 1",
      "Tag 2"
    ],
    "abstract": "(optional) abstract of your paper",
    "projectUrl": "(optional) project url",
    "paperUrl": "(optional) paper url",
    "slidesUrl": "(optional) slides url",
    "bibtex": "(optional) bibtex"
  },
  {
    ...
  },
  ...
]
```

In case you are frustrated by the limitation of `json` format, e.g., need to escape special characters. 
It is also possible to define the publication in `js` files. 
We provide a template in [publications.template.js](./publications.template.js). 
You may modify it and add it to the `collection` folder. 

## Test Your Publication Declaration File Structure

You need to have Node.js environment.

```bash
npm install
npm test
```

If no errors are printed in the console, you are good to push it on GitHub. 
Your publications will automatically added on CASTLE HomePage. 

## Contact

This repository and publication website are maintained by Wuqi Aaron Zhang ([@Troublor](https://github.com/Troublor)).
Please add issues in this repository or directly contact him if you encounter any problems. 