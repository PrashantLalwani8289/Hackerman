let a = [
    "Initializing hack tool....",
    "Connecting to Facebook...",
    "Connecting to Server 1...",
    "Connection failed. Retrying...",
    "Connecting to Server 2...",
    "Connected to Server 2...",
    "Username MrBond007ONN",
    "Trying Boot Force...",
    "200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match not found...",
    "Another 200k passwords tried...",
    "Match found",
    "Accessing Account...",
    "Hack Successful...",
    "What you gonna do...",
    "Complain mommy..."
];

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve(true) }, seconds * 1000)
    })
}


const ShowHack = async (message) => {
    await sleep(2)
    text.innerHTML = text.innerHTML + message + "<br>"
};
(async () => {
    for (let i = 0; i < a.length; i++){
        await ShowHack(a[i]);
    }
})();