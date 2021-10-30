# Web-full-stack-P1
Project 1, personal website

Log-1:
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

Log2: 
    problem identify: <a> tag cannot nest other tag without href
    problem identify: JS, Try to manipulate display to none and use syntax:
            document.getElementsByClassName("nav-icon").style.display = "none";
    it dosen't work becasue the document.getElementsByClassName("nav-icon") return an array,
    therefore, it should change to syntax:
             var icon = document.getElementsByClassName("nav-icon");
            for(var i=0;i<icon.length;i++){icon[i].style.display = "none";}