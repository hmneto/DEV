function observerFun() {
  function fun1(command) {
    if (command.macaki) console.log(command.macaki);
  }
  return { fun1 };
}
function observerFun2() {
  function fun(command) {
    if (command.info) console.log(command.info);
  }
  return { fun };
}
function createObserver() {
  let observers = [];
  function subscribe(func) {
    observers.push(func);
  }
  function notifyAll(command) {
    for (observerFunction of observers) {
      observerFunction(command);
    }
  }
  // function trigger() {
  //     notifyAll({ info: 'ok' })
  // }
  return { subscribe, notifyAll };
}
const ob = observerFun();
const ob2 = observerFun2();
observ = createObserver();
observ.subscribe(ob.fun1);
observ.subscribe(ob2.fun);
observ.notifyAll({ info: "ok" });
observ.notifyAll({ macaki: "nossa" });