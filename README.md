# eBuds - MultiversX Wallet Viewer

A simple, client-side wallet viewer for the MultiversX blockchain, built with vanilla HTML, CSS, and JavaScript. This tool allows users to connect their wallet and view their EGLD balance, tokens, and NFT collections, with a special focus on the `eBuds` NFT collection for voting power calculation.

**Live Demo:** [https://elrondbuds.github.io/ElrondBuds/wallet]  (Please update this link with your actual URL)



---

## ✨ Features

* **Multiple Connection Methods:** Connect using the xPortal App (QR Code), the MultiversX Browser Extension, or by viewing any address manually.
* **Asset Display:**
    * View your EGLD balance.
    * List all held fungible tokens (ESDTs).
    * List all held NFT collections with a count for each.
* **Voting Power:** Automatically calculates and displays a user's "Voting Power" based on the number of `eBuds` (BUD-3ee0cf) NFTs they hold.
* **Responsive Design:** The interface is optimized for both desktop and mobile browsers, ensuring a consistent experience across devices.
* **Multilingual Support:** Includes translations for multiple languages, managed directly within the JavaScript.
* **Zero Dependencies Build:** A pure client-side application with no build steps required.

## 🛠️ Tech Stack

* **Frontend:** Vanilla HTML5, CSS3, and JavaScript (ESM).
* **Blockchain Interaction:**
    * [Elven.js](https://www.elvenjs.com/): A lightweight JavaScript library for MultiversX wallet interactions.
    * [MultiversX API](https://docs.multiversx.com/sdk-and-tools/rest-api/multiversx-api/): Used for fetching on-chain data like token/NFT balances and account details.
    * **CORS Proxy:** Uses a public CORS proxy to bypass potential cross-origin issues when fetching data from the public API in a browser environment.

## 🚀 Getting Started

This project is entirely client-side, so no complex setup or build process is needed.

### Prerequisites

You only need a modern web browser. For local development, a simple local server is recommended to avoid potential issues with browser security policies.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/ebuds-wallet-viewer.git](https://github.com/your-username/ebuds-wallet-viewer.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd ebuds-wallet-viewer
    ```

3.  **Serve the files:**
    You can use any simple HTTP server. For example, if you have Node.js installed, you can use `http-server`:
    ```sh
    # Install http-server globally if you haven't already
    npm install -g http-server

    # Start the server
    http-server
    ```
    Or, if you have Python 3:
    ```sh
    python -m http.server
    ```
    Now, open your browser and navigate to `http://localhost:8080` (or the address provided by your server).

## 📂 File Structure

* `wallet.html`: The main entry point of the application. Contains all the HTML structure and the core JavaScript logic.
* `styles.css`: Contains all the styling rules for the application, including the futuristic theme and responsive design.
* `assets/`: A folder to store static assets like logos and images.

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, improvements, or have found a bug, please feel free to:

1.  **Open an Issue:** Describe the bug or feature proposal.
2.  **Fork the Repository:** Create your own copy of the project.
3.  **Create a Pull Request:** Submit your changes for review.

Please ensure your code follows the existing style and conventions.

## 📄 License

This project is open source and available under the **MIT License**. 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

