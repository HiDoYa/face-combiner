# face-combiner
A web app that combines faces in silly ways using uploaded images of your face.

## Overview
This project was relatively simple because the user would just upload images to each three cateogries (top, middle, and bottom) and all the app had to do was to display the images stacked on top of each other and lets the user scroll through the images. I also added a background color changer, which was done using jscolorpicker. 

#### Time Spent
This project took a few weeks to complete.  
I'd estimate that I spent 60% of my time getting the file upload to process and show the image properly, 30% of the time with HTML and CSS styling, and 10% of the time was to get the color picker to work.

#### Tools Used
I used jQuery, bootstrap, and jscolorpicker. 

#### What Went Right
One of the things that went well was to change the background change color (i.e. color picker). I initally used a random color picker that I found online, but after testing, I found it wasn't compatible with safari. Then, I used jscolorpicker and it worked very well, allowing the user to type in a hex value if needed.  
Also, the final styling was simple and easy to use for users. Initially, I had each box colored in, which made the whole website look clunky (especially combined with the background color changer), but I later removed all unnecessary colors and only kept the website with basic solid borders and simplistic buttons/arrows which I feel made the site look cleaner. 

#### What Went Wrong
A challenge I faced was trying to get the images to be uploaded and shown. I initally only was able to display one image for each category of top, mid, and  bottom, and the app required the user to refresh the page and upload three new images if they wanted to change that.  

I also had a hard time getting multiple uploads working because I did not understand the asynchronous nature of the file reading, which led me to try to perform operations that were invalid (i.e. display an image that was not loaded yet).  

When I finally was able to get the files to load, I had trouble changing the view of the images in the correct order. The images wouldn't always show up in the correct order; for instance, the image that should be at top might end up at the bottom. In order to fix this, I made html divisions that would contain the top, mid, and bottom images so the images would always be in the right place. 

#### What Would I Change Next Time
I would add a drag and drop image upload option, and perhaps some way for the images to be stored for later use even when the browser is closed.

#### Conclusion
I feel like I was able to get all my initial requirements met, although I could've definitely done more with making it more user friendly (i.e. drag and drop files). I learned a lot such as how to upload images that a user wants displayed, how image slideshows work, and how images are processed asynchronously.
