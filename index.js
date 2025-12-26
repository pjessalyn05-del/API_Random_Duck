// dito yung para kumuha ng random duck sa api
function generateRandomDuck() {
    const generateBtn = document.querySelector('.duck-generate-btn');
    const duckImage = document.getElementById('duckImage');
    const duckImageWrapper = document.getElementById('duckImageWrapper');
    const duckLoading = document.getElementById('duckLoading');
    const duckError = document.getElementById('duckError');
    const duckAttribution = document.getElementById('duckAttribution');
    
    if (generateBtn && generateBtn.disabled) {
        return;
    }
    
    if (generateBtn) {
        generateBtn.disabled = true;
        generateBtn.classList.add('duck-btn-loading');
    }
    
    duckImageWrapper.style.display = 'none';
    duckError.style.display = 'none';
    duckLoading.style.display = 'flex';
    duckAttribution.textContent = '';
    
    const selectedType = document.querySelector('input[name="duckType"]:checked').value;
    const timestamp = new Date().getTime();
    const imageUrl = `https://random-d.uk/api/v2/randomimg?type=${selectedType.toUpperCase()}&t=${timestamp}`;
    
    
    duckImage.src = imageUrl;
    
    duckImage.onload = function() {
        duckLoading.style.display = 'none';
        duckImageWrapper.style.display = 'block';
        duckAttribution.textContent = 'Powered by random-d.uk';
        
        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.classList.remove('duck-btn-loading');
        }
    };
    
    duckImage.onerror = function() {
        duckLoading.style.display = 'none';
        duckError.style.display = 'flex';
        
        if (generateBtn) {
            generateBtn.disabled = false;
            generateBtn.classList.remove('duck-btn-loading');
        }
    };
}

// dito yung function sa pag chechange if gif or image
function handleTypeChange() {
    const radioInputs = document.querySelectorAll('input[name="duckType"]');
    
    radioInputs.forEach(function(radio) {
        radio.addEventListener('change', function() {
            const duckImageWrapper = document.getElementById('duckImageWrapper');
            const duckError = document.getElementById('duckError');
            const duckAttribution = document.getElementById('duckAttribution');
            
            duckImageWrapper.style.display = 'none';
            duckError.style.display = 'none';
            duckAttribution.textContent = '';
        });
    });
}


function setupEventListeners() {
    handleTypeChange();
}


function loadInitialDuck() {
    generateRandomDuck();
}

setupEventListeners();
loadInitialDuck();