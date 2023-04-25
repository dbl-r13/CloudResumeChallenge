fetch("https://900kkpx3k1.execute-api.us-east-1.amazonaws.com/Deploy/readvisitors")
                .then(obj => obj.json())
                .then(data => document.getElementById('counter').innerText = data.body.tester['N']);

