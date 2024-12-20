const coin = document.querySelector("#coin");
const heads = document.querySelector("#headCount");
const tails = document.querySelector("#tailCount");
const statusLabel = document.querySelector("#status");
const flipButton = document.querySelector("#flip");
const betInput = document.querySelector("#bet");
const coinSound = document.querySelector("#coinSound");

let headsCount = 0;
let tailsCount = 0;

// Function to process result
const processResult = (result) => {
    if (result === "heads") {
        headsCount++;
        heads.innerHTML = headsCount;
    } else {
        tailsCount++;
        tails.innerHTML = tailsCount;
    }

    statusLabel.textContent = result === "heads" ? "PILE !" : "FACE !";
};

// Function to flip the coin
const flipCoin = () => {
    const random = Math.random();
    const result = random < 0.5 ? "heads" : "tails";

    coinSound.currentTime = 0; 
    coinSound.play().catch((error) => {
        console.error("Impossible de jouer le son :", error);
    });

    // Réinitialiser les animations pour garantir qu'elles se rejouent
    coin.classList.remove("animate-heads", "animate-tails");

    setTimeout(() => {
        // Ajouter la nouvelle classe d'animation
        coin.classList.add("animate-" + result);

        setTimeout(() => {
            processResult(result); 
        }, 2900);
    }, 50); 
};


// Attach event listeners
flipButton.addEventListener("click", () => {
    const bet = parseInt(betInput.value, 10);
    if (isNaN(bet) || bet <= 0) {
        alert("Veuillez entrer une mise valide !");
        return;
    }

    flipCoin();
});
