const mongoose = require('mongoose');
const CV = mongoose.model('CV');

// if collection is empty, add items to db
function isEmpty(CVs) {
    let items = null;
    CVs.forEach(obj => {items += obj;});
    return (items == null);
}

// get home Page
exports.getHomePage = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            if (!isEmpty(CVs)) {
                res.render('index.ejs', {Items: CVs,});
            }
            else {
                console.log('DB is empty.');
                res.render('empty.ejs');
            }
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });
};

// get admin Page
exports.getAdminPage = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            if (!isEmpty(CVs)) {
                res.render('index.ejs', {Items: CVs,});
            }
            else {
                console.log('DB is empty.');
                res.render('admin.ejs');
            }
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.getAddDoc = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            res.render('addCV.ejs', {Items: CVs,});
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.postAddDoc = (req, res) => {
    
    //Init CV model
    let myCV = new CV();
    
    //Constructor
    myCV.first_name = req.body.newFirst;
    myCV.last_name = req.body.newLast;
    myCV.objective = req.body.newObjective;
    myCV.education = req.body.INPUT_educationInputs.split(",$").map(String);
    myCV.education_year = req.body.INPUT_educationInputs2.split(",$").map(String);

    //test 
    // myCV.first_name = "Jan-Marcus";
    // myCV.last_name = "Sivadi";
    // myCV.objective = "Get a job as a Fullstack Web Developer";
    // myCV.education = [
    //     'Tallinna Tööstushariduskeskus (TTHK) (Eesti, Kutseharidus)',
    //     'Ristiku Põhikool (Eesti, Põhiharidus)',
    //     'Tallinna Muusikakeskkool (TMKK) (Eesti, Põhiharidus)',
    // ];
    // myCV.education_year = [
    //     '2019 - ... ',
    //     '2015 - 2019 ',
    //     '2010 - 2015 ',
    // ];

    myCV.languages = [
        'Eesti C2 C2 C2 C2 C1',
        'Inglise B2 B2 B1 B2 B2',
        'Saksa A2 A1 A2 A1 A2',
    ];
    myCV.computer_knowledge = [
        'PyCharm',
        'Python',
        'JavaScript',
        'CSS',
        'html',
    ];

    myCV.save((error, response) => {
        if (!error) {
            res.redirect('/');
        }
        else {
            console.log("Failed to save data.");
        }
    })
};

exports.getJson = (req, res) => {
    CV.find((error, CVs) => {
        if (!error) {
            const data = { Items: CVs };
            res.json(data);
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.DBDelete = (req, res) => {
    CV.remove((error, response) => {
        if (!error) {
            res.redirect('/admin');
            console.log("Successfully deleted the Database.");
        }
        else {
            console.log("Failed to delete the Database.");
        }
    });
};