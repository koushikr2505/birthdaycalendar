
## Readme

- Please run using a local web server.

## Tech
Following are used to make the app functional. 
- reactjs 
- html
- css
- babel transpiler to transpile JSX code feature used in react to plain js.
- Javascript
- Script type module feature to have components seperated and imported as required 
  and improve the readabilty and maintainability of the code.

## Unit Test scenarios handled:

### Friends list JSON input:
1) onChange of input check if its valid JSON format. If its invalid throw error message.
2) onChange of input check if the value is updated to the state so that the components have the updated data to render.
3) Remove a comma or quote from input and see if the invalida data message is displayed on live change of the input.

### Update Year:
1) On entering a year and clicking on update , check for year that's not in the input and throw appropriate message to the user.
2) Check if the data filtered based on the year are placed into corresponding week of the day. 
3) Set the default year to a year that's not in the input data set and see if the error message is displayed.

### Calendar:
1) Check if the cards for all the days of the week are rendered.
2) Check if No Birthdays text and empty styles are applied for the day that has no birthdays.
3) Check if the initials of the persons are placed in square boxes inside the day card.
4) Check if the persons displayed are sorted from youngest to oldest.
5) If only one birthday in the day , check if the initials occupy the entire available space.
6) If only one birthday in the day , check if the no of birthdays text displayed below is singular ,(i.e) "1 birthday"
7) If multiple birthdays are there in the day, check if the no of birthdays text displayed below is plural,(i.e) "2 birthdays"