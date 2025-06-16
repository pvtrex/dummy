## project 01
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=di, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            font-family: Arial, sans-serif;
        }
        .button {
            display: inline-block;
            width: 50px;
            height: 50px;
            margin: 5px;
            cursor: pointer;
        }
        #grey {
            background-color: grey;
        }
        #white {
            background-color: white;
        }
        #blue {
            background-color: blue;
        }
        #yellow {
            background-color: yellow;
        }
    </style>
</head>
<body>
   <h1>
    Color Schme Swicher
    </h1>
    <span class="button" id="grey"></span>
    <span class="button" id="white"></span>
    <span class="button" id="blue"></span>
    <span class="button" id="yellow"></span>
    <h2>Try clicking on one of the the above colors to change the background color</h2>
    <script>
        const buttons = document.querySelectorAll('.button');
        buttons.forEach( function (button)  {
            button.addEventListener('click', function(e) {
                document.body.style.backgroundColor = button.id;
            });
        });
    </script>
    </body>
</html>

```
## project 02
```html
<!DOCTYPE html>
<html>
<head>
  <title>BMI Calculator</title>
</head>
<body>
  <h1>BMI Calculator</h1>
  <label for="weight">Weight (kg):</label>
  <input type="number" id="weight" name="weight"><br><br>
  <label for="height">Height (cm):</label>
  <input type="number" id="height" name="height"><br><br>
  <button onclick="calculateBMI()">Calculate BMI</button>
  <div id="result"></div>

  <script>
    function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);

      if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height.";
        return;
      }

      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      const bmiResult = "Your BMI is: " + bmi.toFixed(2);

      document.getElementById("result").innerText = bmiResult;
    }
  </script>
</body>
</html>
```


## project 03
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="clock"></div>
    <script>
    const clock = document.getElementById('clock');

    let date = new Date();
   

    setInterval(function(){
        date = new Date();
        clock.innerText = date.toLocaleTimeString();
        
    },1000)

    </script>
</body>
</html>
```