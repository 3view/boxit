const scope = [
  {
    name: "CFS to CFS",
    price: "Scope",

  },
  {
    name: "Door to Door",
    price: "Scope",

  },
  {
    name: "CFS to Door ",
    price: "Scope",

  },
  {
    name: "Door to CFS",
    price: "Scope",

  }
];

const incoterm  = [
  {
    name: "EXW",
    price: "Incoterm",
  },
  {
    name: "CIF",
    price: "Incoterm",

  },
  {
    name: "DAP",
    price: "Incoterm",

  },
  {
    name: "FOB",
    price: "Incoterm",
  }
];

const OtherServices  = [
  {
    name: "Import Clearance",
    price: "Other Services",

  },
  {
    name: "Export Clearance",
    price: "Other Services",
  }
];

const vm = new Vue({
  el: "#app",
  data: {
    items: [],
    scope: scope,
    incoterm: incoterm,
    OtherServices: OtherServices,
    showCart: false,
    verified: false
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      this.items.push(item);
    },
        removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});
