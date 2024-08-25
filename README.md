# SKN Material UI Type Extension Library

<img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F14-TypeScript-SMT.svg?alt=media&token=e8fb7bd7-3ef2-465b-958b-f596a6095acb" alt="ui" />

> TypeScript React

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Fmui-types)](https://www.npmjs.com/package/@best-skn/mui-types) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### This is a simple TypeScript Type Extension Library for Material UI 5, React 18 & also for Next.js 14

### I made this library so that I can use it in all of my Next.js 14 projects without writing the same codes over and over again

&nbsp;

## **_Details:_**

### **`Sx` Type**

- It provides total intellisense of material ui styles in separate files to be used as `sx`
- This type will help to de-clutter your jsx/tsx components because you can create `sx` styles outside the
  components and later use it inside them
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- React
- Next.js

&nbsp;

## **_Requirements:_**

### This library has peer dependency for React & React DOM of minimum 18.3.1. It may or may not work on 19.x

### It has peer dependency for Material UI of minimum 5.16.7. It may or may not work on 6.x

### This library is intended to be used in Next.js of minimum 14.2.3. It may or may not work on 15.x

- 💀 Minimum [react](https://www.npmjs.com/package/react) Version: `18.3.1`
- 💀 Minimum [@types/react](https://www.npmjs.com/package/@types/react) Version: `18.3.3`
- 💀 Minimum [react-dom](https://www.npmjs.com/package/react-dom) Version: `18.3.1`
- 💀 Minimum [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) Version: `18.3.0`
- 💀 Minimum [next](https://www.npmjs.com/package/next) Version: `14.2.3`
- 💀 Minimum [material-ui](https://www.npmjs.com/package/@mui/material) Version: `5.16.7`

&nbsp;

## **_Complementary Libraries:_**

- [@best-skn/react-types](https://www.npmjs.com/package/@best-skn/react-types)
- [@best-skn/next-types](https://www.npmjs.com/package/@best-skn/next-types)
- [@best-skn/framer-types](https://www.npmjs.com/package/@best-skn/framer-types)

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm add -D @best-skn/mui-types
> #or
> yarn add -D @best-skn/mui-types
> #or
> pnpm add -D @best-skn/mui-types
> #or
> bun add -D @best-skn/mui-types
> ```

### Create a directory called `types` in the root location of your project, and create a file called `mui.d.ts`, then do this

> ```typescript
> import "@best-skn/mui-types";
> ```

### Check your `tsconfig.json` if `includes` property has `**/*.ts`, `**/*.tsx` otherwise the type definition file may not work

### Now Inside your Next.js 14 Project, use the package like this (Just an example)

#### **_`Sx` Type:_**

##### (1) Material UI style `sx` in separate file

> ```typescript
> import type { Sx } from "@mui/material";
>
> type Key = "container" | "box"; // * Create sx names here
>
> export const sx: Sx<Key> = {
>   //* You'll get total intellisense for `sx` names
>   container: {
>     //* You'll get intellisense for Material UI SX styles inside
>     display: "flex",
>     //* other styles here...
>   },
>   box: {
>     color: "blue",
>     //* other styles here...
>   },
> };
> ```

##### (2) Import & use the created `sx` inside components in Next.js

> ```typescript jsx
> "use client"
>
>  import Typography from "@mui/material/Typography";
>  import { sx } from "./sx.ts";
>
>  const HomeComponent: React.FC<unknown> = () => {
>    return (
>      <Typography
>        variant="h6"
>        component="div"
>        sx={sx.box} //* Use `sx` style here
>      >
>        Home Component
>      </Typography>
>    );
>  };
>
>  export default HomeComponent;
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍⚕️`Tanjila Hasan Trina`: The long lost love of my life. The course of nature separated us from our paths and put us in separate places far away from each other. But no matter how separated we are right now, each and every moment of mine is only dedicated to you. We may not see each other in this lifetime as it seems but I will find you again in the next life. I just want to say: `世界は残酷だ それでも君を愛すよ`
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License
