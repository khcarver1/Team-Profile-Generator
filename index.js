const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
// let menuAnswers = "";
let addOrContinueGlobal = "";

//style
const headerElem = document.querySelector("#topheader");
const cardTop = document.querySelector("#card-top");

headerElem.style.backgroundColor = "red";
headerElem.style.backgroundColor = "green";
cardTop.style.border = "5px solid red";

inquirer.prompt([
    {
        type: 'input',
        name: 'mgrsName',
        message: 'What is the team managers name?'
    },
    {
        type: 'input',
        name: 'empMgrId',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'EmpMgrEmail',
        message: 'What is their email address?'
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
    checkForAnswer();
})

function engrQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engrsName',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'empMgrId',
            message: "What is the engineer's, manager's ID?"
        },
        {
            type: 'input',
            name: 'engrsEmail',
            message: 'What is their email address?'
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
    console.log("build html");
    fs.writeFileSync('index.html', `
    
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <header id="topheader">
        <h1>My Team</h1>
    </header>
    <section>
        <div id="card-top">
            <div id="card-container">
                <div id="cards">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
        <div id="card-bottom">

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
    }

}

