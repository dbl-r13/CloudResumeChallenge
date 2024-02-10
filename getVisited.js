// Invoking lambda to get and update the count for the amount of visitors I have had.

const getVisited = async () => {
    fetch("https://900kkpx3k1.execute-api.us-east-1.amazonaws.com/Deploy/readvisitors")
    .then(obj => obj.json())
    .then(data => document.getElementById('counter').innerText = data.body.tester['N']);
}

const addVisited = async () => {
    fetch("https://900kkpx3k1.execute-api.us-east-1.amazonaws.com/Deploy/addvisitors")
    .then(obj => obj.json())
    .then(data => document.getElementById('counter').innerText = data.body.tester['N']);
}

            let data = document.cookie;
            if(!data.includes("CRC-RGR")){
                const expirationDate = Date.now() + (86400000*2); 
                cookieStore.set({
                    "value": "Visitor counter that expires 2 days after site has been visited.",
                    "expires": expirationDate,
                    "name": "CRC-RGR"
                });
                console.log("Successfully added Cookie")
                addVisited()
                getVisited()

            } else {
                console.log("This site has been visited")
                getVisited()
                
            }