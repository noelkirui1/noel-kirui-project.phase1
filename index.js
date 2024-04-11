fetch('http://localhost:3000/vehicles')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  document.addEventListener('DOMContentLoaded', function () {
    const purchaseButtons = document.querySelectorAll('.purchase-button');

    // Add event listener to each purchase button
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function () {
            const vehicleInfo = this.parentElement.parentElement.querySelectorAll('td');
            const vehicleName = vehicleInfo[1].innerText + ' ' + vehicleInfo[2].innerText;
            const vehicleModel = vehicleInfo[3].innerText;
            const vehicleColor = vehicleInfo[4].innerText;
            const vehiclePrice = vehicleInfo[5].innerText;

            // Alert the buyer about the purchase
            alert(`You have purchased:\nName: ${vehicleName}\nModel: ${vehicleModel}\nColor: ${vehicleColor}\nPrice: ${vehiclePrice}\nYou will be notified in due course.`);
            
            // Change button text and style
            this.innerText = 'Withdraw';
            this.classList.remove('purchase-button');
            this.classList.add('withdraw-button');
            this.removeEventListener('click', arguments.callee);

            // Add event listener to the newly created withdraw button
            this.addEventListener('click', function () {
                // Alert the buyer about the withdrawal
                alert(`You have withdrawn your purchase of:\nName: ${vehicleName}\nModel: ${vehicleModel}\nColor: ${vehicleColor}\nPrice: ${vehiclePrice}`);
                
                // Change button text and style back to purchase
                this.innerText = 'Purchase';
                this.classList.remove('withdraw-button');
                this.classList.add('purchase-button');
                this.removeEventListener('click', arguments.callee);

                // Add event listener to the purchase button again
                this.addEventListener('click', purchaseEventListener);
            });
        });
    });
});
