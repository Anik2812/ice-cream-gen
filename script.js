document.addEventListener('DOMContentLoaded', () => {
    const scoop = document.getElementById('scoop');
    const addIns = document.getElementById('addIns');
    const toppingsElement = document.getElementById('toppings');
    const flavorText = document.getElementById('flavor');
    const baseBtn = document.getElementById('baseBtn');
    const addInBtn = document.getElementById('addInBtn');
    const toppingBtn = document.getElementById('toppingBtn');
    const specialBtn = document.getElementById('specialBtn');
    const resetBtn = document.getElementById('resetBtn');
    const flavorCounter = document.getElementById('flavorCounter');
    const celebration = document.getElementById('celebration');
    const sparkles = document.getElementById('sparkles');
    const face = document.getElementById('face');
    const body = document.body;



    // Check if all required elements exist
    if (!scoop || !addIns || !toppingsElement || !flavorText || !baseBtn || !addInBtn || !toppingBtn || !specialBtn || !resetBtn || !flavorCounter || !celebration || !sparkles || !face) {
        console.error("Some required DOM elements are missing.");
        return;
    }

    const bases = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint', 'Coffee', 'Bubblegum', 'Mango', 'Pistachio'];
    const addInsArray = ['Chip', 'Swirl', 'Chunk', 'Ripple', 'Blast', 'Crunch', 'Sprinkle', 'Drizzle'];
    const toppings = ['Fudge', 'Caramel', 'Nuts', 'Sprinkles', 'Cookie', 'Marshmallow', 'Fruit', 'Candy'];
    const specials = ['Rainbow', 'Galaxy', 'Unicorn', 'Dragon', 'Mermaid', 'Alien', 'Superhero', 'Dinosaur'];

    const colors = {
        Vanilla: '#f5e5b5',
        Chocolate: '#694e37',
        Strawberry: '#ff9999',
        Mint: '#98ff98',
        Coffee: '#6f4e37',
        Bubblegum: '#ffc0cb',
        Mango: '#ffd700',
        Pistachio: '#93c572'
    };

    
    const normalFaces = ['😊', '😋', '😍', '🤪', '😎', '🤓', '😜', '🥳'];
    const hoverFaces = ['😲', '🤩', '😝', '🤤', '😵', '🥴', '🤯', '🤠'];

    function setRandomFace(faceArray) {
        if (face) {
            face.textContent = faceArray[Math.floor(Math.random() * faceArray.length)];
        }
    }
    setRandomFace(normalFaces);
    if (scoop) {
        scoop.addEventListener('mouseenter', () => {
            setRandomFace(hoverFaces);
        });

        scoop.addEventListener('mouseleave', () => {
            setRandomFace(normalFaces);
        });
    }

    let currentBase = '';
    let currentAddIn = '';
    let currentTopping = '';
    let currentSpecial = '';
    let flavorCount = 0;
    function updateIceCream() {
        try {
            if (scoop && scoop.style) {
                scoop.style.backgroundColor = currentBase ? colors[currentBase] : '#fff';
            }
            if (addIns) {
                addIns.className = 'add-ins ' + (currentAddIn ? currentAddIn.toLowerCase() : '');
            }
            if (toppingsElement) {
                toppingsElement.className = 'toppings ' + (currentTopping ? currentTopping.toLowerCase() : '');
            }
            if (currentSpecial) {
                applySpecialEffect(currentSpecial);
            } else {
                scoop.style.backgroundColor = currentBase ? colors[currentBase] : '#fff';
                scoop.className = 'scoop';
            }
            
            let flavorString = 'Your ice cream: ';
            if (currentBase) flavorString += currentBase;
            if (currentAddIn) flavorString += ' ' + currentAddIn;
            if (currentTopping) flavorString += ' with ' + currentTopping;
            if (currentSpecial) flavorString += ' (' + currentSpecial + ' special!)';
            
            if (flavorText) {
                flavorText.textContent = flavorString;
            }
    
            if (currentBase && currentAddIn && currentTopping) {
                celebrate();
            }
    
        } catch (error) {
            console.error("Error in updateIceCream:", error);
        }
    }

    function applySpecialEffect(special) {
        scoop.className = 'scoop ' + special.toLowerCase();
        addIns.className = 'add-ins';
        toppingsElement.className = 'toppings';
    
        switch(special) {
            case 'Rainbow':
                scoop.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
                break;
            case 'Galaxy':
                scoop.style.background = 'radial-gradient(circle, #000033, #000066, #3333ff)';
                addStars();
                break;
            case 'Unicorn':
                scoop.style.background = 'linear-gradient(to right, pink, #ff99cc, #cc99ff)';
                addSparkles();
                break;
            case 'Dragon':
                scoop.style.background = 'radial-gradient(circle, #ff3300, #ff6600)';
                addScales();
                break;
            case 'Mermaid':
                scoop.style.background = 'linear-gradient(to bottom, #66ccff, #3399ff)';
                addScales();
                break;
            case 'Alien':
                scoop.style.background = '#33cc33';
                addEyes();
                break;
            case 'Superhero':
                scoop.style.background = 'radial-gradient(circle, #ff3333, #cc0000)';
                addCape();
                break;
            case 'Dinosaur':
                scoop.style.background = '#669900';
                addSpikes();
                break;
        }
    }
    
    function addStars() {
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            scoop.appendChild(star);
        }
    }
    
    function addSparkles() {
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            scoop.appendChild(sparkle);
        }
    }
    
    function addScales() {
        for (let i = 0; i < 30; i++) {
            const scale = document.createElement('div');
            scale.className = 'scale';
            scale.style.left = Math.random() * 100 + '%';
            scale.style.top = Math.random() * 100 + '%';
            scoop.appendChild(scale);
        }
    }
    
    function addEyes() {
        const eye1 = document.createElement('div');
        const eye2 = document.createElement('div');
        eye1.className = 'eye';
        eye2.className = 'eye';
        eye1.style.left = '30%';
        eye2.style.left = '70%';
        scoop.appendChild(eye1);
        scoop.appendChild(eye2);
    }
    
    function addCape() {
        const cape = document.createElement('div');
        cape.className = 'cape';
        scoop.appendChild(cape);
    }
    
    function addSpikes() {
        for (let i = 0; i < 5; i++) {
            const spike = document.createElement('div');
            spike.className = 'spike';
            spike.style.left = (i * 25) + '%';
            scoop.appendChild(spike);
        }
    }

    function selectRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function addSparkles() {
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
            sparkles.appendChild(sparkle);
        }
        setTimeout(() => sparkles.innerHTML = '', 1000);
    }

    baseBtn.addEventListener('click', () => {
        currentBase = selectRandom(bases);
        scoop.classList.add('wobble');
        setTimeout(() => scoop.classList.remove('wobble'), 500);
        updateIceCream();
        popSound.play();
        addSparkles();
    });

    addInBtn.addEventListener('click', () => {
        currentAddIn = selectRandom(addInsArray);
        addIns.classList.add('wobble');
        setTimeout(() => addIns.classList.remove('wobble'), 500);
        updateIceCream();
        popSound.play();
        addSparkles();
    });

    toppingBtn.addEventListener('click', () => {
        currentTopping = selectRandom(toppings);
        toppingsElement.classList.add('wobble');
        setTimeout(() => toppingsElement.classList.remove('wobble'), 500);
        updateIceCream();
        popSound.play();
        addSparkles();
    });

    specialBtn.addEventListener('click', () => {
        currentSpecial = selectRandom(specials);
        scoop.style.background = `linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)`;
        updateIceCream();
        popSound.play();
        addSparkles();
    });

    resetBtn.addEventListener('click', () => {
        currentBase = '';
        currentAddIn = '';
        currentTopping = '';
        currentSpecial = '';
        updateIceCream();
        popSound.play();
    });

    function celebrate() {
        flavorCount++;
        flavorCounter.textContent = `Flavors created: ${flavorCount}`;
        
        celebration.innerHTML = '';
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            celebration.appendChild(confetti);
        }

        setTimeout(() => celebration.innerHTML = '', 3000);
        
        // Add a fun shake animation to the whole container
        document.querySelector('.container').classList.add('shake');
        setTimeout(() => document.querySelector('.container').classList.remove('shake'), 500);
    }

    // Float animation for the ice cream
    setInterval(() => {
        scoop.classList.add('float');
        setTimeout(() => scoop.classList.remove('float'), 2000);
    }, 4000);

    // Change background color periodically
    setInterval(() => {
        body.style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 90%)`;
    }, 5000);

    // Add draggable functionality to the ice cream
    let isDragging = false;
    let startX, startY;

    scoop.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - scoop.offsetLeft;
        startY = e.clientY - scoop.offsetTop;
        scoop.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.clientX - startX;
        const y = e.clientY - startY;
        scoop.style.left = `${x}px`;
        scoop.style.top = `${y}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        scoop.style.cursor = 'grab';
    });

    // Add a fun fact about ice cream when clicking on the flavor text
    const iceCreamFacts = [
        "The first ice cream parlor in America opened in New York City in 1776.",
        "The most popular ice cream flavor is vanilla.",
        "It takes about 50 licks to finish a single scoop ice cream cone.",
        "The biggest ice cream sundae ever made was 12 feet tall!",
        "Brain freeze happens when cold ice cream touches the roof of your mouth.",
        "The first ice cream cone was invented at the 1904 World's Fair in St. Louis.",
        "In Japan, there's a type of ice cream that doesn't melt!",
        "The most ice cream eaten in one minute is 1.81 lbs!"
    ];

    flavorText.addEventListener('click', () => {
        const fact = iceCreamFacts[Math.floor(Math.random() * iceCreamFacts.length)];
        alert(`Ice Cream Fun Fact: ${fact}`);
    });

    // Add keyboard controls
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'b':
            case 'B':
                baseBtn.click();
                break;
            case 'a':
            case 'A':
                addInBtn.click();
                break;
            case 't':
            case 'T':
                toppingBtn.click();
                break;
            case 's':
            case 'S':
                specialBtn.click();
                break;
            case 'r':
            case 'R':
                resetBtn.click();
                break;
        }
    });

    // Initialize the game
    updateIceCream();
});