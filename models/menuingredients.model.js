import mongoose from "mongoose";

let menuIngredientsSchema = new mongoose.Schema({
    menu_ingredients_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredients"
    },
    quantity: {
        type: String,
        required: true
    }
})

export let MenuIngredientsModel = mongoose.model("MenuIngredients", menuIngredientsSchema)