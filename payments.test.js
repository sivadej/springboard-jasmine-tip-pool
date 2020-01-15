describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '55';
      tipAmtInput.value = '10';
      
    });
  
    it('should populate the bill/tip/percentage table', function () {
      submitPaymentInfo();
      let listOfTds = document.querySelectorAll('#payment1 > td');
      expect(listOfTds[0].innerText).toEqual('$55');
      expect(listOfTds[1].innerText).toEqual('$10');
      expect(listOfTds[2].innerText).toEqual('18%');
    });

    it('should insert data into the allPayments object', function(){
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
    });

    it('should not insert any data on empty forms', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
      });
  
  
    afterEach(function() {
      // teardown logic
      allPayments = {};
      paymentId = 0;
      payment1 = {};
      paymentTbody.innerHTML='';
      document.querySelector('#summaryTable tbody').innerHTML='';
    });
  });
  