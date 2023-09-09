# TypescriptTutorial
Typescript short tutorial project
### Features implementation:
1. Variables & datatypes
2. Loops & Conditionals
3. Classes & Access Modifier & Accessor
4. Constructor parameter & Import/Export
5. Inheritance
   1. Abstract class
   1. Interfaces
  
### Commands 
      #### Pre-requisite :
      1. Install node js from website https://nodejs.org/en/download
      2. Install npm - node pakage manager 
      3. Install tsc - typescript compiler

1. ##### Compile Command :
      `tsc <filename>.ts`

   Note:
   * this will generate the js file whether the ts has error or not.
   * to overcomes the above issue add below compiler option to avoid generating js file with error
        * noEmitOnError
        * `tsc --noEmitOnError <filename>.ts`
   * This might generate error TS1056: Accessors are only available when targeting ECMAScript 5 and higher
   * to overcome the above issue add below compiler option
       * --target es2016/ES5/ES6
       *  `tsc --target es2016 <filename>.js`
   
   * When the compiler options increase we can write them in a file to pick up every time the files are compiled: Tsconfig.json
   * with following command user can generate default Tsconfig.json file and modify the options as per the requirement:
        * run the command in root folder to be applicable for all ts files.
        * Command : `tsc --init`

3. ##### Run Command :
   `node <filename>.js`



