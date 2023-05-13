const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./db/conn');
const hbs = require("hbs");

// Connect database connection 
connectDB();
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
 



 
 
app.use(express.json());
app.use(express.urlencoded({
        extended: false
}));

const EmpModel = require('./models/emp_model');

//server is optional port number
const port = process.env.PORT || 3000; 

 const static_path = path.join(__dirname, "../public" );
 const template_path = path.join(__dirname, "../templates/views" );
 const partials_path = path.join(__dirname, "../templates/partials" );

//use express path or get request
 app.use(express.static(static_path));
 app.set("view engine", "hbs");
 app.set("views", template_path);
 hbs.registerPartials(partials_path);

//index
app.get('/', (req, res) => {
    res.render("index")
});  

//about  
// app.get('/about', (req, res) => {
//     res.render("about")
// });

const multer = require("multer");




app.get('/about', (req, res) => {
    res.render("about")
}); 


//ambulance
app.get('/ambulance', (req, res) => {  
    res.render("ambulance")
}); 


//contactus
app.get('/contactus', (req, res) => {
    res.render("contactus")
});


//labdignostics
app.get('/labdignostics', (req, res) => {
    res.render("labdignostics")
});


//emergencyservice
app.get('/emergencyservice', (req, res) => {
    res.render("emergencyservice")
});


//homevisit
app.get('/homevisit', (req, res) => {
    res.render("homevisit")
});


//opconsultancy
app.get('/opconsultancy', (req, res) => {   
    res.render("opconsultancy")
});


//pharmacy
app.get('/pharmacy', (req, res) => {   
    res.render("pharmacy")
});


// privacypolicy 
app.get('/privacypolicy', (req, res) => {    
    res.render("privacypolicy")
});


//register
app.get('/requestcall', (req, res) => {
    res.render("requestcall")
});


//requestcall
// app.get('/requestcall', (req, res) => {
//     res.render("requestcall")
// });



//register a register start
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null,Date.now() +  path.extname(file.originalname));
    },
});


const upload = multer({ storage: storage });

app.post("/register", upload.single('profile_photo'), async (req, res) => { //ok 
    //res.render("postajob");
    console.log("register data",req.body )
    console.log("req",req.file.filename)
    console.log(JSON.stringify(req.body))
    try {


            //const profileModel = await profileModel.find({}); 
             //console.log("jobLiempeditprofilest",profile_Model)
             // res.render("empeditprofile",{profile_Model}); 
            //const password = req.body.password;
            //const confirmpassword = req.body.confirmpassword; 
           

           // if ( hospitalname === ) {

            var user_id = localStorage.getItem("user_id");
            console.log("logged user_id",user_id);


                    const  register = new EmpSchema({
                            user_id: user_id,
                            ...req.body,
                            profile_photo: req.file.filename || ""
                    })
                    
                    const updatedData = await register.save();
                    console.log("updatedData", updatedData);

                    res.status(200).render("index");



            //} else {
          //          res.send("all details required");
          //  }

           

    } catch (error) {
            console.log("error",error)
    }
});



app.get("/register", async(req, res) => { //ok 
    //res.render("postajob");
    try {
            const empList = await EmpModel.find({}); 
            console.log("empList",empList)
            res.render("register",{empList}); 
            //res.json(jobList );
        } catch (error) {
            console.log(error);
        }
});

//post a job ends

//befour express just returns status code
// app.get('/', (req, res) => {
//     res.send("hello world!")
// });
//console.log(path.join(__dirname, "../public" ));



app.listen(port, () => {
    console.log(`server is running at ${port}`);
});


