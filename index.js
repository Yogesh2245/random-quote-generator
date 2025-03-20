function fetchQuote() {
    fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random")
        .then(response => response.json())
        .then(result => {
            if (result.data && result.success) {
                document.getElementById("quote").innerText = `"${result.data.content}"`;
                document.getElementById("author").innerText = ` ${result.data.author}`;
            } else {
                console.log("Problem in loading data");
            }
        })
        .catch(error => {
            console.error("Error", error);
            document.getElementById("quote").innerText = "Failed to load quote.";
            document.getElementById("author").innerText = "";
        });
}

// Copy quote to clipboard
function copyToClipboard() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => console.error("Error copying text: ", err));
}

// Share quote on Twitter
function shareOnTwitter() {
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText + " " + authorText)}`;
    window.open(tweetUrl, "_blank");
}

// Execute function on load
fetchQuote();
