const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

// Botão "Comprar" - Abre o modal de carrinho de compras
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');

cartButton.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});


// Adicionar item ao carrinho
const cardButtons = document.querySelectorAll('.card-btn');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

cardButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.parentNode.querySelector('.product-brand').textContent;
        const productPrice = parseFloat(button.parentNode.parentNode.querySelector('.price').textContent.replace('$', ''));
        const productImage = button.parentNode.parentNode.querySelector('.product-thumb').src;
        
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <div class="product-info">
                <span class="product-name">${productName}</span>
                <span class="product-price">$${productPrice.toFixed(2)}</span>
            </div>
            <button class="remove-btn">Remover</button>
        `;
        
        cartItems.appendChild(cartItem);

        // Remover item do carrinho
        const removeButtons = cartItems.querySelectorAll('.remove-btn');
        removeButtons.forEach(removeButton => {
            removeButton.addEventListener('click', () => {
                removeButton.parentNode.remove();
                updateCartTotal();
            });
        });

        updateCartTotal();
    });
});

// Atualizar o total do carrinho
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    cartItems.forEach(cartItem => {
        const productPrice = parseFloat(cartItem.querySelector('.product-price').textContent.replace('$', ''));
        total += productPrice;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}





const trackingButton = document.querySelector('#trackingButton');
const trackingModal = document.querySelector('#trackingModal');
const closeTrackingBtn = document.querySelector('#trackingModal .close');
const trackButton = document.querySelector('#trackButton');
const trackingCodeInput = document.querySelector('#trackingCode');
const trackingResult = document.querySelector('#trackingResult');

trackingButton.addEventListener('click', () => {
  trackingModal.style.display = 'block';
});

closeTrackingBtn.addEventListener('click', () => {
  trackingModal.style.display = 'none';
});

trackButton.addEventListener('click', () => {
  const trackingCode = trackingCodeInput.value;
  // Lógica para rastrear o pacote e exibir o resultado na div trackingResult
  trackingResult.textContent = `Rastreando pacote ${trackingCode}...`;
});

// Abrir o modal de suporte ao clicar no ícone do balão
document.getElementById("supportButton").addEventListener("click", function() {
    document.getElementById("supportModal").style.display = "block";
  });
  
  // Fechar o modal ao clicar no botão "X" ou fora do modal
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
      document.getElementById("supportModal").style.display = "none";
    });
  }
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("supportModal")) {
      document.getElementById("supportModal").style.display = "none";
    }
  });

// Função para abrir o modal de usuário
function openUserModal() {
    var userModal = document.getElementById("userModal");
    userModal.style.display = "block";
}

// Função para fechar o modal de usuário
function closeUserModal() {
    var userModal = document.getElementById("userModal");
    userModal.style.display = "none";
}

// Fechar o modal de usuário quando o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    var userModal = document.getElementById("userModal");
    if (event.target == userModal) {
        userModal.style.display = "none";
    }
}

// Função para adicionar os dados ao LocalStorage
function adicionarDadosLocalStorage() {
    var dados = {
        chave: 'valor'
    };

    // Converter o objeto em uma string JSON
    var dadosString = JSON.stringify(dados);

    // Armazenar os dados no LocalStorage
    localStorage.setItem('meusDados', dadosString);
}

// Função para obter os dados do LocalStorage
function obterDadosLocalStorage() {
    // Obter os dados armazenados no LocalStorage
    var dadosString = localStorage.getItem('meusDados');

    if (dadosString) {
        // Converter a string JSON de volta para um objeto
        var dados = JSON.parse(dadosString);

        // Usar os dados recuperados do LocalStorage
        console.log(dados);
    }
}

// Função para remover os dados do LocalStorage
function removerDadosLocalStorage() {
    // Remover os dados armazenados no LocalStorage
    localStorage.removeItem('meusDados');
}