document.getElementById('balance-button').addEventListener('click',function(){
    //  totalExpenses
    const foodCostInput =document.getElementById('food-cost');
    const foodCost   = parseFloat(foodCostInput.value);
     
      const rentCostInput = document.getElementById('Rent-cost');
      const rentCost    =  parseFloat(rentCostInput.value);

      const clocthcostInput = document.getElementById('clothes-cost');
      const clocthcost = parseFloat(clocthcostInput.value);
       
     const totalCost =parseFloat(foodCostInput.value) +  parseFloat(rentCostInput.value)+ parseFloat(clocthcostInput.value)

    const totalExpensesInput = document.getElementById('total-expenses');
    const totalExpenses = parseFloat(totalExpensesInput.innerText);
     totalExpensesInput.innerText = totalCost;
   
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

})