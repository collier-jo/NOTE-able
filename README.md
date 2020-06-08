# Notes App Version 2 

## Aims
- To create a single page app
- To understand front end MVC 
- To use node 
- Have a better understanding of asynchronous behaviour in JS 
- To diagram the flow how all parts of the app interact 
 
## Technologies & Concepts

- Node (HTTP Server)
- My own testing framework 
- Frontend, single page web apps
- Events and event handlers
- Manipulating the Document Object Model (DOM)
- Ajax
- Frontend templating
- Frontend routing

====

The last time I attempted this project I was able to create a front end app which was test driven using my own testing framework. While, this did as said I do not believe I understood the following:

- The MVC architecture
- Front end routing 
- Using Node
- Ajax requests 


## What I am bringing forward 
- My own testing framework 
- Manipulating the DOM 
- Event handlers 

====

## Domain Model

NotesModel | 
            - Read 
            - Constructed with text

NotesList  | 
            - ReadAll
            - Store/Add <This is called in create>
            - Convert to HTML 
            - Create <Coupled with NotesModel>

## Input / Output Table


## User Stories 

As a user, 
So I can create a single note 
I want to write a note with text

As a user, 
So I can remeber what I wrote
I want to be read this single note

As a user, 
So I can keep multiple notes 
I would like to see all the notes I have written

As a programmer,
So I can use the single note data on a web page 
I need this data saved as a string of HTML

As a programmer,
So I can use the data from all the notes create 
I need this HTML converter to be able to use more than one note 

As a programmer, 
So I can create a single page app
I would like the programme to have a HTTP Server 

## What I learnt:

(Expected:)



(Unexpected:)

- Constructor Pattern 
- Prototype Pattern 
- HTML Testing with own framework 
- Converting strings to HTML 

## Key Resources 



