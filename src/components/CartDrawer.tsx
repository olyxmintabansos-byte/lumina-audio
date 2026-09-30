"use client";

import { useState } from "react";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const handleCheckout = () => {
    setConfirmed(true);
    setTimeout(() => setOpen(false), 1500);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-bronze text-obsidian text-sm tracking-widest font-semibold hover:bg-bronze/90 transition"
      >
        ADD TO CART
      </button>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-96 bg-obsidian border-l border-bronze/30 transform transition duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="p-6 border-b border-bronze/30">
          <div className="flex justify-between items-center">
            <h2 className="text-sm tracking-widest">ORDER SUMMARY</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-ivory/50 hover:text-ivory"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 space-y-6">
          {confirmed ? (
            <div className="flex items-center justify-center h-full flex-col gap-4">
              <div className="text-4xl">✓</div>
              <p className="text-sm tracking-widest text-bronze">
                ORDER CONFIRMED
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <p className="text-ivory/70">Lumina Reference</p>
                <p className="text-xs text-ivory/50">Planar Magnetic Headphones</p>
                <p className="text-bronze font-semibold">$1,490</p>
              </div>

              <div>
                <p className="text-xs tracking-widest mb-3">QUANTITY</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-ivory/20 hover:border-bronze"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="flex-1 px-3 py-2 bg-obsidian border border-ivory/20 text-center"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border border-ivory/20 hover:border-bronze"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border-t border-bronze/30 pt-4">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-ivory/70">Total</span>
                  <span className="text-bronze font-semibold">
                    ${1490 * quantity}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {!confirmed && (
          <div className="p-6 border-t border-bronze/30 space-y-3">
            <button
              onClick={handleCheckout}
              className="w-full py-3 bg-bronze text-obsidian text-xs tracking-widest font-semibold hover:bg-bronze/90 transition"
            >
              PROCEED TO CHECKOUT
            </button>
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 border border-ivory/20 text-xs tracking-widest hover:border-bronze transition"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </>
  );
}
