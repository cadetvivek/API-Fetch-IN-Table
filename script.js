
    fetch('https://dummyjson.com/products')
        .then(response => {
           // Checks if the response is not okay
           //Handle Response: Processes the response
           // and checks if it’s successful, then parses the JSON data.
            if (!response.ok) {
                throw new Error("Response is not working");
            }
            return response.json();
        })
        .then(data => {
            //Extract and Display Products: Extracts product data and dynamically generates
            // HTML table rows for each product.
            const products = data.products;
            const tableBody = document.getElementById("table-body");
            const rowsHTML = products.map(product => createTableRowHTML(product)).join('');
            tableBody.innerHTML = rowsHTML;
        })
        .catch(error => {
            console.error('There was a problem fetching the data', error);
        });
      //createTableRowHTML that generates an HTML string 
      //for a table row.
    function createTableRowHTML(product) {
        return `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td><img src="${product.thumbnail}" alt="${product.title}"></td>
                <td>${product.category}</td>
                <td>$${product.price}</td>
                <td>${product.rating}</td>
                <td>${product.stock}</td>
                <td>${product.brand}</td>
                <td>${product.discountPercentage}%</td>
            </tr>
        `;
    }

