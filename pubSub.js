function pubSub() {
  const subscribes = [];
  function subscribe(fn) {
    subscribes.push(fn);
    return () => {
      const indexOf = subscribes.indexOf(fn);
      if (indexOf > -1) {
        subscribes.splice(indexOf, 1);
      }
    };
  }
  function publish(data) {
    subscribes.forEach((callback) => callback(data));
  }

  return {
    subscribe,
    publish,
  };
}

// driver code
const pubSubObj = pubSub();

const unsubscribe1 = pubSubObj.subscribe((data) => {
  console.log("Subscriber 1: " + data);
});
const unsubscribe2 = pubSubObj.subscribe((data) => {
  console.log("Subscriber 2: " + data);
});

// all subscribers will be called with the data on publish
pubSubObj.publish("Value is 10");

// Unsubscribe the first subscriber
unsubscribe1();

// Only the second subscriber will be called
pubSubObj.publish("Value is 20");
