// function justWarning(amount){

//     const foodCostInput =document.getElementById( amount +'-cost');
//     const foodCost   = parseFloat(foodCostInput.value);
     
//       const rentCostInput = document.getElementById( amount+'-cost');
//       const rentCost    =  parseFloat(rentCostInput.value);

//       const clocthcostInput = document.getElementById(amount+'-cost');
//       const clocthcost = parseFloat(clocthcostInput.value);
       
//      const totalCost =parseFloat(foodCostInput.value) +  parseFloat(rentCostInput.value)+ parseFloat(clocthcostInput.value)
       
//       foodCostInput.value = '';
//      rentCostInput.value='';
//      clocthcostInput.value='';
//      return totalCost;

// }





// totalcost


document.getElementById('balance-button').addEventListener('click',function(){
    //  totalExpenses
     const foodCostInput =document.getElementById('food-cost');
     const foodCost   = parseFloat(foodCostInput.value);
    
      const rentCostInput = document.getElementById('Rent-cost');
    
        const rentCost    =  parseFloat(rentCostInput.value);
     

      const clocthcostInput = document.getElementById('clothes-cost');
        const clocthcost = parseFloat(clocthcostInput.value);
   
      const totalCost =parseFloat(foodCostInput.value) +  parseFloat(rentCostInput.value)+ parseFloat(clocthcostInput.value);
      const errormegassesExpenses = document.getElementById ('error-messeageExpenss');
      if(totalCost > 0 && Number){
        const totalExpensesInput = document.getElementById('total-expenses');
        const totalExpenses = parseFloat(totalExpensesInput.innerText);
         totalExpensesInput.innerText = totalCost;
         errormegassesExpenses.style.display ='none'
     }
      else{
          errormegassesExpenses.style.display ='block'
      }
       
      
     
     
       //balance
   
     const incomeTotalInput =document.getElementById('Income-total');
     const faill =      document.getElementById('last-waring');
     const incomeTotal =parseFloat(incomeTotalInput.value);
       if(incomeTotal>0 && Number){
        const balanCeInput =document.getElementById('balance-total')
        const balanCe = parseFloat(balanCeInput.innerText);
        balanCeInput.innerText = incomeTotalInput.value -totalCost;
        faill.style.display ='none'
       }
      else{
          faill.style.display ='block';
      }

       foodCostInput.value = '';
        rentCostInput.value='';
        clocthcostInput.value='';
});


// saving button

document.getElementById('saving-button').addEventListener('click',function(){

  const savingInpuit =document.getElementById('save-input');
  const savinInpuitgamuont = parseFloat(savingInpuit.value);
   
  const incomeInput =document.getElementById('Income-total');
  const  incomeTotal =parseFloat(incomeInput.value);
   

const  savingamuontTotal = incomeTotal* savinInpuitgamuont/100

  const totaltkSaveInput = document.getElementById('saveing-amount')
 const totaltakaSave = parseFloat (totaltkSaveInput.innerText);
 totaltkSaveInput.innerText= savingamuontTotal;
   
 
const balanCeInput = document.getElementById('balance-total');
const balanCe = parseFloat(balanCeInput.innerText);
if(balanCe >= totaltkSaveInput.innerText ){
  const remaingBalanceInput =document.getElementById('remaing');
  const remaingBalance =parseFloat(remaingBalanceInput.innerText);
  remaingBalanceInput.innerText = balanCeInput.innerText -totaltkSaveInput.innerText  

}

else{
  const erorbalance = document.getElementById('error-balance');
  erorbalance.style.display = 'block'
}








})

