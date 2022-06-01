const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

// let menuAnswers = "";
let addOrContinueGlobal = "";
let menuAnswersGlobal = "";
let engrAnswers1Global = "";
let engrAnswers2Global = "";
let engrAnswers3Global = "";
let internAnswersGlobal = "";
inquirer.prompt([
    {
        type: 'input',
        name: 'teamMgrName',
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
        choices: ['Engineer 1', 'Engineer 2', 'Engineer 3', 'Intern', 'Finish building my team']
    },

]).then(menuAnswers => {
    // menuAnswers = menuAnswers;
    console.log(addOrContinueGlobal);
    addOrContinueGlobal = menuAnswers.addOrContinue;
    menuAnswersGlobal = menuAnswers;
    checkForAnswer();
})
function engrQuestions1() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engr1Name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engr1Id',
            message: "What is ID for engineer 1?"
        },
        {
            type: 'input',
            name: 'engr1Email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'engr1Gh',
            message: 'What is their GitHub username?'
        },

    ]).then(engrAnswers1 => {
        engrAnswers1Global = engrAnswers1;
        inquirer.prompt([
            {
                type: 'list',
                name: 'addOrContinue',
                message: 'Please choose an option: ',
                choices: ['Engineer 1', 'Engineer 2', 'Engineer 3', 'Intern', 'Finish building my team']
            },

        ]).then(menuAnswers => {
            addOrContinueGlobal = menuAnswers.addOrContinue;
            checkForAnswer();
        })
    })
};
function engrQuestions2() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engr2Name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engr2Id',
            message: "What is the ID for engineer 2?"
        },
        {
            type: 'input',
            name: 'engr2Email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'engr2Gh',
            message: 'What is their GitHub username?'
        },

    ]).then(engrAnswers2 => {
        engrAnswers2Global = engrAnswers2;
        inquirer.prompt([
            {
                type: 'list',
                name: 'addOrContinue',
                message: 'Please choose an option: ',
                choices: ['Engineer 1', 'Engineer 2', 'Engineer 3', 'Intern', 'Finish building my team']
            },

        ]).then(menuAnswers => {
            addOrContinueGlobal = menuAnswers.addOrContinue;
            checkForAnswer();
        })
    })
};
function engrQuestions3() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engr3Name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'engr3Id',
            message: "What is the ID for engineer 3?"
        },
        {
            type: 'input',
            name: 'engr3Email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'engr3Gh',
            message: 'What is their GitHub username?'
        },
    ]).then(engrAnswers3 => {
        engrAnswers3Global = engrAnswers3;
        inquirer.prompt([
            {
                type: 'list',
                name: 'addOrContinue',
                message: 'Please choose an option: ',
                choices: ['Engineer 1', 'Engineer 2', 'Engineer 3', 'Intern', 'Finish building my team']
            },
        ]).then(menuAnswers => {
            addOrContinueGlobal = menuAnswers.addOrContinue;
            checkForAnswer();
        })
    })
};
function internQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the interns ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school did the intern attend?'
        },
    ]).then(internAnswers => {
        internAnswersGlobal = internAnswers;
        empType = "Intern";
        inquirer.prompt([
            {
                type: 'list',
                name: 'addOrContinue',
                message: 'Please choose an option: ',
                choices: ['Engineer 1', 'Engineer 2', 'Engineer 3', 'Intern', 'Finish building my team']
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
                        <h2>${menuAnswersGlobal.teamMgrName}</h2>
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
                    <div id="cardheader1">
                        <h2>${engrAnswers1Global.engr1Name}</h2>
                        <h3>Engineer<h3>
                    </div>
                    <div id="cardcontent1">
                        <div id="cardlist1">
                            <p id="contentitem1">ID: ${engrAnswers1Global.engr1Id}</p>
                            <p id="contentitem2">Email: ${engrAnswers1Global.engr1Email}</p>
                            <p id="contentitem3">Github: ${engrAnswers1Global.engr1Gh}</p>
                        </div>
                    </div>
                </div>
                <div id="card2">
                    <div id="cardheader1">
                        <h2>${engrAnswers2Global.engr2Name}</h2>
                        <h3>Engineer<h3>
                    </div>
                    <div id="cardcontent1">
                        <div id="cardlist1">
                            <p id="contentitem1">ID: ${engrAnswers2Global.engr2Id}</p>
                            <p id="contentitem2">Email: ${engrAnswers2Global.engr2Email}</p>
                            <p id="contentitem3">Github: ${engrAnswers2Global.engr2Gh}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="card-bottom">
            <div id="card-container">
                <div id="card2">
                    <div id="cardheader1">
                        <h2>${engrAnswers3Global.engr3Name}</h2>
                        <h3>Engineer<h3>
                    </div>
                    <div id="cardcontent1">
                        <div id="cardlist1">
                            <p id="contentitem1">ID: ${internAnswersGlobal.internName}</p>
                            <p id="contentitem2">Email: ${engrAnswers3Global.engr3Email}</p>
                            <p id="contentitem3">Github: ${engrAnswers3Global.engr3Gh}</p>
                        </div>
                    </div>
                </div>
                <div id="card2">
                    <div id="cardheader1">
                        <h2>${internAnswersGlobal.internName}</h2>
                        <h3>Intern<h3>
                    </div>
                    <div id="cardcontent1">
                        <div id="cardlist1">
                            <p id="contentitem1">ID: ${internAnswersGlobal.internId}</p>
                            <p id="contentitem2">Email: ${internAnswersGlobal.internEmail}</p>
                            <p id="contentitem3">School: ${internAnswersGlobal.internSchool}</p>
                        </div>
                    </div>
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
    if (addOrContinueGlobal === "Engineer 1") {
        engrQuestions1()
    }

    if (addOrContinueGlobal === "Engineer 2") {
        engrQuestions2()
    }

    if (addOrContinueGlobal === "Engineer 3") {
        engrQuestions3()
    }
    if (addOrContinueGlobal === "Intern") {
        internQuestions()
    }
    if (addOrContinueGlobal === "Finish building my team") {
        console.log("success!")
        console.log(engrAnswers1Global)
        buildHtml()

    }


}