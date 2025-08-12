const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const authorShow = document.getElementById('show');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function spinnerLoading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

function spinnerComplete() {
	quoteContainer.hidden = false;
	loader.hidden = true
}

function newQuote() {
	spinnerLoading();
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

	authorText.textContent = quote.character;
	quoteText.textContent = quote.quote;
	authorShow.textContent = quote.show;
	spinnerComplete();

	console.log(quote)
}

// quotes from 
async function getQuotes() {
	spinnerLoading();
	const apiUrl = 'https://yurippe.vercel.app/api/quotes';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {

	}
}

// tweet 
function tweetQuote() {
	const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(tweetUrl, '_blank')
}

// event 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// load
getQuotes();
