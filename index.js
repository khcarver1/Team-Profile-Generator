const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// let menuAnswers = "";
let addOrContinueGlobal = "";
let menuAnswersGlobal = "";
let empType = "";


inquirer.prompt([
    {
        type: 'input',
        name: 'mgrsName',
        message: 'What is the team managers name?'
    },
    {
        type: 'input',
        name: 'mgrId',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: 'What is their email address?'
    },
    {
        type: 'input',
        name: 'mgrOfficeNum',
        message: 'What is their office number?'
    },
    {
        type: 'list',
        name: 'addOrContinue',
        message: 'Please choose an option: ',
        choices: ['Engineer', 'Intern', 'Finish building my team']
    },

]).then(menuAnswers => {
    // menuAnswers = menuAnswers;
    addOrContinueGlobal = menuAnswers.addOrContinue;
    menuAnswersGlobal = menuAnswers;
    checkForAnswer();
})
function engrQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engrName',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engrrId',
            message: "What is the ?"
        },
        {
            type: 'input',
            name: 'engrEmail',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'engrGh',
            message: 'What is their GitHub username?'
        },

    ]).then(engrAnswers => {
        console.log(engrAnswers);
        inquirer.prompt([
            {
                type: 'list',
                name: 'addOrContinue',
                message: 'Please choose an option: ',
                choices: ['Engineer', 'Intern', 'Finish building my team']
            },

        ]).then(menuAnswers => {
            // menuAnswers = menuAnswers;
            addOrContinueGlobal = menuAnswers.addOrContinue;

            checkForAnswer();
        })
    })
};
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internsName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internrId',
            message: "What is the interns ID?"
        },
        {
            type: 'input',
            name: 'internsEmail',
            message: 'What is their email address?'
        },
    ]).then(internAnswers => {
        empType = "Intern";
        console.log(internAnswers);
        inquirer.prompt([
            {
                type: 'list',
                name: 'addOrContinue',
                message: 'Please choose an option: ',
                choices: ['Engineer', 'Intern', 'Finish building my team']
            },

        ]).then(menuAnswers => {
            console.log(menuAnswers);
            // menuAnswers = menuAnswers;
            addOrContinueGlobal = menuAnswers.addOrContinue;

            checkForAnswer();
        })
    })
};

function buildHtml() {

    fs.writeFileSync('index.html', `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
    <header id="topheader">
        <h1>My Team</h1>
    </header>
    <section>
        <div id="card-top">
            <div id="card-container">
                <div id="card1">
                    <div id="cardheader1">
                        <h2>${menuAnswersGlobal.mgrName}</h2>
                        <h3>Manager<h3>
                    </div>
                    <div id="cardcontent1">
                        <div id="cardlist1">
                            <p id="contentitem1">ID: ${menuAnswersGlobal.mgrId}</p>
                            <p id="contentitem2">Email: ${menuAnswersGlobal.mgrEmail}</p>
                            <p id="contentitem3">Office number: ${menuAnswersGlobal.mgrOfficeNum}</p>
                        </div>
                    </div>
                </div>
                <div id="card2">
                    <div id="cardheader2">
                        <h2></h2>
                    </div>
                    <div id="cardcontent2">
                        <div id="cardlist2">
                            <p id="contentitem1">card content</p>
                            <p id="contentitem2">card content</p>
                            <p id="contentitem3">card content</p>
                        </div>
                    </div>
                </div>
                <div id="card3">
                    <div id="cardheader3">
                        <h2></h2>
                    </div>
                    <div id="cardcontent3">
                        <div id="cardlist3">
                            <p id="contentitem1">card content</p>
                            <p id="contentitem2">card content</p>
                            <p id="contentitem3">card content</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="card-bottom">
            <div id="card-container">
                <div id="card4">
                    <h2>four</h2>
                    <p>card content</p>
                </div>
                <div id="card5">
                    <h2>five</h2>
                    <p>card content</p>
                </div>
            </div>
        </div>
        </div>
    </section>
    <script src="./index.js"></script>
</body>

</html>
    `)
}

function checkForAnswer() {
    if (addOrContinueGlobal === "Engineer") {
        engrQuestions();
    } else if (addOrContinueGlobal === "Intern") {
        internQuestions();
    } else {
        buildHtml();
        console.log("Success!");
        console.log(menuAnswersGlobal.mgrEmail);
    }

}

