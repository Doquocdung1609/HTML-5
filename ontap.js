var productTag = document.getElementById('product')
var unitPriceTag = document.getElementById('unit_price')
var quantityTag = document.getElementById('quantity')
var totalnumberTag = document.getElementById('total_number')
var fullnameTag =  document.getElementById('fullname')
var shippingaddressTag =  document.getElementById('shipping_address')
var creditcardTag =  document.getElementById('credit_card')
var card1Tag =  document.getElementById('card-1')
var card2Tag =  document.getElementById('card-2')
var card3Tag =  document.getElementById('card-3')
var card4Tag =  document.getElementById('card-4')
var dialogTag = document.getElementById('dialog-id')
var dataTable = document.getElementById('data-table')
var count = 0;
var userList = []


function changeProduct() {
    let product = productTag.value
    if(product == ""){
        quantityTag.disabled = true
        unitPriceTag.value = ""
        totalnumberTag.value = ""
        quantityTag.value = ""
    }
    else{
quantityTag.disabled = false
unitPriceTag.value = product
totalnumberTag.value = product * quantityTag.value

    }
}

function totalprice(){
    totalnumberTag.value = unitPriceTag.value * quantityTag.value
}

function updatecardnumber(){
    let creditcard =creditcardTag.value 
    if(creditcard = ""){
        card1Tag.disabled = true
        card2Tag.disabled = true
        card3Tag.disabled = true
        card4Tag.disabled = true
    }
    else{
        card1Tag.disabled = false
        card2Tag.disabled = false
        card3Tag.disabled = false
        card4Tag.disabled = false 
    }
}

function resetData(){
    productTag.value= ""
    unitPriceTag.value= ""
    quantityTag.value = ""
    totalnumberTag.value = ""
    fullnameTag.value = ""
    shippingaddressTag.value = ""
    creditcardTag.value = ""
    card1Tag.value = ""
    card2Tag.value = ""
    card3Tag.value = ""
    card4Tag.value = ""
}

function savedata(){
    let productinfor = productTag.value
    let unitpriceinfor = unitPriceTag.value
    let quantityinfor = quantityTag.value
    let totalnumberinfor = totalnumberTag.value
    let fullnameinfor = fullnameTag.value
    let shippingaddressinfor = shippingaddressTag.value
    let creditcardinfor = creditcardTag.value
    let card1infor = card1Tag.value
    let card2infor = card2Tag.value
    let card3infor = card3Tag.value
    let card4infor = card4Tag.value
    
    
    userList.push({
        'productinfor': productinfor,
        'unitpriceinfor':unitpriceinfor,
        'quantityinfor':quantityinfor,
        'totalnumberinfor':totalnumberinfor,
        'fullnameinfor':fullnameinfor,
        'shippingaddressinfor':shippingaddressinfor,
        'creditcardinfor':creditcardinfor,
        'card1infor':card1infor,
        'card2infor':card2infor,
        'card3infor':card3infor,
        'card4infor':card4infor,
       
    })
    console.log(userList)
    showDataTable()
}



function showDataTable(){
    dataTable.innerHTML = ''
    for(var i = 0; i<userList.length; i++){
        dataTable.innerHTML +=            
        `<tr>
        <td>${i+1}</td>
        <td>${userList[i].productinfor}</td>
        <td>${userList[i].unitpriceinfor}</td>
        <td>${userList[i].quantityinfor}</td>
        <td>${userList[i].totalnumberinfor}</td>
        <td>${userList[i].fullnameinfor}</td>
        <td>${userList[i].shippingaddressinfor}</td>
        <td>${userList[i].creditcardinfor}</td>
        <td>${userList[i].card1infor}</td>
        <td>${userList[i].card2infor}</td>
        <td>${userList[i].card3infor}</td>
        <td>${userList[i].card4infor}</td>
        <td><button onclick="deleteitem()">Delete</button></td>
    
    </tr>`
    }
}

function deleteitem(index){
    userList.splice(index,1)
    showDataTable()

}

function closedialog(){
dialogTag.style.display = "none"

}