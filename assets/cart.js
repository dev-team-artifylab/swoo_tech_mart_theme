async function syncCartUI(cart = null) {
  const cartCountEl = document.getElementById('cart-count');
  const cartTotalEl = document.getElementById('cart-total');

  if (!cart) {
    const res = await fetch('/cart.js', { cache: 'no-store' });
    cart = await res.json();
  }

  if (cartCountEl) {
    cartCountEl.innerText = cart.item_count;
  }

  if (cartTotalEl) {
    cartTotalEl.innerText =
      'Tk ' +
      (cart.total_price / 100).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      });
  }

  document.dispatchEvent(
    new CustomEvent('cart:updated', {
      detail: cart,
    })
  );

  return cart;
}

window.addToCart = async function (variantId, quantity = 1) {
  const addBtn = document.getElementById('add-to-cart-btn');

  try {
    if (addBtn) {
      addBtn.innerText = 'Adding...';
      addBtn.disabled = true;
    }

    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: variantId,
        quantity: quantity,
      }),
    });

    await syncCartUI();

    const drawer = document.getElementById('CartDrawer');
    const overlay = document.getElementById('CartDrawerOverlay');
    if (drawer && overlay) {
      overlay.classList.remove('hidden');
      overlay.classList.remove('opacity-0');
      setTimeout(() => {
        overlay.classList.add('opacity-100');
        drawer.classList.remove('translate-x-full');
      }, 10);
      document.body.style.overflow = 'hidden';
      if (window.refreshCartUI) window.refreshCartUI();
    }
  } catch (err) {
    console.error('Cart error:', err);
  } finally {
    if (addBtn) {
      addBtn.innerText = 'Added ✓';
      setTimeout(() => {
        addBtn.innerText = 'Add To Cart';
        addBtn.disabled = false;
      }, 1500);
    }
  }
};

function initCartSync() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    syncCartUI().catch(() => {});
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      syncCartUI().catch(() => {});
    });
  }
}

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    syncCartUI().catch(() => {});
  }
});

initCartSync();
