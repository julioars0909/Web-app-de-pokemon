import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/Trainer.slice'
export default configureStore({
    reducer: {
        trainer
    }
})