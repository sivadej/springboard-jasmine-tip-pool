describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
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
        //expect(0).toEqual(0);
      });

      

    afterEach(function() {
      // teardown logic
    });
  });
  