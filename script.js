document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const flavorText = document.getElementById('flavor');
    const scoop = document.getElementById('scoop');
    const addIns = document.getElementById('addIns');
    const toppingsElement = document.getElementById('toppings');
    const body = document.body;

    const bases = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint', 'Coffee'];
    const addInsArray = ['Chip', 'Swirl', 'Chunk', 'Ripple', 'Blast'];
    const toppings = ['Fudge', 'Caramel', 'Nuts', 'Sprinkles', 'Cookie'];

    const colors = {
        Vanilla: '#f5e5b5',
        Chocolate: '#694e37',
        Strawberry: '#ff9999',
        Mint: '#98ff98',
        Coffee: '#6f4e37'
    };

    function generateFlavor() {
        const randomBase = bases[Math.floor(Math.random() * bases.length)];
        const randomAddIn = addInsArray[Math.floor(Math.random() * addInsArray.length)];
        const randomTopping = toppings[Math.floor(Math.random() * toppings.length)];

        const flavor = `${randomBase} ${randomAddIn} with ${randomTopping}`;
        flavorText.textContent = flavor;

        // Change scoop color
        scoop.style.backgroundColor = colors[randomBase];

        // Apply add-in
        addIns.className = 'add-ins ' + randomAddIn.toLowerCase();

        // Apply topping
        toppingsElement.className = 'toppings ' + randomTopping.toLowerCase();

        // Change background color
        body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 90%)`;

        // Add animation classes
        scoop.classList.add('wobble');
        flavorText.classList.add('fade-in');

        // Remove animation classes after animation ends
        setTimeout(() => {
            scoop.classList.remove('wobble');
            flavorText.classList.remove('fade-in');
        }, 500);
    }

    generateBtn.addEventListener('click', generateFlavor);
});