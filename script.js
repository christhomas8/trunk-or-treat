        var counter=0;
        
        function repeat()
        {	
            window.setTimeout(myFunction, 100);
        }
        
        function myFunction() {
            var pic = ["images/moon.jpg","images/candy.jpg","images/costume.jpg","images/pumpkin.jpg"];
            var rand = pic[Math.floor(Math.random()*pic.length)]; 
            document.getElementById("myImg").src = rand;
            
            
            
            var com = ["RED","BLUE", "RED","BLUE"];
            var randcom = com[Math.floor(Math.random()*com.length)];
            
            var randcom1 = "DONE ";
            document.getElementById("command").innerHTML = "~SPINNING~";//+randcom;
            
            if (counter<25){
            repeat();
            counter = counter+1;
            }
            
            else {
                counter = 0;
                document.getElementById("command").innerHTML = randcom+" Side";
            }
         }  
