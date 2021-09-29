    //constructor
    function Product(filename) {
        this.name = filename.split(".")[0];
        this.path = `assets/${filename}`;
        this.countDisplayed = 0;
        this.countClicked = 0;
    
        Product.productList.push(this);
    }
        Product.productList = [];
    
    function displayImage(productObject) {
        let imageElement = document.createElement("img");
        imageElement.src = productObject.path;
        imageElement.id = productObject.name;
        document.getElementById("image-group").appendChild(imageElement);
    
        productObject.countDisplayed = 1 + productObject.countDisplayed;
    }

    function displayNRandomImages() {
        let alreadyDisplayed = [];
        let randomIndex;
    
        document.getElementById("image-group").innerHTML = '';
    
        for (let i = 0; i < numberOfImagesToShow; i++) {
            do {
                randomIndex = Math.floor(Math.random() * Product.productList.length); 
            } while (alreadyDisplayed.includes(randomIndex));
           
            alreadyDisplayed.push(randomIndex);
            displayImage(Product.productList[randomIndex]);
        }
    
    }

    function logClick(event) {

        for (let i = 0; Product.productList.length; i++) {
    
            if (event.target.id == Product.productList[i].name) {
    
                comparisonsMade++;
    
                Product.productList[i].countClicked = 1 + Product.productList[i].countClicked;
    
                if (comparisonsMade < comparisonsToMake) {
                    displayNRandomImages();
                } else {
                    document.getElementById("image-group").removeEventListener("click", logClick);
                    
                    document.getElementById("image-group").innerHTML = "";
                    
                    let buttonEl = document.createElement("button");
                    buttonEl.innerText = "View Results";
                    buttonEl.id = "button-id"
                    document.getElementById("image-group").appendChild(buttonEl);
                    
                    document.getElementById("button-id").addEventListener("click", showResults);
                }
    
                break;
            }
        }
    
    }
    
    function showResults () {
    
        document.getElementById("image-group").innerText = ""; 
    
        for (let i = 0; i < Product.productList.length; i++) {
            let textEl = document.createElement("p");
            textEl.innerText = `${Product.productList[i].name} was clicked ${Product.productList[i].countClicked} time, and was seen ${Product.productList[i].countDisplayed} times.`
            document.getElementById("image-group").appendChild(textEl);
        }
    
    }
    
    const files = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'dog-duck.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg']
    
    const comparisonsToMake = 25;
    const numberOfImagesToShow = 3;
    
    let comparisonsMade = 0
    
    for (let file of files) {
        new Product(file);
    }
    
    displayNRandomImages(numberOfImagesToShow);
    
    document.getElementById("image-group").addEventListener("click", logClick)
    