## project 1
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