describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = '55';
      tipAmtInput.value = '10';
      serverNameInput.value = 'Alice';
    });
  
    it('should convert the bill and tip amount into a tip percent', function(){
      expect(calculateTipPercent(55, 10)).toEqual(18);
      expect(calculateTipPercent(100, 100)).toEqual(100);
      expect(calculateTipPercent(99, 0)).toEqual(0);
      expect(calculateTipPercent(7, 2)).toEqual(29);
    });

    it('insert td containing text into a given tr element', function(){
        let tbodyList = document.querySelectorAll('tbody');
        for(el of tbodyList) {
            appendTd(el,'test');
        }
        expect(document.querySelector('#serverTable > tbody > td').innerText).toEqual('test');
        expect(document.querySelector('#paymentTable > tbody > td').innerText).toEqual('test');
      });

    it('should append a delete btn as a td to the tables using appendDeleteBtn()', function(){
      submitPaymentInfo();
      submitServerInfo();

      let serverTableTds = document.querySelectorAll('#serverTable tbody tr td');
      let paymentTableTds = document.querySelectorAll('#paymentTable tbody tr td');

      expect(serverTableTds[2].innerText).toEqual('X');
      expect(paymentTableTds[3].innerText).toEqual('X');
    });
     

    afterEach(function() {
      // teardown logic
      allPayments = {};
      paymentId = 0;
      payment1 = {};
      paymentTbody.innerHTML='';
      document.querySelector('#summaryTable tbody').innerHTML='';
      serverNameInput.value = '';
      serverId = 0;
      allServers = {};
      serverTbody.innerHTML = '';
    });
  });
  