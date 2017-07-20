# aint

Simpler and minimal state management

ain't nobody got time for complex state

### Usage

#### React

```js
const aint = require("aint");
const loggerMiddlware = aint.loggerMiddlware();
aint.use(loggerMiddlware);

aint.publish("user", { firstname: "Rajika", lastname: "Imal" })
  .then(state => {
    console.log(state);
  })
  .catch(err => {
    console.log(err);
  });

aint.publish("user.status", { private: false })
  .then(state => {
    console.log(state);
  })
  .catch(err => {
    console.log(err);
  });

aint.subscribe("user")
  .then(state => {
    console.log(state);
  })
  .catch(err => {
    console.log(err);
  });

aint.get();
aint.get("user");
aint.get("user.firstname");
```

{
  user: {
    firstname: "Rajika",
    lastname: "Imal"
  }
  blog: {
    url: "rajikimal.github.io"
  }
}

### API

