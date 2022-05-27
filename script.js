let cnt = 0;
        const wallets = [];
        const users = [];
        const nrop = 1;
        const organizatori = [
    { 
        "Nume":"Stanley",
       "Prenume":"Harper",
       "Email" : "stan109@yahoo.com",
       "NrTelefon" : "0336915062"
    },
    {
        "Nume":"Kai",
        "Prenume":"Stewart",
        "Email" : "kaistew1257@outlook.com",
        "NrTelefon" : "0918000777"
     },
     {
        "Nume":"Lee",
        "Prenume":"Vaughn",
        "Email" : "vaughnl@gmail.com",
        "NrTelefon" : "0239000124"
     },
     {
        "Nume":"Dax",
        "Prenume":"Merritt",
        "Email" : "merdax21@yahoo.com",
        "NrTelefon" : "9281071742"
     },
     {
        "Nume":"Adam",
        "Prenume":"Brown",
        "Email" : "brownadam949@gmail.com",
        "NrTelefon" : "2104001945"
     }
  ];
       
        function showOrg(){
  
        var body = document.getElementsByTagName("body")[0];
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        for (var i = 0; i < 5; i++) {
            var row = document.createElement("tr");
            for (var j = 0; j < 4; j++) {
                var cell = document.createElement("td");
                if(j==0)
                    var cellText = document.createTextNode(organizatori[i].Nume);
                else if(j==1)
                    var cellText = document.createTextNode(organizatori[i].Prenume);
                else if(j==2)
                    var cellText = document.createTextNode(organizatori[i].Email); 
                else if(j==3)
                    var cellText = document.createTextNode(organizatori[i].NrTelefon);     
                cell.appendChild(cellText);
                row.appendChild(cell);}

        tblBody.appendChild(row);}

        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "1");
        }

        function mode(){
            var element = document.body;
            element.classList.toggle("dark-mode");
            var butoane = document.querySelectorAll(".btn");
            for (let i = 0; i < butoane.length; i++) {
                if(cnt%2==0) {
                    butoane[i].style.backgroundColor = "white";
                    butoane[i].style.color = "black";
                    const x = css(document.body,'color');
                    console.log(x);
                }
                else {
                    butoane[i].style.backgroundColor = "black";
                    butoane[i].style.color = "white";
                    const x = css(document.body,'color');
                    console.log(x);
                }   
            }
            cnt = cnt+1;
        }
        
        function add(){
            if(validateUser() == false){
                alert("Input must contain only a-z (A-Z) characters or digits ! ");
                return;
            }
            let value = document.getElementById("inp").value;
            wallets.push(value);
            let value2 = document.getElementById("inpU").value;
            users.push(value2);
            localStorage.setItem(value2,value);
        }
        function afisare(){
            let j = 1;
            for(let i=0;i<wallets.length; i++){
                let paragraf = document.createElement("p");
                paragraf.innerHTML = j + "." + "User: " + users[i] + "  =>  " + "Wallet: " + wallets[i];
                let divP = document.getElementById("divP");
                divP.appendChild(paragraf);
                j+=1;
            }
            console.log(localStorage);
        }
        function sort(){
            let paragraf = document.createElement("p");
            paragraf.innerHTML = users.sort();
            let divP = document.getElementById("divP");
            divP.appendChild(paragraf);
            
        }
        
        function deleteW(){
            let value = document.getElementById("inpN").value;
            if(validateNumber() == false) {
                alert("Input must be a number ! ");
                return; } 
            for(let i=0;i<value;i++){
                users.pop();
                wallets.pop();
            }
            
        }
        function getRandom(min, max) {
            min = 0;
            max = users.length - 1;
            let x = Math.floor(Math.random() * (max - min + 1) + min );
            let y = Math.floor(Math.random() * (max - min + 1) + min );
            if (x==y){
                while(x==y)
                    y = Math.floor(Math.random() * (max - min + 1) + min );
            }
          
            const div1 = document.getElementById('l1');
            div1.textContent = 'Locul 1 : ' + users[x];
            const div2 = document.getElementById('l2');
            div2.textContent = 'Locul 2 : ' + users[y];
            const wwinner = localStorage.getItem(users[x]);
            console.log(wwinner);
            let exp = document.getElementById('inpE').value;
            if(validateExpected() == false) {
                alert("Expected winner input must contain only a-z (A-Z) characters or digits !");
                return;
            }
            if(users[x] == exp){
                div1.style.backgroundColor = "green";
                div1.style.width = 600 + 'px';
                div1.style.height = 150 + 'px';
                div1.style.fontSize = 60 + 'px';
                div1.style.textAlign = "center";
                div1.style.marginTop = 20 + 'px';
                div2.style.backgroundColor = "red";
                stop(); }

            else div1.style.backgroundColor = "gray";
          
        
        }
        let started = 0;
        function start(){
            started = 1;
            if(users.length < 2){
                alert("Minimum 2 Users have to be inserted to start the raffle !");
                stop();
            }
           interval = setInterval(getRandom, 5000);
        }
        function stop(){
            if(started == 0)
                alert("The raffle is not started !");
            clearInterval(interval);
            
        }
        function golireStorage(){
            var checkBox = document.getElementById("myCheck");
            if (checkBox.checked == true){
                localStorage.clear();
            console.log(localStorage);
            }       
        }
        
        function hide(){
            
            let element = document.getElementById("divP");
            while (element.firstChild) {    
                element.removeChild(element.firstChild);} }
        
        function validateNumber(){
            let regex = /^\d+$|/;
            let currentvalue = document.getElementById("inpN").value;
            let valid = regex.test(currentvalue);
            return valid;
        }
        function validateUser(){
            let regex = /^[a-z]*[A-z]*\d*$/
            let currentvalue = document.getElementById("inpU").value;
            let valid = regex.test(currentvalue);
            return valid;
        }
        function validateExpected(){
            let regex = /^[a-z]*[A-z]*\d*$/
            let currentvalue = document.getElementById("inpE").value;
            let valid = regex.test(currentvalue);
            return valid;
        }
        document.addEventListener("keydown", key);
    function key(e) {
        if(e.keyCode == "32"){
            mode();
        }}
    function css( element, property ) {
    return window.getComputedStyle( element, null ).getPropertyValue( property );}

    function filter(){
        let OK = 0;
        let f = document.getElementById('filtru').value;
        let aux = 0;
        while(aux<wallets.length){
            if(f == wallets[aux])
                {
                    alert(users[aux]);
                    OK = 1;
                    return;
                }
                aux++;
        }
        if(OK == 0)
            alert("User not found !");

    }