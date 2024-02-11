// Invoking lambda to get and update the count for the amount of visitors I have had.

const getVisited = async () => {
    await fetch("https://900kkpx3k1.execute-api.us-east-1.amazonaws.com/Deploy/js-getVisited")
    .then(obj => obj.json())
    .then(data => document.getElementById('counter').innerText = data.Item.tester['N']);
}

const addVisited = async () => {
    fetch("https://900kkpx3k1.execute-api.us-east-1.amazonaws.com/Deploy/addvisitors")
    .then(obj => obj.json())
    .then(data => document.getElementById('counter').innerText = data.body.tester['N']);
}
