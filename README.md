# My First React Application
I've worked through the React tutorial and I've watch the Wes Bos
React course. Now it is time to write my first React application
from scratch. 

The following shows what I did step by step.

Each step can be found on the cooresponding branch. 

## step 01 create development environment
To get started did the following.

From https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
* _npx create-react-app react-todo-list_
* _cd react-todo-list_ 

Removed the .git directory 
* _rm -rf .git_

Created github repository react-todo-list

Hook up the react-todo-list with the github repository
* _git init_
* _git add ._
* _git commit -m "initial commit"_
* _git remote add origin https://github.com/gpratte/react-todo-list.git_
* _git push origin master_

Make sure the initial react application works. Should see the default react page in the web browser at http://localhost:3000/
* _npm start_


Edit the README.md with these notes and push changes to master.
* _git add ._
* _git commit -m "update readme"_
* _git push origin master_


Create the first branch 
* _git checkout -b step-01-create-development-environment_
* _git push origin step-01-create-development-environment_

## step 02 UI markup
Created an artifacts/mockup directory. In that directory create an 
html and css file for how the web page will look.

## step 03 render html
Render the same html as the mockup in the react application.

The Reminder component does not have any smarts and always renders "buy milk".

## step 04 add todo
Clicking the _New Reminder_ button results in an empty reminder added to the 
beginning of the list of reminders

## step 05 remove todo
Clicking the delete button results in the reminder being removed from the list. 

To make thing easier to understand numbered the reminders by using a placeholder with the id.
