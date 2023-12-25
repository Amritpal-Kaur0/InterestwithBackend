const express=(require('express'))
const app=express()
const PORT=3001;
const cors=require('cors')


app.use(cors())

app.get('/interest',(req,res)=>{
     const principal=parseInt(req.query.principal)
        const rate=parseInt(req.query.rate)
        const time=parseInt(req.query.time)
        const interest=(principal*rate*time)/100;
        const totalamount=principal+interest;
        res.send({
            interest:interest,
            totalamount:totalamount
        })
        });   


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
