describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(serverId).toEqual(1);
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should reset the server input field after submitting',function(){
    submitServerInfo();
    expect(serverNameInput.value).toEqual('');
  })

  it('should not add a new server on empty submitServerInfo()', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
    expect(curTdList[2].innerText).toEqual('X');

    expect(document.querySelector('#serverTable > tbody > tr').id).toEqual('server1');
    
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
