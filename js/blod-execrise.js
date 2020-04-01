// Skip to content
// Search or jump to…

// Pull requests
// Issues
// Marketplace
// Explore
 
// @Zohairajweh 
// TECHCareers-by-Manpower
// /
// wb-javascript-review
// 1
// 01
//  Code Issues 0 Pull requests 0 Actions Projects 0 Wiki Security Insights
// wb-javascript-review/js/blog-exercise.js /
//  Warren Uhrich Update blog exercise.
// 51d7b44 6 minutes ago
// 63 lines (59 sloc)  2.35 KB
  
/**
 * JavaScript: Blog Exercise.
 * @author  TECHCareers by Manpower
 * @date    2020.03.31
//  * @summary Iterates through blog articles and outputs an HTML representation of each.
 * Goals:
 * ======
 * - Output into the DOM.
 * - Use a template literal.
 * - Use a for...of loop.
 * - Instantiate an object or object(s) of a class.
 * - Add an element to an array.
 * - Loop through (iterate through) an array.
 * - If you are adding functions or using methods, use ES6 standard.
 */

class Article {
  constructor ( title = 'Blog Title', content = 'Lorem ipsum...' )
  {
    this.title = title;
    this.content = content;
  }
  output ( element = null ) // Void method (no return.)
  {
    // Make sure something was passed in.
    if ( element !== null )
    {
      // Populate the element.
      element.innerHTML += `
        <h1 style="color: blue;">Title :${this.title}</h1>
          <h2 style="color: rgb(38, 53, 14);">Content :${this.content}</h2>
      
      `;
    }
  }
  
}



 


const blogArticles = [
  new Article(
    'First Day of Class (C#)',
    'Oh! C# is a programming language, often used for Windows programs... this could be really useful! It has variables, loops, and even methods; a lot to learn, but it really opens up doors!'
  
  
    ),
    
  new Article(
    'How to Build Websites! (HTML)',
    'What a great day! We learned all about HTML, or, HyperText Markup Language. It is the content and skeleton of the website.'
  ),
  new Article(
    'Brand new Topic (CSS)',
    'Today we learned about CSS, or, Cascading StyleSheets - how cool! This language helps us make our sites look pretty, we get to define the styles.'
  ),
  new Article(
    'Another New Topic!? (JS)',
    'Wow! I thought the other languages were pretty neat, but this one takes the cake so far. JS, or JavaScript, can be used to bring our websites to LIFE! It is used for functionality within the webpage.'
  ),
  new Article(
    'Adding on to our JS (TS)',
    'Who knew we could use something to check our code for errors and offer additional features to JavaScript!? TS, or TypeScript, is a superset of JavaScript that compiles to regular JS. The extra features will come in handy!'
  ),
  new Article(
    'Time to React',
    'Our very first large JavaScript framework, how exciting! Now we can build web components and build more complex front-ends with ease... a bit of a learning curve but so useful now that we\'re getting the hang of it!'
  )

];

blogArticles.splice(3,0,new Article('SASS','Sass (short for syntactically awesome style sheets) is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum.[2][3] After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a scripting language used in Sass files.') );
const myElement = document.body;

for ( let i = 0; i < blogArticles.length; i = i + 1 ){
    console.log(blogArticles[i]);
    blogArticles[i].output(myElement);
}


