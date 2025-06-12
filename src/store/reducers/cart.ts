import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id?: number
  nome: string
  foto: string
  preco: number
  quantidade: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.items[itemIndex].quantidade += 1
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantidade > 1) {
          state.items[itemIndex].quantidade -= 1
        } else {
          state.items.splice(itemIndex, 1)
        }
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
