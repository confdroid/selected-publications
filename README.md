# Selected Publications

This repository collects the publications in CASTLE Research Group. 

CASTLE members can push their new publications in this repository. 
The publication website of CASTLE homepage will fetch data in this repository and display the publications [here](http://sccpu2.cse.ust.hk/castle/publication/).

## Add Your Publication

### Clone or Pull the Project

Clone the project if you don't have it previously:
```bash
git clone https://github.com/CastleLab/selected-publications.git && cd selected-publications
```

Pull the latest commit in the root directory if you already have it.
```bash
git pull
```

### Add Publication Declaration File

We use a declaration file in `js` or `json` format to declare the publications.
To add publications:
1. Copy and rename a template ([json template](./publications.template.json) and [js template](./publications.template.js)), e.g., firstName_lastName.json, then put it into `collection` folder (or any sub-folders in it).
2. Modify the template file and declare your publications. You can find explanations of data fields in the template files.
3. (Optional) Test your declaration file, as explained in section blow: Test Your Publication Declaration File.
3. Commit your changes in git and push to this repository. CASTLE members in the [CastleLab](https://github.com/CastleLab) GitHub organization should have the privilege to push to this repository. If you don't, please contact Wuqi Aaron Zhang (wzhangcb@connect.ust.hk).
   
Note that you can declare multiple publications in one file since the template file declares an array in it.

The `json` declaration file is the most common choice. 
But sometimes the limitations of `json` syntax is annoying, e.g., cannot add comments, special characters need to be escaped, no multiline strings, etc.
In these cases, you can choose to use `js` files, which is more flexible in terms of syntax.

## Test Your Publication Declaration File (Optional)

You may need to test whether the your declaration file is valid or not. 
Invalid declarations will be ignored and there will be no warnings. 

Therefore, we provide a script to help you test. 

The script is written in JavaScript, so you need to have [Node.js](https://nodejs.org/en/) environment installed on your computer. 

After the Node.js environment is set up, execute the following commands in the terminal under the root directory of this repository.
```bash
npm install
npm test
```

If no errors are printed in the console, you are good to push it on GitHub. 
Your publications will automatically added on CASTLE HomePage. 

## Contact

This repository and publication website are maintained by Wuqi Aaron Zhang ([@Troublor](https://github.com/Troublor)).
Please add issues in this repository or directly contact him if you encounter any problems. 

## TODO

- [ ] Automatically translate `.bib` file into publication declarations.