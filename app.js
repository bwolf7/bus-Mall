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
    let previouslyDisplayed = [];

    function displayNRandomImages() {
        let randomIndex;
        let currentlyDisplayed = [];

        document.getElementById("image-group").innerHTML = '';
    
        for (let i = 0; i < numberOfImagesToShow; i++) {
            do {
                randomIndex = Math.floor(Math.random() * Product.productList.length)
            } while (currentlyDisplayed.includes(randomIndex) || previouslyDisplayed.includes(randomIndex));
            
            currentlyDisplayed.push(randomIndex);
            displayImage(Product.productList[randomIndex]);
        }
            previouslyDisplayed = currentlyDisplayed;
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
        //Code taken from CHARTJS @ https://www.chartjs.org/docs/latest/
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['bag',
                'banana',
                'bathroom',
                'boots',
                'breakfast',
                'bubblegum',
                'chair',
                'dog-duck',
                'pen',
                'pet-sweep',
                'scissors',
                'shark',
                'sweep',
                'unicorn',
                'water-can',
                'wine-glass'],
                
                datasets: [{
                    label: '# of Clicks',
                    data: [Product.productList[0].countClicked,Product.productList[1].countClicked,Product.productList[2].countClicked,Product.productList[3].countClicked,Product.productList[4].countClicked,Product.productList[5].countClicked,Product.productList[6].countClicked,Product.productList[7].countClicked,Product.productList[8].countClicked,Product.productList[9].countClicked,Product.productList[10].countClicked,Product.productList[11].countClicked,Product.productList[12].countClicked,Product.productList[13].countClicked,Product.productList[14].countClicked,Product.productList[15].countClicked],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });  
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart2 = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['bag',
                'banana',
                'bathroom',
                'boots',
                'breakfast',
                'bubblegum',
                'chair',
                'dog-duck',
                'pen',
                'pet-sweep',
                'scissors',
                'shark',
                'sweep',
                'unicorn',
                'water-can',
                'wine-glass'],
                
                datasets: [{
                    label: '# of Displays',
                    data: [Product.productList[0].countDisplayed,Product.productList[1].countDisplayed,Product.productList[2].countDisplayed,Product.productList[3].countDisplayed,Product.productList[4].countDisplayed,Product.productList[5].countDisplayed,Product.productList[6].countDisplayed,Product.productList[7].countDisplayed,Product.productList[8].countDisplayed,Product.productList[9].countDisplayed,Product.productList[10].countDisplayed,Product.productList[11].countDisplayed,Product.productList[12].countDisplayed,Product.productList[13].countDisplayed,Product.productList[14].countDisplayed,Product.productList[15].countDisplayed],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });    
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
    