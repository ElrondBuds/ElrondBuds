MultiversX Wallet Viewer Template
A simple, client-side wallet viewer template for the MultiversX blockchain. This tool allows users to connect their wallet and view their EGLD balance, tokens, and NFT collections. It's built with vanilla JavaScript and requires no build steps, making it incredibly easy to deploy and customize.


(Recommendation: Add a screenshot of your application here. Save it as screenshot.png in the assets folder)

Live Demo: (https://elrondbuds.github.io/ElrondBuds/wallet)

(Update this link with your production URL)

✨ Features
Multiple Connection Methods: Connect using the xPortal App (QR Code), the MultiversX Browser Extension, or by viewing any address manually.

Asset Display:

View your EGLD balance.

List all held fungible tokens (ESDTs).

List all held NFT collections with a count for each.

Customizable Voting Power: Automatically calculates and displays a user's "Voting Power" based on the number of NFTs they hold from a specific, configurable collection.

Responsive Design: Optimized for both desktop and mobile browsers.

Multilingual Support: Includes a simple translation management system directly within the JavaScript.

Zero Dependencies Build: A pure client-side application with no build steps required.

🛠️ Tech Stack
Frontend: Vanilla HTML5, CSS3, and JavaScript (ESM).

Blockchain Interaction:

Elven.js: A lightweight JavaScript library for MultiversX wallet interactions.

MultiversX API: Used for fetching on-chain data.

🔧 Configuration
To adapt this template for your own project, you need to edit the core variables inside the <script> tag in wallet.html.

1. WalletConnect Project ID (Required)
For the xPortal QR code connection to work, you need a projectId from WalletConnect Cloud. This is free to set up.

Open wallet.html, find the ElvenJS.init call, and add your projectId.

// in wallet.html

const elvenJs = ElvenJS.init({
    // ADD YOUR ID HERE
    projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
    
    apiUrl: "https://api.multiversx.com",
    chain: "mainnet"
});

2. Target NFT Collection (For Voting Power)
To calculate voting power based on your project's NFT collection, change the ebudCollectionId variable to your collection's ticker ID.

// in wallet.html

const ebudCollectionId = "YOUR-COLLECTION-ID-abcdef";

3. Tracked ESDT Tokens
To display a specific list of fungible tokens (ESDTs), update the trackedTokens array with the token identifiers of your choice.

// in wallet.html

const trackedTokens = ["TOKEN1-abcdef", "TOKEN2-123456", "ANOTHER-TOKEN-id"];

🚀 Getting Started
This project is entirely client-side, so no complex setup is needed.

Clone the repository:

git clone https://github.com/your-username/your-repo.git

(Update this URL with your repository's URL)

Configure the application:
Open wallet.html and follow the steps in the Configuration section above.

Navigate to the project directory:

cd your-repo

Serve the files locally:
You can use any simple HTTP server. For example, with Python 3:

python -m http.server

Or, if you have Node.js and http-server:

# Install http-server globally if you haven't already
npm install -g http-server

# Start the server
http-server

Now, open your browser and navigate to http://localhost:8080 (or the address provided by your server).

📂 File Structure
wallet.html: The main entry point of the application. Contains all the HTML structure and the core JavaScript logic.

styles.css: Contains all the styling rules for the application.

assets/: A folder to store static assets like logos and images.

README.md: This file.

🤝 Contributing
Contributions are welcome! If you have ideas for new features, improvements, or have found a bug, please feel free to open an issue or submit a pull request.

📄 License
This project is open source and available under the MIT License.
