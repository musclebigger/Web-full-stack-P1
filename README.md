# Web-full-stack-P1
Project 1, personal website

<h1>Log-1:</h1>
Problems need to be fixed which is pointed by tutor list 1.0:

    naming problem: 
        * Change the home, about etc. html tag to "<section>" rather than "<div>"
        * Integrate Sass files to one document
        * Images' width probelms that it should change to width to max-width and change width to 100%, in order to images adjustable as the web window si changed
        * About section needs to change the name of left/right to top/bottom in order to align with JS structure
        * Space in the html document should be deleted
        * DEM naimg rule in the html tag class, which should be changed

Carousel solution:
https://www.youtube.com/watch?v=wx2dBS3vtFY&list=PLRCvSNiMyEmxBfXuFuQ70uxHcV9itxfTZ&index=6

functions in building:

    1. structure for mobile:
        i. side-bar to hamburger bar based on the size of screen
        ii. width problems need to be fixed for each page
    2. animation for loding webpage (selective)
    3. color change for the whole page (selective)
    4. animtaion for picture(zoom up)

<h1>Log-2:</h1>
problem identify: 

        1. a tag cannot nest other tag without ‘href’
        2. JS, Try to manipulate display to none and use syntax:
            document.getElementsByClassName("nav-icon").style.display = "none";
            it dosen't work becasue the document.getElementsByClassName("nav-icon") return an array,
            therefore, it should change to syntax:
             var icon = document.getElementsByClassName("nav-icon");
            for(var i=0;i《icon.length;i++){icon[i].style.display= "none";}

Last log fixed& finished functions:

        1. Integrate Sass files to one document
        2. side-bar to hamburger bar based on the size of screen
        3. width problems need to be fixed for each page
        4. Images' width probelms that it should change to width to max-width and change width to 100%, in order to images adjustable as the web window si changed
        5. About section needs to change the name of left/right to top/bottom in order to align with JS structure
        6. Space in the html document should be deleted
        7. Fixed the color of sidebar hover

functions in building:

        (remaining functions last function in building)
            1. animation for loding webpage (selective)
            2. color change for the whole page (selective)
            3. animtaion for picture(zoom up)
        (new functions)
            1. The element in the sidebar can be keep the color after cliking it
            2. hamburger bar's content should be polished 
            3. social media icons for first page

waiting problems:

             * Change the home, about etc. html tag to "<section>" rather than "<div>"
             * DEM naimg rule in the html tag class, which should be changed

Problems need to be fixed which is pointed by tutor list 2.0:
