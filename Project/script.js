document.addEventListener('DOMContentLoaded', function () {
    const watchList = document.getElementById('watch-list');

    // Sample watch data
    const watches = [
        { company: 'Brand A', price: '$199', features: 'Water-resistant, Stainless steel', imageUrl: 'watch1.jpg' },
        { company: 'Brand B', price: '$149', features: 'Leather strap, Chronograph', imageUrl: 'watch2.jpg' },
        { company: 'Brand C', price: '$299', features: 'Gold-plated, Automatic movement', imageUrl: 'watch3.jpg' },
        // Add more watch data as needed
    ];

    // Populate watch cards
    watches.forEach(watch => {
        const card = createWatchCard(watch);
        watchList.appendChild(card);
    });
});

function createWatchCard(watch) {
    const card = document.createElement('div');
    card.classList.add('watch-card');

    const image = document.createElement('img');
    image.src = watch.imageUrl;
    image.alt = watch.company;

    const company = document.createElement('h3');
    company.textContent = watch.company;

    const price = document.createElement('p');
    price.textContent = watch.price;

    const features = document.createElement('p');
    features.textContent = watch.features;

    const applyBtn = document.createElement('button');
    applyBtn.textContent = 'Apply';
    applyBtn.addEventListener('click', openPaymentModal);

    card.appendChild(image);
    card.appendChild(company);
    card.appendChild(price);
    card.appendChild(features);
    card.appendChild(applyBtn);

    return card;
}

function openPaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'block';
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'none';
}
