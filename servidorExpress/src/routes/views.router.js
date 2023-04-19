import { Router } from "express";
import router from "./carts.router";

const router = Router();

router.get('/realtimeproducts', (req,res)=>{
    res.render('realTimeProducts', {});
})

export default router;