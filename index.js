const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());



const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{

    res.send('Hello from node,how are you?where are you now............');
})

const users=[
    {id: 1,name:'shohana',email: 'shohana@gmail.com',phone: '123'},
    {id: 2,name:'shabana',email: 'shabana@gmail.com',phone: '123'},
    {id: 3,name:'salma',email: 'salma@gmail.com',phone: '123'},
    {id: 4,name:'shabnur',email: 'shabnur@gmail.com',phone: '123'},
    {id: 5,name:'soniya',email: 'soniya@gmail.com',phone: '123'}
]

app.get('/users', (req, res)=>{
    const  search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users);
    }
    
})
app.get('/users/:id',(req, res)=>{
    const id=req.params.id;
    const user =users[id]
    res.send(user);
})

app.post('/users',(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    res.json(newUser);
})

app.listen(port,()=>{
    console.log('listening on port',port);
});