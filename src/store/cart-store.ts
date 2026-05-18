import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (id: string) => void;

  increaseQuantity: (id: string) => void;

  decreaseQuantity: (id: string) => void;

  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const existingItem = get().items.find((i) => i._id === item._id);

        if (existingItem) {
          set({
            items: get().items.map((i) =>
              i._id === item._id
                ? {
                    ...i,
                    quantity: i.quantity + 1,
                  }
                : i,
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                ...item,
                quantity: 1,
              },
            ],
          });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item._id !== id),
        });
      },

      increaseQuantity: (id) => {
        set({
          items: get().items.map((item) =>
            item._id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        });
      },

      decreaseQuantity: (id) => {
        const updatedItems = get()
          .items.map((item) =>
            item._id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item,
          )
          .filter((item) => item.quantity > 0);

        set({
          items: updatedItems,
        });
      },

      clearCart: () => {
        set({
          items: [],
        });
      },
    }),
    {
      name: "restaurant-cart",

      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);
