const express=require("express");
const app=express();

app.use(express.json());


const PORT=process.env.PORT ||3000;
const users=[
    {id:1,name:"Ash",hobby:"Dancing"},
{id:2,name:"Ashwini",hobby:"Cooking"},
{id:3,name:"Ashwini T",hobby:"Singing"}
];

app.get("/",(req,res)=>{
    res.status(201).send({msg:"hello"});
});
app.get("/api/users",(req,res)=>{
    console.log("hi");
    //console.log(req.query);
  // res.send(users);
     const name = req.query.name;
     console.log(name);
    //  const hobby = req.query.hobby;
res.sendStatus(200);
    // res.send(`Name: ${name}, hobby: ${hobby}`);

});

app.post('/api/users',(req,res)=>{
    console.log(req.body);
    return res.sendStatus(200);

})

app.get("/api/users/:id",(req,res)=>{
    console.log(req.params);
    const parsedInt=parseInt(req.params.id);
    console.log(parsedInt);
    console.log("param id")
    if(isNaN(parsedInt)) return res.send({msg:"Invalid Request"});
    const findUser=users.find((a)=>a.id===parsedInt);
    if(!findUser) return res.sendStatus(404);
    return res.send(findUser);

})


app.get("/api/products",(req,res)=>{
    res.send([
        {id:1,name:"Chicken",quantity:"1 kg"},
        {id:2,name:"Fish",quantity:"2 kg"},
        {id:1,name:"Beef",quantity:"3 kg"}
    ]);
});

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});


