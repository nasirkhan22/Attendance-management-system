const express=require('express')
const app=express();
const cors=require('cors');
const mongoose = require('mongoose');
const User=require('./Model/User');

app.use(cors());

app.use(express.json())
mongoose.connect('mongodb://localhost:27017')

app.post('/api/regester',async (req,res)=>{
    // res.send("Hello");
    console.log(req.body);
    try{
    await User.create({

       Name:req.body.Name,
       LName : req.body.Last,
       Email : req.body.Email,
       password :req.body.password,
       
    })
    res.json({'status':'ok'})
} catch(err){
    console.log(err)
    res.json({'status':'error',error:'User Already exist'})
}
})

app.post('/api/login',async(req,res)=>{
    
    const FindUser= await User.findOne({

       Email : req.body.Email,
       password :req.body.password,
       
    })
    if(FindUser){
      
       
    console.log("LoggedIn");
    
    res.json({'status':'ok','Name':FindUser.Name})
}else{
    res.json({'status':'NotOk'})
}

    
})


app.post('/api/Attendence',async(req,res)=>{
    
    const FindUser= await User.findOne({
        Email : req.body.Email,
        dateOfAtten : date,
        
       
    })
    if (!FindUser){
        console.log("Was Not Marked");
    
    const UserAddingAttendence= await User.findOneAndUpdate(
       
        {Email : req.body.Email},
        {   $push:{attendenceArrary: [req.body.RadioButton]}   },
        
    )
    const UserAddingDate= await User.findOneAndUpdate(
       
        {Email : req.body.Email},
        { $push:{dateOfAtten: [date]}},
        res.json({'status':'Marked'})
        
    )
}
// catch{
//          console.log("FError") 
//          res.json({'status':'Failed'})  
//     }
    
    else {res.json({'status':'WasMarked'});console.log("DateAlreadyPresent")  }

})


///////////////////////////////View Attendence////////////////

app.post('/api/ViewAttendence',async(req,res)=>{
    
    const FindUser= await User.findOne({

      Email : req.body.Email,
   
       
    })
    if(FindUser){

    res.json({'status':'ok','DataAtten':FindUser.attendenceArrary,"DateData":FindUser.dateOfAtten})
    
}else{
    res.json({'status':'NotOk'})
}

    
})


//////////////AdminViewRecord///////////////////////


app.post('/api/admin/ViewRecord',async(req,res)=>{
    
    const AllData=await User.find()
    if(AllData){
        typeof AllData;
        let i=0
        try{
            
            while(true){
        AllData[i].password=undefined;
        myObject = JSON.parse(JSON.stringify(AllData));

        i++}
        }catch{
            console.log("Total User",i);
        }
        // console.log(AllData);
    
    res.json({'status':'ok','Detail':AllData,User:i})
}else{
    res.json({'status':'NotOk'})
}

    
})




app.post('/api/admin/LeaveApproval',async (req,res)=>{
    console.log(req.body.Apple)
    console.log(req.body.NumberA);
    res.json({'status':'OK'})
})
///////////////ImageUploader//////////////////


app.post('/api/Image',async (req,res)=>{
    
    console.log(req.body.Image);
    

    // await Image.create({
    //     img:req.body.Image,
       
    // })
    // res.json({'status':'ok'})



})
///////////////////ImageUploader END//////////////


var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    date=date.toString();

app.listen(1337,()=>{
    console.log("server started")
})  