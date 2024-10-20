# Getting Started with E-commerce-Listing Page


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## About Project

To build the UI for an E-commerce Listing Page

## Aim of the project 

The page should display a list of products, and 
each product should have an option to either view the product or add it to the 
cart. There will be no dedicated product page, so when a user clicks "View 
Product," they should be redirected to a custom Thank You page. 
Additionally, when users click "Add to Cart," a modal should open, as per ui design 

## Technologies Used 
    
    React-js 

## Main Focus 

1. Header Section:
     a. A search bar for searching products.
     b. Icons for profile and cart.

2. Product List Section:
     a. Display a grid/list of products based on the Figma design.
     b. Each product card should include:
         i. Product Image
         ii. Product Name
         iii. Price
         iv. "View Product" and "Add to Cart" buttons.
      c. Clicking "View Product" should redirect the user to a custom 
              "Thank You" page. There will be no product details page, so you 
              are required to design a Thank You page from scratch.

3. Add to Cart Modal:
     a. Clicking “Add to Cart” on any product should open a modal that 
            displays the product’s details and an option to confirm adding the 
             product to the cart.
      b. The modal design is included in the Figma file and should be 
            closely followed.

4. Pagination:
     a. Implement pagination to navigate through multiple product 
       listings (functional but mock data is acceptable).

5. Thank You Page:
      a. Create a simple "Thank You" page to which users are redirected 
           after clicking "View Product". 
