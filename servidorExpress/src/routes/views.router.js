import express  from "express";
import router from "./carts.router";

const router = express.Router();

router.get('/realtimeproducts', (req,res)=>{
    res.render('realTimeProducts', {});
})

export default router;