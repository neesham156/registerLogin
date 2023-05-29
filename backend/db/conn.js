const mongoose=require('mongoose')


mongoose.connect("mongodb+srv://anishmeena001:abc123456@cluster0.1kh0sgs.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connection succesful ")
}).catch((err) => {
    console.log(err);
});
