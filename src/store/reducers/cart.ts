import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id?: number
  nome: string
  foto: string
  preco: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  checkout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  checkout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const order = state.items.find((item) => item.id === action.payload.id)

      if (!order) {
        state.items.push(action.payload)
      } else {
        alert('Produto já está no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.checkout = true
    },
    closeCheckout: (state) => {
      state.checkout = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, openCheckout, closeCheckout, clear } =
  cartSlice.actions
export default cartSlice.reducer
