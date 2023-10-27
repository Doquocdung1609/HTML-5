
var dataList = {
	"Apple": ["iPhone", "iPad", "Macbook"],
	"Sam Sung": ["Samsung galaxy 5", "Samsung galaxy 5s"],
	"LG": ["LG01", "LG02"]
}


var manufacturerTag = document.getElementById('manufacturer_name')
for(m_name in dataList) {
	console.log(m_name)
	manufacturerTag.innerHTML += `<option value="${m_name}">${m_name}</option>` 
	
}

var categoryTag = document.getElementById('category_name')
function changeManufacturerName() {
	
	var value = manufacturerTag.value
	categoryTag.innerHTML = '<option value="">-- Select --</option>'
	if(value != '') {
		var categoryList = dataList[value]
		for (var i = 0; i < categoryList.length; i++) {
			categoryTag.innerHTML += `<option value="${categoryList[i]}">${categoryList[i]}</option>`
		}
	}
}


var priceTag = document.getElementById('price')
var quantityTag = document.getElementById('quantity')
var totalPriceTag = document.getElementById('total_price')
function updateTotalPrice() {
	price = priceTag.value
	quantity = quantityTag.value

	totalPriceTag.value = price * quantity
}


var productList = [] 
var productNameTag = document.getElementById('product_name')
var resultTag = document.getElementById('result')
var currentIndex = -1
function addProduct() {
	productName = productNameTag.value
	price = priceTag.value
	quantity = quantityTag.value
	totalPrice = totalPriceTag.value
	manufacturerName = manufacturerTag.value
	categoryName = categoryTag.value

	var product = {
		'productName': productName,
		'manufacturerName': manufacturerName,
		'categoryName': categoryName,
		'price': price,
		'quantity': quantity,
		'totalPrice': totalPrice,
	}

	if(currentIndex >= 0) {
		productList[currentIndex] = product
		currentIndex = -1
		saveBtn.innerHTML = 'Add Product'
        
	} else {
		productList.push(product)
	}

	console.log(product)

	
	showData()

	
	resetData()
}

function resetData() {
	productNameTag.value = ''
	priceTag.value = ''
	quantityTag.value = ''
	totalPriceTag.value = ''
	manufacturerTag.value = ''
	categoryTag.value = ''
}

function deleteItem(index) {
	console.log(index)
	productList.splice(index, 1)
	
	showData()
}

function showData() {
	
	resultTag.innerHTML = ''

	for (var i = 0; i < productList.length; i++) {
		product = productList[i]
		resultTag.innerHTML += `<tr>
							<td>${i + 1}</td>
							<td>${product.productName}</td>
							<td>${product.manufacturerName}</td>
							<td>${product.categoryName}</td>
							<td>${product.price}</td>
							<td>${product.quantity}</td>
							<td><button onclick="editItem(${i})" class="edit">Edit</button></td>
							<td><button onclick="deleteItem(${i})" class="delete">Delete</button></td>
						</tr>`
	}
}

var saveBtn = document.getElementById('save_btn')
function editItem(index) {
	currentIndex = index

	productNameTag.value = productList[index].productName
	priceTag.value = productList[index].price
	quantityTag.value = productList[index].quantity
	totalPriceTag.value = productList[index].totalPrice
	manufacturerTag.value = productList[index].manufacturerName

	changeManufacturerName()

	categoryTag.value = productList[index].categoryName

	saveBtn.innerHTML = 'Update Product'
}