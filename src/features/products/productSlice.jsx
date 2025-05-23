import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductService from "./productService"

const initialState = {
    Products : {} ,
    loading : false,
    isSuccess : false,
    isError : false,
    message : ""
}
console.log("productSlice");

export const product = createAsyncThunk("getProducts", async(_, thunkAPI) => {
    try {
        return await ProductService.fetchProductData()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder
        .addCase(product.pending, (state) => {
            state.loading = true
        })
        .addCase(product.fulfilled, (state, actions) => {
            state.Products = actions.payload
            state.loading = false,
            state.isSuccess = true
        })

        .addCase(product.rejected, (state, actions) => {
            state.isError = true,
            state.message = actions.payload,
            state.isSuccess = false
            state.loading = false
        })
    }
})

export default productSlice.reducer

// useEffect(() => {
    //     writeDataToFirestore("categories", Shopdata)
    // })

    // const writeDataToFirestore = async (cagetegories, ShopData) => {
    //     const collectionref = collection(db, cagetegories)
    //     const batch = writeBatch(db)
    //     ShopData.forEach((item) => {
    //         const docref = doc(collectionref, item.title.toLowerCase())
    //         batch.set(docref, item)
    //     } )

    //     await batch.commit()

        
    // }